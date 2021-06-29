import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigator from "./BottomNavigator";
import LoginPage from "../pages/LoginPage";
import {
  LANDING,
  LOGIN,
  MAIN,
  PRODUCT_DETAIL,
} from "../constants/stackNavigatorName";
import LandingPage from "../pages/LandingPage";
import ProductDetail from "../pages/ProductDetail";
import HeaderRightProductDetail from "../components/HeaderRightProductDetail";

type MainStackNavigator = {
  [LANDING]: {};
  [LOGIN]: {};
  [MAIN]: {};
  [PRODUCT_DETAIL]: {};
};
const Stack = createStackNavigator<MainStackNavigator>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
      initialRouteName={LANDING}
    >
      <Stack.Screen name={LANDING} component={LandingPage} />
      <Stack.Screen name={MAIN} component={BottomNavigator} />
      <Stack.Screen name={LOGIN} component={LoginPage} />
      <Stack.Screen
        name={PRODUCT_DETAIL}
        component={ProductDetail}
        options={() => ({
          headerShown: true,
          headerRight: () => <HeaderRightProductDetail />,
          headerTitle: () => null,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
