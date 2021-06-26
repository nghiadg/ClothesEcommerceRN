import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import ButtonTransparent from "../components/buttons/ButtonTransparent";
import { LOGIN } from "../constants/stackNavigatorName";

import { colors, h1 } from "../styles";

const landingImages = [
  require("../assets/images/bg_landing_01.png"),
  require("../assets/images/bg_landing_02.png"),
  require("../assets/images/bg_landing_03.png"),
];
const brandImage = require("../assets/images/brand.png");
const windowWidth = Dimensions.get("window").width;

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        style={styles.bgGradient}
        locations={[0, 0.6, 1]}
        colors={["transparent", colors.white, colors.white]}
      >
        <View style={styles.slick}>
          <ScrollView
            horizontal={true}
            style={styles.slickList}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          >
            {landingImages.map((img) => (
              <ImageBackground
                key={img}
                source={img}
                style={styles.slickItem}
              />
            ))}
          </ScrollView>
          <View style={styles.brand}>
            <Image source={brandImage} />
          </View>
          <View style={styles.slickDesc}>
            <Text style={styles.desc}>Discover the latest wommenswear</Text>
            <View style={styles.dot}>
              {landingImages.map((img) => (
                <View style={styles.dotItem} key={img} />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.authSection}>
          <ButtonTransparent
            label="Continue as guest"
            style={styles.guestButton}
          />
          <ButtonSecondary
            label="Login"
            onPress={() => {
              navigation.navigate(LOGIN);
            }}
            style={styles.loginButton}
          />
          <ButtonPrimary label="Create Account" />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bgGradient: {
    flex: 1,
  },
  slick: {
    alignItems: "center",
    flex: 1,
  },
  slickList: {
    zIndex: -1,
  },
  slickItem: {
    width: windowWidth,
    flex: 1,
  },
  brand: {
    position: "absolute",
    marginTop: 50,
  },
  slickDesc: {
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  desc: {
    ...h1,
    textAlign: "center",
  },
  dot: {
    flexDirection: "row",
    marginLeft: -10,
    marginTop: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  dotItem: {
    width: 7,
    height: 7,
    backgroundColor: colors.primary,
    borderRadius: 50,
    marginLeft: 10,
    opacity: 0.3,
  },
  authSection: {
    paddingHorizontal: 23,
    paddingBottom: 15,
  },
  loginButton: {
    marginBottom: 15,
    marginTop: 15,
  },
  guestButton: {
    marginTop: 15,
  },
});

export default LandingPage;
