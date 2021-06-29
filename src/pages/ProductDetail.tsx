import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import ProductColorOption from "../components/ProductColorOption";
import ViewOverflow from "../components/ViewOverflow";
import { colors } from "../styles";
import ProductSizeOption from "../components/ProductSizeOption";
import ProductInfomation from "../components/ProductInfomation";
import ProductHelper from "../components/ProductHelper";
import SimilarProducts from "../components/SimilarProducts";
import ProductImages from "../components/ProductImages";

const windowWidth = Dimensions.get("window").width;

const ProductDetail: React.FC = () => {
  return (
    <View style={styles.container}>
      <ViewOverflow>
        <ProductImages data={[1, 2, 3]} />
        <View style={styles.contentSection}>
          <ProductInfomation />
          <ProductSizeOption />
          <ProductColorOption />
          <ProductHelper />
          <SimilarProducts />
        </View>
      </ViewOverflow>
      <View style={styles.action}>
        <ButtonSecondary label="Add to Cart" style={styles.button} />
        <ButtonPrimary label="Buy Now" style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 13,
    paddingHorizontal: 24,
  },
  button: {
    width: (windowWidth - 24 * 2 - 9) / 2,
  },
  contentSection: {
    paddingHorizontal: 24,
  },
});

export default ProductDetail;
