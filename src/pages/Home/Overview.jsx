import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

export default function Overview(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const { valorAt } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleOverview}>Visão Geral</Text>
      </View>
      <View style={styles.saldoInit}>
        <View>
          <Text style={styles.textWallet}>Carteira</Text>
          {loading ? (
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
          ) : (
            <Text style={styles.textSaldo}>R$ {valorAt}</Text>
          )}
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
                fontFamily: "Inter_400Regular",
                color: "#999999",

                fontSize: 12,
              }}
            >
              receitas
            </Text>
            {loading ? (
              <Animatable.Text
                style={{
                  backgroundColor: "#f0f0f0",
                  height: 20,
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 18,
                  width: 100,
                  borderRadius: 2,
                  color: "#3C5839",
                }}
                animation="pulse"
                iterationCount="infinite"
              ></Animatable.Text>
            ) : (
              <Text
                style={{
                  fontFamily: "Inter_600SemiBold",
                  fontSize: 18,
                  color: "#3C5839",
                }}
              >
                R$ {valorAt}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.containerAddGasto}>
          <View style={styles.containerIconGasto}>
            <Icon name="call-made" size={20} color="#610808" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                color: "#999999",
                marginBottom: -5,
                fontSize: 12,
              }}
            >
              gastos
            </Text>
            <Text
              style={{
                fontFamily: "Inter_600SemiBold",
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
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    color: "#edebeb",
  },
  textSaldo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 25,
    color: "white",
  },
  contentOverview: {
    flexDirection: "row",
    gap: 5,
  },
  titleOverview: {
    fontFamily: "Inter_600SemiBold",
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
