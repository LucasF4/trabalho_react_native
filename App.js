import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/router";
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  const [fontLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="#36B44C" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
