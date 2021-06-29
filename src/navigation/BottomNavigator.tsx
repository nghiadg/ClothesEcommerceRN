import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import {
  CATEGORIES_TAB,
  SEARCH_TAB,
  PROFILE_TAB,
  HOME_TAB,
} from "../constants/bottomNavigatorName";
import { colors } from "../styles";
import HomeStack from "./stack-screens/HomeStack";

const Tab = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon = require("../assets/images/bottom-bar/ic_home.png");
          if (route.name === HOME_TAB) {
            icon = require("../assets/images/bottom-bar/ic_home.png");
          }
          if (route.name === CATEGORIES_TAB) {
            icon = require("../assets/images/bottom-bar/ic_categories.png");
          }
          if (route.name === SEARCH_TAB) {
            icon = require("../assets/images/bottom-bar/ic_search.png");
          }
          if (route.name === PROFILE_TAB) {
            icon = require("../assets/images/bottom-bar/ic_profile.png");
          }

          const tintColor = focused ? colors.primary : colors.secondary;

          return <Image source={icon} style={{ tintColor }} />;
        },
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        style: styles.tabBar,
      }}
    >
      <Tab.Screen name={HOME_TAB} component={HomeStack} />
      <Tab.Screen name={CATEGORIES_TAB} component={SearchPage} />
      <Tab.Screen name={SEARCH_TAB} component={SearchPage} />
      <Tab.Screen name={PROFILE_TAB} component={ProfilePage} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
  },
});

export default BottomNavigator;
