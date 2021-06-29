import "react-native-get-random-values";
import { nanoid } from "nanoid";
import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SlickEvent from "../components/SlickEvent";
import ViewOverflow from "../components/ViewOverflow";
import { colors } from "../styles";
import CardSubCategory from "../components/CardSubCategory";

const dummyBanner = require("../assets/images/banners/banner_04.png");
const dummyCategories = [
  {
    id: nanoid(),
    img: require("../assets/images/categories/category_01.png"),
    title: "New in",
  },
  {
    id: nanoid(),
    img: require("../assets/images/categories/category_02.png"),
    title: "Collection",
  },
  {
    id: nanoid(),
    img: require("../assets/images/categories/category_03.png"),
    title: "Shoes & bags",
  },
  {
    id: nanoid(),
    img: require("../assets/images/categories/category_04.png"),
    title: "ZARA Series",
  },
];
interface CategoriesPageProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
  return (
    <ViewOverflow>
      <View style={styles.container}>
        <SlickEvent data={new Array(4).fill(dummyBanner, 0)} />
        <FlatList
          style={styles.categoryList}
          data={dummyCategories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardSubCategory item={item} />}
        />
      </View>
    </ViewOverflow>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 23,
    backgroundColor: colors.white,
  },
  categoryList: {
    marginTop: 20,
  },
});

export default CategoriesPage;
