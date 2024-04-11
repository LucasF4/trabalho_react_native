import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppList from "./AppList";
import AppForm from "./AppForm";
import { StyleSheet } from "react-native";
export default function AppTab() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="List" component={AppList} />
        <Screen name="Form" component={AppForm} />
      </Navigator>
    </NavigationContainer>
  );
}
