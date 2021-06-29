import * as React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

const filterIcon = require("../assets/images/icons/ic_filter.png");

const HeaderRightFilter: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={filterIcon} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 23,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default HeaderRightFilter;
