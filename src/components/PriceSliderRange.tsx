import * as React from "react";
import { View, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { colors, radius } from "../styles";

interface PriceSliderRangeProps {
  sliderLength?: number;
}
const PriceSliderRange: React.FC<PriceSliderRangeProps> = ({
  sliderLength,
}) => {
  return (
    <View>
      <MultiSlider
        values={[0, 100]}
        min={0}
        max={100}
        markerStyle={styles.marker}
        trackStyle={styles.track}
        selectedStyle={styles.selected}
        sliderLength={sliderLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: colors.primary,
    borderWidth: 3,
    borderColor: colors.white,
    width: 17,
    height: 17,
    marginTop: 6,
  },
  track: {
    backgroundColor: colors.gray700,
    height: 6,
    borderRadius: radius.l,
  },
  selected: {
    backgroundColor: colors.primary,
  },
});

export default PriceSliderRange;
