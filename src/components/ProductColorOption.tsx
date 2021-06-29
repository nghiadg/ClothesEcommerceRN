import "react-native-get-random-values";
import { nanoid } from "nanoid";
import * as React from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { h5 } from "../styles";
const windowWidth = Dimensions.get("window").width;

interface ProductColorOptionProps {}
const ProductColorOption: React.FC<ProductColorOptionProps> = () => {
  return (
    <View>
      <Text style={styles.heading}>Color</Text>
      <FlatList
        horizontal={true}
        data={[1, 2, 3]}
        keyExtractor={() => nanoid()}
        renderItem={() => (
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              }}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ marginLeft: -15 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    ...h5,
    marginBottom: 15,
  },
  image: {
    width: (windowWidth - 80) / 3,
    height: (windowWidth - 80) / 3,
    marginLeft: 15,
    resizeMode: "cover",
  },
});

export default ProductColorOption;
