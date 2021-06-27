import * as React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const brandImage = require("../assets/images/brand.png");
const menuIcon = require("../assets/images/icons/ic_menu.png");
const notificationIcon = require("../assets/images/icons/ic_notification.png");

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={menuIcon} />
      </TouchableOpacity>
      <Image style={styles.brand} source={brandImage} />
      <TouchableOpacity>
        <View>
          <Image source={notificationIcon} />
          <View style={styles.ellipse} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 23,
    paddingVertical: 18,
  },
  brand: {
    height: 18,
    resizeMode: "contain",
  },
  ellipse: {
    backgroundColor: "red",
    width: 7,
    height: 7,
    borderRadius: 50,
    position: "absolute",
    top: 3,
    right: 3,
  },
});

export default Header;
