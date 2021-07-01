import * as React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import ButtonLoginWithSocial from "../components/buttons/ButtonLoginWithSocial";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonTransparent from "../components/buttons/ButtonTransparent";
import EmailInput from "../components/inputs/EmailInput";
import PasswordInput from "../components/inputs/PasswordInput";
import Screen from "../components/Screen";
import { isValidEmail } from "../helpers/validations";
import { useLoginSubmit } from "../hooks/data/useLoginSubmit";
import { colors, h1, h5, paragraph } from "../styles";

const windowWidth = Dimensions.get("window").width;
const brandImage = require("../assets/images/brand.png");

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);

  function handleChangeEmailField(value: string) {
    setEmail(value);
  }

  function validateEmailField() {
    setIsErrorEmail(!isValidEmail(email));
  }

  function handleChangePasswordField(value: string) {
    setPassword(value);
  }

  const { isLoading, submit, errors } = useLoginSubmit(email, password);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Image source={brandImage} />
          <View>
            <Text style={styles.welcomeHeading}>Welcome To Login</Text>
            <Text style={styles.welcomeDesc}>
              Please enter below details to login to your account
            </Text>
          </View>
        </View>
        <View>
          <EmailInput
            placeholder="Email"
            value={email}
            onChangeText={handleChangeEmailField}
            onBlur={validateEmailField}
            style={isErrorEmail ? { borderColor: colors.red } : {}}
          />
          <PasswordInput
            placeholder="Password"
            style={styles.inputPassword}
            value={password}
            onChangeText={handleChangePasswordField}
          />
          <Text style={styles.errors}>{errors[0]}</Text>
          <ButtonPrimary label="Login" onPress={submit} isLoading={isLoading} />
          <ButtonTransparent
            label="Forgot password?"
            style={styles.forgotPassword}
          />
        </View>
        <View>
          <Text style={styles.socialHeading}>Or Login With</Text>
          <View style={styles.social}>
            <ButtonLoginWithSocial
              provider="google"
              buttonStyle={styles.socialButton}
            />
            <ButtonLoginWithSocial
              provider="facebook"
              buttonStyle={styles.socialButton}
            />
          </View>
          <ButtonTransparent
            label="Didn’t have an account? Create Account"
            style={styles.createAccount}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  welcome: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 17,
  },
  welcomeHeading: {
    ...h1,
    textAlign: "center",
    marginTop: 54,
  },
  welcomeDesc: {
    ...paragraph,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 35,
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    width: (windowWidth - 70) / 2,
  },
  socialHeading: {
    ...h5,
    fontWeight: "500",
    color: colors.gray500,
    textAlign: "center",
    marginBottom: 29,
  },
  inputPassword: {
    marginTop: 20,
    marginBottom: 30,
  },
  forgotPassword: {
    marginTop: 15,
  },
  createAccount: {
    marginVertical: 15,
  },
  errors: {
    textAlign: "center",
    color: colors.red,
    marginBottom: 10,
  },
});
export default LoginPage;
