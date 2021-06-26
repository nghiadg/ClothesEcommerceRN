import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { colors } from "../../styles";
import Button from "./Button";

interface ButtonSecondaryProps extends TouchableOpacityProps {
  label: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  label,
  ...props
}) => {
  return (
    <Button
      bgColor={colors.primary}
      labelColor={colors.primary}
      label={label}
      outline={true}
      {...props}
    />
  );
};

export default ButtonSecondary;
