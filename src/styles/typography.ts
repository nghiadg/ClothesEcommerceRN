import { TextStyle } from "react-native";
import { colors } from "./colors";

export const fontSize = {
  h1: 26,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  paragraph: 14,
  large: 30,
};

export const fontFamily = {
  black: "Poppins-Black",
  bold: "Poppins-Bold",
  extraBold: "Poppins-ExtraBold",
  extraLight: "Poppins-ExtraLight",
  light: "Poppins-Light",
  medium: "Poppins-Medium",
  regular: "Poppins-Regular",
  semiBold: "Poppins-SemiBold",
  thin: "Poppins-Thin",
};

export const textBase: TextStyle = {
  fontFamily: fontFamily.regular,
  color: colors.primary,
};

export const h1: TextStyle = {
  ...textBase,
  fontSize: fontSize.h1,
  fontWeight: "700",
};

export const h2: TextStyle = {
  ...textBase,
  fontSize: fontSize.h2,
  fontWeight: "700",
};

export const h3: TextStyle = {
  ...textBase,
  fontSize: fontSize.h3,
  fontWeight: "500",
};

export const h4: TextStyle = {
  ...textBase,
  fontSize: fontSize.h4,
  fontWeight: "700",
};

export const h5: TextStyle = {
  ...textBase,
  fontSize: fontSize.h5,
  fontWeight: "700",
};

export const paragraph: TextStyle = {
  ...textBase,
  fontSize: fontSize.paragraph,
  fontWeight: "400",
};

export const large: TextStyle = {
  ...textBase,
  fontSize: fontSize.large,
  fontWeight: "700",
};
