import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationSwitch from "./src/navigation/AuthenticationSwitch";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthenticationSwitch />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
