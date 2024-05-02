import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import Home from "../pages/Home";
import Gastos from "../pages/Gastos";
import Ganhos from "../pages/Ganhos";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => {
            return <Icon name="home" size={24} color="#36B44C" />;
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#999",
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            textAlign: "center",
            paddingBottom: 5,
            marginTop: -5,
            // Adicione esta linha
          },
          tabBarIconStyle: {
            justifyContent: "center",
          },
        }}
      />
      <Tab.Screen
        name="Gastos"
        component={Gastos}
        options={{
          headerShown: false,
          tabBarLabel: "Gastos",
          tabBarIcon: () => {
            return <Icon name="call-made" size={24} color="#36B44C" />;
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#999",
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            textAlign: "center",
            paddingBottom: 5,
            marginTop: -5,
            // Adicione esta linha
          },
          tabBarIconStyle: {
            justifyContent: "center",
          },
        }}
      />
      <Tab.Screen
        name="Ganhos"
        component={Ganhos}
        options={{
          headerShown: false,
          tabBarLabel: "Ganhos",
          tabBarIcon: () => {
            return <Icon name="add-shopping-cart" size={24} color="#36B44C" />;
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#999",
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            textAlign: "center",
            paddingBottom: 5,
            marginTop: -5,
            // Adicione esta linha
          },
          tabBarIconStyle: {
            justifyContent: "center",
          },
        }}
      />
      {/* Adicione outras telas aqui */}
    </Tab.Navigator>
  );
}
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
