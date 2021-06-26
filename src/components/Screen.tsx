import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "../styles";

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

const Screen: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: STATUS_BAR_HEIGHT,
    flex: 1,
  },
});

export default Screen;
