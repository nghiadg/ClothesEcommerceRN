import * as React from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";
import DropdownPicker from "../components/dropdown-pickers/DropdownPicker";
import { h3, paragraph } from "../styles";
import BottomModal from "./BottomModal";
import ButtonPrimary from "./buttons/ButtonPrimary";
import PriceSliderRange from "./PriceSliderRange";
import SizeTag from "./SizeTag";

const windowWidth = Dimensions.get("window").width;
const PADDING_H = 30;

interface FilterProductModalProps {
  visible: boolean;
}

const FilterProductModal: React.FC<FilterProductModalProps> = ({ visible }) => {
  return (
    <BottomModal visible={visible}>
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <View style={styles.filterHeader}>
          <Text style={styles.filterHeading}>Filter</Text>
          <Text style={styles.filterClear}>Clear all</Text>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          <View style={styles.filterContent}>
            <View>
              <Text style={styles.heading}>Size</Text>
              <View style={styles.sizeList}>
                <SizeTag style={styles.sizeItem} />
                <SizeTag style={styles.sizeItem} />
                <SizeTag style={styles.sizeItem} />
                <SizeTag style={styles.sizeItem} />
                <SizeTag style={styles.sizeItem} />
                <SizeTag style={styles.sizeItem} />
              </View>
            </View>
            <View style={[styles.option, styles.color]}>
              <Text style={styles.heading}>Color</Text>
              <DropdownPicker />
            </View>
            <View style={styles.option}>
              <Text style={styles.heading}>Collection</Text>
              <DropdownPicker />
            </View>
            <View style={styles.option}>
              <Text style={styles.heading}>Characterstics</Text>
              <DropdownPicker />
            </View>
            <View style={styles.option}>
              <View style={styles.priceRange}>
                <Text style={[styles.heading, styles.priceHeading]}>Price</Text>
                <Text style={{ ...h3 }}>$1099 - $3599</Text>
              </View>
              <PriceSliderRange sliderLength={windowWidth - PADDING_H * 2} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonApply}>
          <ButtonPrimary label="Apply" />
        </View>
      </View>
    </BottomModal>
  );
};

const styles = StyleSheet.create({
  filterHeader: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  filterHeading: {
    ...h3,
  },
  filterClear: {
    ...paragraph,
    position: "absolute",
    right: 30,
    top: 0,
  },
  sizeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: -10,
  },
  sizeItem: {
    marginLeft: 10,
    marginBottom: 10,
  },
  heading: {
    ...paragraph,
    fontWeight: "500",
    marginBottom: 10,
  },
  filterContent: {
    paddingHorizontal: PADDING_H,
    height: "100%",
    flex: 1,
  },
  buttonApply: {
    paddingHorizontal: 30,
    paddingVertical: 13,
  },
  option: {
    marginTop: 25,
  },
  color: {
    marginTop: 15,
  },
  priceHeading: {
    marginBottom: -12,
  },
  priceRange: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default FilterProductModal;
