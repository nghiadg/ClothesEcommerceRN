import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { h5, paragraph } from "../styles";

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={{ ...paragraph }}>Opps! I will code screen soon!</Text>
        <View style={styles.follow}>
          <Text style={{ ...paragraph }}>Follow me on github: </Text>
          <Text style={{ ...h5 }}>https://github.com/nghiadg</Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  follow: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ProfilePage;
