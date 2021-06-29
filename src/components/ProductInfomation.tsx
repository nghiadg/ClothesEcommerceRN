import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, h2, h3, h5, paragraph } from "../styles";

interface ProductInfomationProps {}
const ProductInfomation: React.FC<ProductInfomationProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...h3 }} numberOfLines={2}>
        Satin top with Shoulder pads
      </Text>
      <View style={styles.price}>
        <Text style={{ ...h2 }}>$1590.00</Text>
        <Text style={styles.priceDesc}>*MRP incl. of all taxes</Text>
      </View>
      <View>
        <Text style={{ ...paragraph }} numberOfLines={3}>
          BEIGE - 1058/452 Sleeveless cropped top with a round neck and shoulder
          pads, featuring an elasticated hem and a buttoned opening at the back
        </Text>
        <Text style={styles.readMore}>...Read more</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  priceDesc: {
    ...paragraph,
    color: colors.gray400,
    marginLeft: 13,
  },
  price: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 20,
  },
  readMore: {
    ...paragraph,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
    bottom: 1,
    right: 0,
    alignItems: "center",
    backgroundColor: colors.white,
    paddingRight: 70,
  },
  heading: {
    ...h5,
    marginBottom: 15,
    marginTop: 30,
  },
});
export default ProductInfomation;
