import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { paragraph } from "../styles";

const ProductHelper: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>• Composition and care</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>• Find your size</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>• Check In-Store availability</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>• Delivery, exchange and returns share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  text: {
    ...paragraph,
    marginTop: 15,
  },
});

export default ProductHelper;
