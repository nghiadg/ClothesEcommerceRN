import * as React from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import Screen from "../components/Screen";
import Header from "../components/Header";
import CardCategory from "../components/CardCategory";
import SlickEvent from "../components/SlickEvent";
import ViewOverflow from "../components/ViewOverflow";
import { radius } from "../styles";

const windowWidth = Dimensions.get("window").width;

const dummyBanner = require("../assets/images/banners/banner_01.png");

const dummyCategories = [
  {
    name: "Man",
    thumb:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Woman",
    thumb:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Kids",
    thumb:
      "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

const dummyBanners = [
  {
    img: require("../assets/images/banners/banner_02.png"),
  },
  {
    img: require("../assets/images/banners/banner_03.png"),
  },
];
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Screen>
      <Header />
      <ViewOverflow>
        <View style={styles.main}>
          <FlatList
            data={dummyCategories}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <CardCategory title={item.name} imgUrl={item.thumb} />
            )}
            columnWrapperStyle={styles.categoriesContent}
            numColumns={3}
            listKey="cateogries"
            style={styles.categories}
          />
          <SlickEvent data={new Array(4).fill(dummyBanner, 0)} />
          <FlatList
            style={styles.banner}
            data={dummyBanners}
            keyExtractor={() => nanoid()}
            renderItem={({ item }) => (
              <Image source={item.img} style={styles.bannerItem} />
            )}
          />
        </View>
      </ViewOverflow>
    </Screen>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    flex: 1,
    overflow: "visible",
  },
  categories: {
    marginBottom: 20,
  },
  categoriesContent: {
    marginLeft: -11,
  },
  banner: {
    marginTop: 8,
  },
  bannerItem: {
    height: ((windowWidth - 50) * 5) / 9,
    width: "100%",
    borderRadius: radius.s,
    resizeMode: "cover",
    marginTop: 20,
  },
});

export default HomePage;
