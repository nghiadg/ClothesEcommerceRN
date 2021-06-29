import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors, h3, paragraph, radius } from "../styles";
import { small } from "../styles/typography";
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
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  function handleFavouriteProduct() {
    setIsFavourite((prevState) => !prevState);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={styles.heart}>
          <TouchableOpacity onPress={handleFavouriteProduct}>
            {isFavourite ? (
              <Image
                source={require("../assets/images/icons/ic_heart_active.png")}
              />
            ) : (
              <Image source={require("../assets/images/icons/ic_heart.png")} />
            )}
          </TouchableOpacity>
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
    backgroundColor: colors.white,
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
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
