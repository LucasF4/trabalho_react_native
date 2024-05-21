import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import Username from "../../Componentes/Header/Username";
import { AuthContext } from "../../contexts/auth";
import { StyleSheet } from "react-native";
import Logout from "../../Componentes/Header/Logout";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableHighlight } from "react-native";

export default function Conta() {
  const { userInfo } = useContext(AuthContext);
  const [username, setUsername] = useState("Usuário");
  useEffect(() => {
    setUsername(userInfo.usuario[0].name);
  }, [userInfo]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conta</Text>

      <View>
        <Username username={username} />
        <View
          style={{
            marginTop: 20,
            width: "100%",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <TouchableHighlight
            underlayColor="#d4d4d4"
            onPress={Logout}
            style={{
              flexDirection: "row",
              gap: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: "100%",
              alignItems: "center",
              backgroundColor: "#FFF",
              borderRadius: 10,
            }}
          >
            <>
              <Icon name="edit" size={30} color="#36B44C" />
              <Text
                style={{
                  color: "#000",
                  fontFamily: "Poppins_500Medium",
                  fontSize: 16,
                }}
              >
                Editar saldo
              </Text>
            </>
          </TouchableHighlight>

          <View
            style={{
              height: 1,
              backgroundColor: "#d4d4d4",
              width: "100%",
            }}
          />

          <Logout />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,

    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: "#36B44C",
    marginBottom: 20,
  },
});
