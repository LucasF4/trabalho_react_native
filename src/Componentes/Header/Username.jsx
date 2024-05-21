import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../../pages/Home/styleHeader";
export default function Username(props) {
  const { username } = props;
  return (
    <View style={styles.containerUser}>
      <View style={styles.containerImgUser}>
        <Image
          style={styles.imgUser}
          source={require("../../assets/user.png")}
        />
      </View>
      <View style={styles.containerTextUser}>
        <Text style={styles.subtitleUser}>Olá,</Text>
        <Text style={styles.textUser}>{username}</Text>
      </View>
    </View>
  );
}
