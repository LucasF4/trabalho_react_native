import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MenuHeader from "./MenuHeader";

export default function Header(props) {
  const { username } = props;
  return (
    <View style={styles.header}>
      <View style={styles.containerHeaderUser}>
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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  containerMenu: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  containerHeaderUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  containerTextUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  textUser: {
    fontFamily: "Inter_600SemiBold",
    color: "black",
    fontSize: 16,
  },
  subtitleUser: {
    fontFamily: "Inter_400Regular",
    color: "black",

    fontSize: 13,
  },

  containerImgUser: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
  imgUser: {
    width: 24,
    height: 24,
  },
  containerNumberNotification: {
    backgroundColor: "#36B44C",
    borderRadius: 50,
    width: 20,
    height: 20,
    position: "absolute",
    top: 0,
    right: 0,
  },
  numberNotification: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Inter_700Bold",
    color: "white",
  },
});