import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import DropDownPicker, {
  ItemType,
  RenderListItemPropsInterface,
} from "react-native-dropdown-picker";
import { colors, paragraph, radius } from "../../styles";

interface DropdownPickerProps {}

interface RenderListItemProps
  extends Omit<RenderListItemPropsInterface, "onPress"> {
  onPress: (item: ItemType) => void;
}

const DropdownPicker: React.FC<DropdownPickerProps> = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  function renderListItem({
    label,
    onPress,
    isSelected,
    item,
  }: RenderListItemProps) {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.item}>
          <Text style={styles.itemText} numberOfLines={1}>
            {label}
          </Text>
          {isSelected ? (
            <Image
              source={require("../../assets/images/icons/ic_checkbox_selected.png")}
            />
          ) : (
            <Image
              source={require("../../assets/images/icons/ic_checkbox.png")}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode="SCROLLVIEW"
      scrollViewProps={{ nestedScrollEnabled: true }}
      style={styles.picker}
      dropDownContainerStyle={styles.dropdownContainer}
      placeholderStyle={styles.itemText}
      renderListItem={renderListItem}
      placeholder="Select"
    />
  );
};

const styles = StyleSheet.create({
  picker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: radius.s,
    borderColor: colors.gray200,
    backgroundColor: colors.gray100,
  },
  dropdownContainer: {
    borderRadius: radius.s,
    borderWidth: 0,
    borderColor: colors.gray200,
    maxHeight: 280,
    elevation: 1,
    paddingHorizontal: 7,
    paddingTop: 23,
  },
  item: {
    flexDirection: "row",
    marginRight: 8,
    marginLeft: 13,
    paddingVertical: 15 / 2,
    alignContent: "center",
    justifyContent: "center",
  },
  itemText: {
    ...paragraph,
    fontWeight: "500",
    flex: 1,
  },
});
export default DropdownPicker;
