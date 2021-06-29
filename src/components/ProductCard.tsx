import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { PRODUCT_DETAIL } from "../constants/stackNavigatorName";
import { colors, h3, paragraph, radius } from "../styles";
import { small } from "../styles/typography";
import FavouriteProductTouchable from "./FavouriteProductTouchable";
const windowWidth = Dimensions.get("window").width;

interface ProductCardProps {
  image: any;
  title: string;
  price: number;
  discount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  discount,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(PRODUCT_DETAIL);
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={styles.heart}>
            <FavouriteProductTouchable />
          </View>
          <View style={styles.discount}>
            <Text style={styles.discountText}>-{discount}%</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (windowWidth - 65) / 2,
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: (windowWidth - 50) / 2,
    borderRadius: radius.s,
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
  title: {
    ...paragraph,
    fontWeight: "500",
    marginTop: 12,
    marginBottom: 10,
  },
  price: {
    ...h3,
  },
  heart: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  discount: {
    backgroundColor: colors.primary,
    width: 39,
    height: 24,
    position: "absolute",
    top: 0,
    right: 0,
    borderBottomLeftRadius: radius.s,
    alignItems: "center",
    justifyContent: "center",
  },
  discountText: {
    ...small,
    color: colors.white,
  },
});
export default ProductCard;
