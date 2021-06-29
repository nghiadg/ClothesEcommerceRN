import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { colors } from "../styles";

const FavouriteProductTouchable: React.FC = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  function handleFavouriteProduct() {
    setIsFavourite((prevState) => !prevState);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFavouriteProduct}>
        {isFavourite ? (
          <Image
            source={require("../assets/images/icons/ic_heart_active.png")}
          />
        ) : (
          <Image source={require("../assets/images/icons/ic_heart.png")} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FavouriteProductTouchable;
