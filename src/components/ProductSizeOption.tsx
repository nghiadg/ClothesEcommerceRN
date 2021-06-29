import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { h5 } from "../styles";
import SizeTag from "./SizeTag";

interface ProductSizeOptionProps {}
const ProductSizeOption: React.FC<ProductSizeOptionProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Size</Text>
      <SizeTag />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  heading: {
    ...h5,
    marginBottom: 15,
  },
});
export default ProductSizeOption;
