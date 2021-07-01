import * as React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { radius } from "../styles";
import Slick from "./Slick";

const windowWidth = Dimensions.get("window").width;

interface SlickEventProps {
  data: Array<any>;
}

const PADDING_SCREEN = 50;

const SlickEvent: React.FC<SlickEventProps> = ({ data }) => {
  return (
    <View>
      <Slick
        data={data}
        renderItem={(img) => (
          <Image key={nanoid()} source={img} style={styles.slickItem} />
        )}
        marginHorizontal={25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slickItem: {
    width: "100%",
    height: ((windowWidth - PADDING_SCREEN) * 118) / 327, //rotate image
    resizeMode: "cover",
    borderRadius: radius.s,
  },
});
export default SlickEvent;
