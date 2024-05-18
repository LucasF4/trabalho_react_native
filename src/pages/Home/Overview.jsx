import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../../contexts/auth";
import { CardOverview } from "./cardOverview";

export default function Overview(props) {
  const [loading, setLoading] = useState(true);
  const { userInfo } = useContext(AuthContext);
  const [valorAt, setValorAt] = useState("0,00");
  const [gastoTotal, setGastoTotal] = useState("0,00");
  const [ganhoTotal, setGanhoTotal] = useState("0,00");
  const [valorInit, setValorInit] = useState("0,00");
  useEffect(() => {
    setValorInit(
      userInfo.usuario[0].valorInit === null ||
        userInfo.usuario[0].valorInit === undefined ||
        userInfo.usuario[0].valorInit === NaN ||
        userInfo.usuario[0].valorInit === 0
        ? "0,00"
        : (userInfo.usuario[0].valorInit / 100).toFixed(2).replace(".", ",")
    );
  }, [userInfo.usuario[0].valorInit]);

  useEffect(() => {
    setValorAt(
      userInfo.valorAt === null ||
        userInfo.valorAt === undefined ||
        userInfo.valorAt === NaN ||
        userInfo.valorAt === 0
        ? valorInit
        : (userInfo.valorAt / 100).toFixed(2).replace(".", ",")
    );
    setGastoTotal((userInfo.valorGasto / 100).toFixed(2).replace(".", ","));
    setGanhoTotal((userInfo.valorGanho / 100).toFixed(2).replace(".", ","));
  }, [
    userInfo,
    userInfo.valorAt,
    userInfo.valorGasto,
    userInfo.valorGanho,
    userInfo.usuario[0].valorInit,
  ]);

  useEffect(() => {
    console.log("valorAt: ", valorAt);
  }, [valorAt]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleOverview}>Visão Geral</Text>
      </View>
      <CardOverview
        valorAt={valorInit}
        nome="Valor inicial"
        background={`${"rgba(0, 0, 0, 0.5)"}`}
      />
      <CardOverview
        valorAt={valorAt}
        nome="Carteira"
        background={`${
          parseInt(valorAt.replace(",", ".")) >= 0 ? "#36B44C" : "#610808"
        }`}
      />
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
                  fontFamily: "Poppins_600SemiBold",
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
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                  color: "#3C5839",
                }}
              >
                R$ {ganhoTotal}
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
                fontFamily: "Poppins_400Regular",
                color: "#999999",
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
              R$ {gastoTotal}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    marginTop: 5,
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
