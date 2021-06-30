import "react-native-get-random-values";
import { nanoid } from "nanoid";
import * as React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import FavouriteProductTouchable from "./FavouriteProductTouchable";
import Slick from "./Slick";

const windowWidth = Dimensions.get("window").width;

interface ProductImagesProps {
  data: Array<any>;
}

const ProductImages: React.FC<ProductImagesProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Slick
        data={data}
        renderItem={() => (
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1556898016-f29272dea794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            }}
            style={styles.image}
            key={nanoid()}
          />
        )}
        containerDotsStyle={styles.dots}
      />
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
  favourite: {
    position: "absolute",
    bottom: 15,
    right: 22,
  },
});

export default ProductImages;
