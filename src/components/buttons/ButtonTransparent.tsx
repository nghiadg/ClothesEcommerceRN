import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { colors } from "../../styles";
import Button from "./Button";

interface ButtonTransparentProps extends TouchableOpacityProps {
  label: string;
}

const ButtonTransparent: React.FC<ButtonTransparentProps> = ({
  label,
  ...props
}) => {
  return (
    <Button
      bgColor="transparent"
      labelColor={colors.primary}
      label={label}
      {...props}
    />
  );
};

export default ButtonTransparent;
