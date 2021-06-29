import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryPage from "../../pages/CategoryPage";
import HomePage from "../../pages/HomePage";
import {
  CATEGORY,
  HOME,
  PRODUCT_LIST,
} from "../../constants/stackNavigatorName";
import ProductListPage from "../../pages/ProductListPage";
import HeaderRightFilter from "../../components/HeaderRightFilter";

type HomeStackParams = {
  [HOME]: {};
  [CATEGORY]: { title: string };
  [PRODUCT_LIST]: { title: string };
};

const Stack = createStackNavigator<HomeStackParams>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name={HOME}
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={CATEGORY}
        component={CategoryPage}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name={PRODUCT_LIST}
        component={ProductListPage}
        options={({ route }) => ({
          title: route.params?.title,
          headerRight: () => <HeaderRightFilter />,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
