import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialIcons";

export default function Ganhos() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyCofntent: "space-between",
          backgroundColor: "#36B44C",
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          marginVertical: 10,
        }}
      >
        <View>
          <Text style={styles.textWallet}>Carteira</Text>
          {/* {loading ? (
            <Animatable.Text
              style={{
                backgroundColor: "#7dff86",
                height: 25,
                width: 100,
                borderRadius: 2,
              }}
              animation="pulse"
              iterationCount="infinite"
            ></Animatable.Text>
          ) : ( */}
          <Text style={styles.textSaldo}>R$ 20,00</Text>
          {/* )} */}
        </View>
        <Icon name="account-balance-wallet" size={50} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textWallet: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    color: "#edebeb",
  },
  textSaldo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 25,
    color: "white",
  },
});
