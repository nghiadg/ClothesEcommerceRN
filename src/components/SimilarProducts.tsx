import "react-native-get-random-values";
import { nanoid } from "nanoid";
import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { h5, paragraph } from "../styles";
const windowWidth = Dimensions.get("window").width;

const SimilarProducts: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Similar Products</Text>
      <FlatList
        horizontal={true}
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={() => nanoid()}
        renderItem={() => (
          <TouchableOpacity>
            <View style={styles.product}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                }}
                style={styles.image}
              />
              <Text style={styles.productName}>Similar Product</Text>
              <Text style={styles.price}>$1900.00</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ marginLeft: -15 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 50,
  },
  heading: {
    ...h5,
    marginBottom: 15,
  },
  product: {
    width: (windowWidth - 80) / 3,
    marginLeft: 15,
  },
  image: {
    width: (windowWidth - 80) / 3,
    height: (windowWidth - 80) / 3,
    resizeMode: "cover",
    flex: 1,
  },
  productName: {
    ...paragraph,
  },
  price: {
    ...paragraph,
    fontWeight: "700",
  },
});

export default SimilarProducts;
