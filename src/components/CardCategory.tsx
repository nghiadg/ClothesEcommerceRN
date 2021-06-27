import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors, h5, radius } from "../styles";

const windowWidth = Dimensions.get("window").width;

interface CardCategoryProps {
  imgUrl: string;
  label: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({ imgUrl, label }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.img}
        />
        <View style={styles.label}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (windowWidth - 72) / 3,
    height: (windowWidth - 72) / 3,
    marginLeft: 11,
    marginTop: 11,
    borderRadius: radius.s,
    overflow: "hidden",
  },
  label: {
    height: 30,
    borderWidth: 1,
    borderColor: colors.gray200,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: radius.s,
    borderBottomRightRadius: radius.s,
  },
  labelText: {
    ...h5,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default CardCategory;
