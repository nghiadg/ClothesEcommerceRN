import "react-native-get-random-values";
import { nanoid } from "nanoid";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import SlickEvent from "../components/SlickEvent";
import ViewOverflow from "../components/ViewOverflow";
import { colors, h2, radius } from "../styles";

const windowWidth = Dimensions.get("window").width;

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
          renderItem={({ item }) => (
            <View style={styles.category}>
              <ImageBackground source={item.img} style={styles.image} />
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          )}
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
  category: {
    borderRadius: radius.s,
    overflow: "hidden",
    height: ((windowWidth - 50) * 118) / 326,
    justifyContent: "center",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    zIndex: -1,
    resizeMode: "cover",
  },
  categoryTitle: {
    ...h2,
    marginLeft: 20,
    textTransform: "capitalize",
  },
});

export default CategoriesPage;
