import * as React from "react";
import { useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { colors, radius } from "../styles";

const windowWidth = Dimensions.get("window").width;

interface SlickEventProps {
  data: Array<any>;
}

const PADDING_SCREEN = 50;
const DOT_SIZE = 7;

const SlickEvent: React.FC<SlickEventProps> = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  function renderAnimatedDots() {
    return data.map((image, index) => {
      const inputRange = [
        (windowWidth - PADDING_SCREEN) * (index - 1),
        (windowWidth - PADDING_SCREEN) * index,
        (windowWidth - PADDING_SCREEN) * (index + 1),
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
    <View style={styles.slick}>
      <View style={styles.slickList}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onScroll={handleScrollSlick}
          scrollEventThrottle={1}
        >
          {data.map((img) => (
            <Image key={nanoid()} source={img} style={styles.slickItem} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.dots}>{renderAnimatedDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  slick: {
    marginTop: 20,
  },
  slickList: {
    borderRadius: radius.s,
    overflow: "hidden",
  },
  slickItem: {
    width: windowWidth - PADDING_SCREEN,
    height: ((windowWidth - PADDING_SCREEN) * 4) / 11, //rotate image
    resizeMode: "cover",
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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
export default SlickEvent;
