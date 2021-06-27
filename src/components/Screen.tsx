import * as React from "react";
import { View, StyleSheet, StatusBar, ViewProps } from "react-native";
import { colors } from "../styles";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

interface ScreenProps extends ViewProps {}
const Screen: React.FC<ScreenProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: STATUS_BAR_HEIGHT,
    flex: 1,
  },
});

export default Screen;
