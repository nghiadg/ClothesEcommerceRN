import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { colors } from "../../styles";
import Button from "./Button";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  label: string;
  isLoading?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  label,
  isLoading,
  ...props
}) => {
  return (
    <Button
      bgColor={colors.primary}
      labelColor={colors.white}
      label={label}
      isLoading={isLoading}
      {...props}
    />
  );
};

export default ButtonPrimary;
