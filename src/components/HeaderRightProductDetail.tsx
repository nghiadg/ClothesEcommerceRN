import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const HeaderRightProductDetail: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchIcon}
        source={require("../assets/images/bottom-bar/ic_search.png")}
      />
      <Image source={require("../assets/images/icons/ic_cart.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  searchIcon: {
    marginRight: 19,
  },
});

export default HeaderRightProductDetail;
