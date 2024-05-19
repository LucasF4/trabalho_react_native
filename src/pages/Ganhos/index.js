import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";
import { CardOverview } from "../Home/cardOverview";
import { AuthContext } from "../../contexts/auth";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from "../Home/styleReleases";
import { useNavigation } from "@react-navigation/native";
import { RealeasesGanhos } from "./ReleasesGanhos";

export default function Ganhos() {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  const { userInfo, handleInfo, handleGetGanhos } = useContext(AuthContext); // Supondo que você tenha um método handleGetGanhos
  const [ganhoTotal, setGanhoTotal] = useState("0,00");
  const [valorInit, setValorInit] = useState("0,00");

  // Adicione aqui a lógica para buscar informações de ganhos
  const fetchGanhoInfo = async () => {
    try {
      await handleInfo(navigation);
      await handleGetGanhos(navigation);
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
      if (error.response.status === 401) {
        navigation.replace("SignIn");
      }
    }
  };
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      fetchGanhoInfo();
      // Adicione aqui a lógica para atualizar as informações de ganhos
      setRefreshing(false);
    } catch (error) {
      console.error("Erro ao atualizar a tela:", error);
      if (error.response.status === 401) {
        navigation.replace("SignIn");
      }
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Adicione aqui a lógica para buscar informações de ganhos quando o foco é recebido
    }, [refreshing])
  );

  useEffect(() => {
    setValorInit(
      userInfo.usuario[0].valorInit === null ||
        userInfo.usuario[0].valorInit === undefined ||
        userInfo.usuario[0].valorInit === isNaN ||
        userInfo.usuario[0].valorInit === NaN ||
        userInfo.usuario[0].valorInit === 0
        ? "0,00"
        : (userInfo.usuario[0].valorInit / 100).toFixed(2).replace(".", ",")
    );
    setGanhoTotal((userInfo.valorGanho / 100).toFixed(2).replace(".", ","));
    // Adicione aqui a lógica para atualizar o estado com as informações de ganhos
  }, [userInfo.valorGanho, userInfo.usuario[0].valorInit]); // Supondo que você tenha um valorGanho no userInfo

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 24,
            color: "#36B44C",
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          Visão Geral Ganhos
        </Text>
        <CardOverview
          nome="Valor inicial"
          valorAt={valorInit}
          background={`${"rgba(0, 0, 0, 0.5)"}`}
        />
        <CardOverview
          nome="Total de ganhos"
          valorAt={ganhoTotal}
          background={`${"#36B44C"}`}
        />

        <RealeasesGanhos />
      </View>
    </ScrollView>
  );
}
