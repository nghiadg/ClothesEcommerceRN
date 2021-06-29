import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { PRODUCT_LIST } from "../constants/stackNavigatorName";
import { h2, radius } from "../styles";

const windowWidth = Dimensions.get("window").width;

type Item = {
  title: string;
  img: any;
};

interface CardSubCategoryProps {
  item: Item;
}
const CardSubCategory: React.FC<CardSubCategoryProps> = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(PRODUCT_LIST, { title: item.title });
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={item.img} style={styles.image} />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default CardSubCategory;
