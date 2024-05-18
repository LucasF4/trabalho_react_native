import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/router";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/dev";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
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
