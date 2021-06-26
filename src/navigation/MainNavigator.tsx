import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigator from "./BottomNavigator";
import LoginPage from "../pages/LoginPage";
import { LANDING, LOGIN, MAIN } from "../constants/stackNavigatorName";
import LandingPage from "../pages/LandingPage";

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={LANDING}
    >
      <Stack.Screen name={LANDING} component={LandingPage} />
      <Stack.Screen name={MAIN} component={BottomNavigator} />
      <Stack.Screen name={LOGIN} component={LoginPage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
