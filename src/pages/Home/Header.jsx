import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MenuHeader from "./MenuHeader";
import Username from "../../Componentes/Header/Username";
import { styles } from "./styleHeader";
export default function Header(props) {
  const { username } = props;
  return (
    <View style={styles.header}>
      <View style={styles.containerHeaderUser}>
        <Username username={username} />
      </View>
      <View>
        <Icon name="notifications-none" size={30} color="black" />
        <View style={styles.containerNumberNotification}>
          <Text style={styles.numberNotification}>3</Text>
        </View>
      </View>
    </View>
  );
}
