import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors, paragraph, radius } from "../styles";

interface SizeTagProps {
  disabled?: boolean;
  style: ViewStyle;
}

const SizeTag: React.FC<SizeTagProps> = ({ disabled, style }) => {
  const tagStyles = {
    opacity: disabled ? 0.3 : 1,
  };

  return (
    <TouchableOpacity disabled={disabled}>
      <View style={[styles.container, tagStyles, style]}>
        <Text style={styles.size}>XS-S</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray300,
    alignSelf: "flex-start",
    paddingHorizontal: 11,
    minWidth: 36,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.s,
  },
  size: {
    ...paragraph,
    fontWeight: "500",
    lineHeight: 35,
  },
});

export default SizeTag;
