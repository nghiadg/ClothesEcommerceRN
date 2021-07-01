import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants/keyAsyncStore";
import { MAIN } from "../../constants/stackNavigatorName";
import { updateHasToken, updateUser } from "../../global-stores/auth/authSlice";
import { useAppDispatch } from "../../global-stores/hooks";
import { isValidEmail, isValidPassword } from "../../helpers/validations";
import { loginRequest, LoginResponse } from "../../services/authServices";
import { useAsyncStore } from "../useAsyncStore";

interface ReturnInterface {
  isLoading: boolean;
  submit: () => void;
  errors: Array<string>;
}

export const useLoginSubmit = (
  email: string,
  password: string
): ReturnInterface => {
  const dispatch = useAppDispatch();
  const { setData } = useAsyncStore();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Array<string>>([]);

  const navigation = useNavigation();

  async function handleLoginSuccess(res: LoginResponse) {
    setIsLoading(false);
    await setData(ACCESS_TOKEN, { accessToken: res.accessToken });
    await setData(REFRESH_TOKEN, { accessToken: res.refreshToken });
    dispatch(updateHasToken(true));
    dispatch(updateUser(res.user));
    navigation.navigate(MAIN);
  }

  function isValidAllFields() {
    const _errors: Array<string> = [];
    if (!isValidEmail(email)) {
      _errors.push("Email is valid.");
    }

    if (!isValidPassword(password)) {
      _errors.push("Password is valid.");
    }

    setErrors(_errors);
    if (!_errors.length) {
      return true;
    }

    return false;
  }

  async function submit() {
    try {
      setIsLoading(true);
      if (!isValidAllFields()) {
        setIsLoading(false);
        return;
      }

      const res = await loginRequest(email, password);
      await handleLoginSuccess(res);
    } catch (error) {
      setIsLoading(false);
      setErrors(["Request login failed."]);
    }
  }
  return { isLoading, submit, errors };
};
