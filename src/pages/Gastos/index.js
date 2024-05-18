import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CardOverview } from "../Home/cardOverview";
import { AuthContext } from "../../contexts/auth";

export default function Gastos() {
  const { userInfo, gastos } = useContext(AuthContext);
  const [gastoTotal, setGastoTotal] = useState("0,00");
  const [valorInit, setValorInit] = useState("0,00");
  useEffect(() => {
    console.log("Gastos: ", gastos);
  }, []);
  useEffect(() => {
    setValorInit(
      userInfo.usuario[0].valorInit === null ||
        userInfo.usuario[0].valorInit === undefined ||
        userInfo.usuario[0].valorInit === NaN ||
        userInfo.usuario[0].valorInit === 0
        ? "0,00"
        : (userInfo.usuario[0].valorInit / 100).toFixed(2).replace(".", ",")
    );
    setGastoTotal((userInfo.valorGasto / 100).toFixed(2).replace(".", ","));
  }, [userInfo.valorGasto, userInfo.usuario[0].valorInit]);
  return (
    <View>
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: 24,
          color: "#610808",
          marginTop: 20,
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        Visão Geral Gastos
      </Text>
      <CardOverview
        nome="Valor inicial"
        valorAt={valorInit}
        background={`${"rgba(0, 0, 0, 0.5)"}`}
      />
      <CardOverview
        nome="Total de gastos"
        valorAt={gastoTotal}
        background={`${"#610808"}`}
      />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "Poppins_600SemiBold",
            fontSize: 15,
            marginLeft: 10,
          }}
        >
          Últimos gastos
        </Text>
      </View>
    </View>
  );
}
