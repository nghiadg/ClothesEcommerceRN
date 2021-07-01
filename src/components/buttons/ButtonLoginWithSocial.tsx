import * as React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { colors, h5, radius } from "../../styles";

const googleIcon = require("../../assets/images/ic_google.png");
const facebookIcon = require("../../assets/images/ic_facebook.png");

type LoginProvider = "google" | "facebook";

interface ButtonLoginWithSocialProps
  extends Omit<TouchableOpacityProps, "style"> {
  provider: LoginProvider;
  buttonStyle?: ViewStyle;
}

const ButtonLoginWithSocial: React.FC<ButtonLoginWithSocialProps> = ({
  provider,
  buttonStyle,
  ...props
}) => {
  function renderProvider() {
    if (provider === "google") {
      return (
        <View style={styles.provider}>
          <Image source={googleIcon} style={styles.providerImg} />
          <Text style={[styles.providerText, styles.google]}>Google</Text>
        </View>
      );
    }

    if (provider === "facebook") {
      return (
        <View style={styles.provider}>
          <Image source={facebookIcon} style={styles.providerImg} />
          <Text style={[styles.providerText, styles.facebook]}>Facebook</Text>
        </View>
      );
    }

    return null;
  }

  let bgColor = colors.primary;
  if (provider === "google") {
    bgColor = "rgba(244, 67, 54, 0.1)";
  }
  if (provider === "facebook") {
    bgColor = "rgba(32, 150, 243, 0.1)";
  }
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
        },
        buttonStyle,
      ]}
      {...props}
    >
      {renderProvider()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    borderRadius: radius.s,
    alignItems: "center",
    justifyContent: "center",
  },
  provider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  providerImg: {
    marginRight: 10,
  },
  providerText: {
    ...h5,
  },
  google: {
    color: colors.google,
  },
  facebook: {
    color: colors.facebook,
  },
});
export default ButtonLoginWithSocial;
