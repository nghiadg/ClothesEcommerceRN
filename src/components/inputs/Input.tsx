import * as React from "react";
import { TextInput, View, StyleSheet, ViewStyle } from "react-native";
import { colors, fontFamily, fontSize, radius } from "../../styles";

interface InputProps
  extends Omit<React.ComponentProps<typeof TextInput>, "style"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputStyle?: ViewStyle;
}
const Input: React.FC<InputProps> = ({
  leftIcon,
  rightIcon,
  inputStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, inputStyle]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <TextInput style={styles.input} {...props} />
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: radius.s,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.gray100,
  },
  input: {
    flex: 1,
    fontSize: fontSize.h5,
    fontWeight: "500",
    color: colors.black,
    paddingHorizontal: 15,
    fontFamily: fontFamily.regular,
  },
  leftIcon: {
    padding: 15,
    borderRightWidth: 1,
    borderColor: colors.gray200,
  },
  rightIcon: {
    padding: 15,
    paddingLeft: 0,
  },
});

export default Input;
