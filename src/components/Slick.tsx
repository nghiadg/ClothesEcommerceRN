import "react-native-get-random-values";
import { nanoid } from "nanoid";
import * as React from "react";
import { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
  ViewStyle,
} from "react-native";
import { colors } from "../styles";

const windowWidth = Dimensions.get("window").width;

interface SlickProps {
  data: Array<any>;
  renderItem: (item: object, index: number) => React.ReactNode;
  marginHorizontal?: number;
  containerDotsStyle?: ViewStyle;
}

const DOT_SIZE = 7;

const Slick: React.FC<SlickProps> = ({
  data,
  renderItem,
  marginHorizontal = 0,
  containerDotsStyle,
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  function renderAnimatedDots() {
    return data.map((image, index) => {
      const inputRange = [
        (windowWidth - marginHorizontal * 2) * (index - 1),
        (windowWidth - marginHorizontal * 2) * index,
        (windowWidth - marginHorizontal * 2) * (index + 1),
      ];
      const width = scrollX.interpolate({
        inputRange,
        outputRange: [DOT_SIZE, DOT_SIZE * 2, DOT_SIZE],
        extrapolate: "clamp",
      });

      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.3, 1, 0.3],
        extrapolate: "clamp",
      });
      return (
        <Animated.View
          key={nanoid()}
          style={[styles.dotItem, { width, opacity }]}
        />
      );
    });
  }

  function trackingGestures(event: NativeSyntheticEvent<NativeScrollEvent>) {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { useNativeDriver: false } //fix warning animated event
    )(event);
  }

  function handleScrollSlick(event: NativeSyntheticEvent<NativeScrollEvent>) {
    trackingGestures(event);
  }

  return (
    <View style={{ width: "100%" }}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={handleScrollSlick}
        scrollEventThrottle={1}
        style={{ zIndex: -1 }}
      >
        {data.map((item, index) => (
          <View
            style={{
              width: windowWidth - marginHorizontal * 2,
            }}
            key={nanoid()}
          >
            {renderItem(item, index)}
          </View>
        ))}
      </ScrollView>
      <View style={containerDotsStyle}>
        <View style={styles.dots}>{renderAnimatedDots()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  dotItem: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: 50,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
  },
  active: {
    width: 15,
    opacity: 1,
  },
});
export default Slick;
