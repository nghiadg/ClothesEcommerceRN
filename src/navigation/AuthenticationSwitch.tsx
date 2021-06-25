import * as React from "react";
import { useState } from "react";
import MainNavigator from "./MainNavigator";
import LandingPage from "../pages/LandingPage";

const AuthenticationSwitch: React.FC = () => {
  const [isLogged] = useState(false);

  if (!isLogged) {
    return <LandingPage />;
  }

  return <MainNavigator />;
};

export default AuthenticationSwitch;
