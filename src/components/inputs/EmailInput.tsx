import * as React from "react";
import { TextInput, Image, ViewStyle } from "react-native";
import Input from "./Input";

const userIcon = require("../../assets/images/icons/ic_user.png");

interface EmailInputProps
  extends Omit<React.ComponentProps<typeof TextInput>, "style"> {
  style?: ViewStyle;
}

const EmailInput: React.FC<EmailInputProps> = ({ style, ...props }) => {
  return (
    <Input
      leftIcon={<Image source={userIcon} />}
      {...props}
      inputStyle={style}
    />
  );
};

export default EmailInput;
