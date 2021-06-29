import "react-native-get-random-values";
import { nanoid } from "nanoid";
import * as React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ProductCard from "../components/ProductCard";
import ViewOverflow from "../components/ViewOverflow";
import { colors } from "../styles";
import FilterProductModal from "../components/FilterProductModal";
import { useState } from "react";

const dummyProductList = new Array(1).fill({
  id: nanoid(),
  image:
    "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  title: "Satin top with Shoulder pads",
  price: 1930,
  discount: 20,
});

interface ProductListPageProps {}

const ProductListPage: React.FC<ProductListPageProps> = () => {
  const [isVisiableFilter] = useState(false); //TODO: set in redux. fix later
  return (
    <Screen>
      <ViewOverflow>
        <View style={styles.container}>
          <FlatList
            data={dummyProductList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
                discount={item.discount}
              />
            )}
            numColumns={2}
            columnWrapperStyle={styles.productsWrapper}
          />
        </View>
      </ViewOverflow>
      <FilterProductModal visible={isVisiableFilter} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: colors.white,
    flex: 1,
  },
  productsWrapper: {
    justifyContent: "space-between",
  },
});
export default ProductListPage;
