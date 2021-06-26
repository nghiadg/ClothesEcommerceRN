import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ButtonLoginWithSocial from "../components/buttons/ButtonLoginWithSocial";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonTransparent from "../components/buttons/ButtonTransparent";
import EmailInput from "../components/inputs/EmailInput";
import PasswordInput from "../components/inputs/PasswordInput";
import Screen from "../components/Screen";
import { colors, h1, h5, paragraph } from "../styles";

const brandImage = require("../assets/images/brand.png");

const LoginPage: React.FC = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Image source={brandImage} />
          <View>
            <Text style={styles.welcomeHeading}>Welcome To Login</Text>
            <Text style={styles.welcomeDesc}>
              Please enter below details to login to your account
            </Text>
          </View>
        </View>
        <View>
          <EmailInput placeholder="Email" />
          <PasswordInput placeholder="Password" style={styles.inputPassword} />
          <ButtonPrimary label="Login" />
          <ButtonTransparent label="Forgot password?" />
        </View>
        <View>
          <Text style={styles.socialHeading}>Or Login With</Text>
          <View style={styles.social}>
            <ButtonLoginWithSocial
              provider="google"
              buttonStyle={styles.googleLogin}
            />
            <ButtonLoginWithSocial provider="facebook" />
          </View>
          <ButtonTransparent label="Didn’t have an account? Create Account" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  welcome: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 17,
  },
  welcomeHeading: {
    ...h1,
    textAlign: "center",
    marginTop: 54,
  },
  welcomeDesc: {
    ...paragraph,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 35,
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  googleLogin: {
    marginRight: 20,
  },
  socialHeading: {
    ...h5,
    fontWeight: "500",
    color: colors.gray500,
    textAlign: "center",
    marginBottom: 29,
  },
  inputPassword: {
    marginTop: 20,
    marginBottom: 40,
  },
});
export default LoginPage;
