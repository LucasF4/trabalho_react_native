import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function Overview() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleOverview}>Visão Geral</Text>
      </View>
      <View style={styles.saldoInit}>
        <View>
          <Text style={styles.textWallet}>Carteira</Text>
          <Text style={styles.textSaldo}>R$ 20,000</Text>
        </View>
        <Icon name="account-balance-wallet" size={50} color="white" />
      </View>
      <View style={styles.contentOverview}>
        <View style={styles.containerAddGanho}>
          <View style={styles.containerIconAdd}>
            <Icon name="add-shopping-cart" size={20} color="#3C5839" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                color: "#999999",
                marginBottom: -5,
                fontSize: 12,
              }}
            >
              receitas
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 18,
                color: "#3C5839",
              }}
            >
              R$ 20,000
            </Text>
          </View>
        </View>
        <View style={styles.containerAddGasto}>
          <View style={styles.containerIconGasto}>
            <Icon name="call-made" size={20} color="#610808" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                color: "#999999",
                marginBottom: -5,
                fontSize: 12,
              }}
            >
              gastos
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 18,
                color: "#610808",
              }}
            >
              R$ 20,000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  saldoInit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#36B44C",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  textWallet: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "#edebeb",
  },
  textSaldo: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
    color: "white",
  },
  contentOverview: {
    flexDirection: "row",
    gap: 5,
  },
  titleOverview: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "black",
    paddingHorizontal: 10,
  },
  containerAddGanho: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerIconAdd: {
    width: 40,
    height: 40,
    backgroundColor: "#C7FFC2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  containerAddGasto: {
    width: "50%",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  containerIconGasto: {
    width: 40,
    height: 40,
    backgroundColor: "#FFC7C7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
