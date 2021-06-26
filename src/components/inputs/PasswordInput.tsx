import * as React from "react";
import { useState } from "react";
import { TextInput, Image, ViewStyle, TouchableOpacity } from "react-native";
import Input from "./Input";

const lockIcon = require("../../assets/images/icons/ic_lock.png");
const eyeIcon = require("../../assets/images/icons/ic_eye.png");

interface PasswordInputProps
  extends Omit<React.ComponentProps<typeof TextInput>, "style"> {
  style?: ViewStyle;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ style, ...props }) => {
  const [isHidePassword, setIsHidePassword] = useState(true);

  return (
    <Input
      leftIcon={<Image source={lockIcon} />}
      rightIcon={
        <TouchableOpacity
          onPress={() => setIsHidePassword((prevState) => !prevState)}
        >
          <Image source={eyeIcon} />
        </TouchableOpacity>
      }
      inputStyle={style}
      secureTextEntry={isHidePassword}
      {...props}
    />
  );
};

export default PasswordInput;
