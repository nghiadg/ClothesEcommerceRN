import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { colors } from "../../styles";
import Button from "./Button";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  label: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, ...props }) => {
  return (
    <Button
      bgColor={colors.primary}
      labelColor={colors.white}
      label={label}
      {...props}
    />
  );
};

export default ButtonPrimary;
