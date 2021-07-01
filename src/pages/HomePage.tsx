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
import { useCategories } from "../hooks/data/useCategories";
import { useHomeEvent } from "../hooks/data/useHomeEvent";

const windowWidth = Dimensions.get("window").width;

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
  const { categoryList } = useCategories();
  const { eventList } = useHomeEvent();
  return (
    <Screen>
      <Header />
      <ViewOverflow>
        <View style={styles.main}>
          <FlatList
            data={categoryList}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <CardCategory title={item.name} imgUrl={item.thumbnail} />
            )}
            columnWrapperStyle={styles.categoriesContent}
            numColumns={3}
            listKey="cateogries"
            style={styles.categories}
          />
          <SlickEvent data={eventList} />
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
