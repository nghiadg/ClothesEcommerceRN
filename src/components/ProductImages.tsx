import "react-native-get-random-values";
import { nanoid } from "nanoid";
import * as React from "react";
import { useRef } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { colors } from "../styles";
import FavouriteProductTouchable from "./FavouriteProductTouchable";

const windowWidth = Dimensions.get("window").width;
const PADDING_SCREEN = 0;
const DOT_SIZE = 7;

interface ProductImagesProps {
  data: Array<any>;
}
const ProductImages: React.FC<ProductImagesProps> = ({ data = [] }) => {
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
    <View style={styles.container}>
      <ScrollView horizontal={true} pagingEnabled onScroll={handleScrollSlick}>
        {data.map(() => (
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1556898016-f29272dea794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            }}
            style={styles.image}
            key={nanoid()}
          />
        ))}
      </ScrollView>
      <View style={styles.dots}>{renderAnimatedDots()}</View>
      <View style={styles.favourite}>
        <FavouriteProductTouchable />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: (windowWidth * 337) / 375,
  },
  image: {
    width: windowWidth,
    height: "100%",
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 15,
    position: "absolute",
    bottom: 15,
    width: "100%",
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
  favourite: {
    position: "absolute",
    bottom: 15,
    right: 22,
  },
});

export default ProductImages;
