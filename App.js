import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/router";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
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
