import * as React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors, h5, radius } from "../../styles";

interface ButtonProps extends TouchableOpacityProps {
  bgColor?: string;
  outline?: boolean;
  label?: string;
  labelColor?: string;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  bgColor = colors.primary,
  labelColor = colors.white,
  outline = false,
  label,
  buttonStyle,
  labelStyle,
  style,
  ...props
}) => {
  const btnStyle: ViewStyle = {
    backgroundColor: outline ? "transparent" : bgColor,
    borderColor: bgColor,
    ...buttonStyle,
  };

  const lbStyle: TextStyle = {
    color: labelColor,
    ...labelStyle,
  };

  return (
    <TouchableOpacity style={[styles.container, btnStyle, style]} {...props}>
      <Text style={[styles.label, lbStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: radius.s,
  },
  label: {
    ...h5,
  },
});

export default Button;
