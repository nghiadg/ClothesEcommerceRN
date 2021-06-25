import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigator from "./BottomNavigator";

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
