import * as React from "react";
import {
  View,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { BlurView } from "@react-native-community/blur";
import { colors, radius } from "../styles";
interface BottomModalProps {
  visible?: boolean;
  wrapperStyle?: ViewStyle;
}

const BottomModal: React.FC<BottomModalProps> = ({
  children,
  visible = false,
  wrapperStyle,
}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        statusBarTranslucent={true}
      >
        <BlurView
          style={styles.blur}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor={colors.white}
        />
        <View style={styles.overlay}>
          <View style={[styles.wrapper, wrapperStyle]}>
            <View style={styles.head}>
              <View style={styles.headLine} />
              <TouchableOpacity>
                <Image
                  style={styles.close}
                  source={require("../assets/images/icons/ic_close.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>{children}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  blur: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    backgroundColor: colors.white,
    height: "90%",
    borderTopLeftRadius: radius.l,
    borderTopRightRadius: radius.l,
  },
  head: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  headLine: {
    width: 60,
    height: 5,
    backgroundColor: colors.gray600,
    borderRadius: radius.l,
    alignSelf: "center",
    position: "absolute",
    top: 14,
  },
  close: {
    alignSelf: "flex-end",
  },
  content: {
    flex: 1,
  },
});

export default BottomModal;
