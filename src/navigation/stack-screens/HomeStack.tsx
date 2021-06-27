import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesPage from "../../pages/CategoriesPage";
import HomePage from "../../pages/HomePage";
import { CATEGORIES, HOME } from "../../constants/stackNavigatorName";

type HomeStackParams = {
  [HOME]: {};
  [CATEGORIES]: { title: string };
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
        name={CATEGORIES}
        component={CategoriesPage}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
