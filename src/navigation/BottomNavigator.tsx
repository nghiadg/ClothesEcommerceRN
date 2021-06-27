import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import SearchPage from "../pages/SearchPage";
import ProfilePage from "../pages/ProfilePage";
import {
  HOME,
  CATEGORIES,
  SEARCH,
  PROFILE,
} from "../constants/bottomNavigatorName";
import { colors } from "../styles";

const Tab = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon = require("../assets/images/bottom-bar/ic_home.png");
          if (route.name === HOME) {
            icon = require("../assets/images/bottom-bar/ic_home.png");
          }
          if (route.name === CATEGORIES) {
            icon = require("../assets/images/bottom-bar/ic_categories.png");
          }
          if (route.name === SEARCH) {
            icon = require("../assets/images/bottom-bar/ic_search.png");
          }
          if (route.name === PROFILE) {
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
      <Tab.Screen name={HOME} component={HomePage} />
      <Tab.Screen name={CATEGORIES} component={CategoriesPage} />
      <Tab.Screen name={SEARCH} component={SearchPage} />
      <Tab.Screen name={PROFILE} component={ProfilePage} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    zIndex: 3,
    height: 60,
  },
});

export default BottomNavigator;
