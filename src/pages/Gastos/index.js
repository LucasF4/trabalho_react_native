import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";
import { CardOverview } from "../Home/cardOverview";
import { AuthContext } from "../../contexts/auth";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from "../Home/styleReleases";
import { useNavigation } from "@react-navigation/native";
import { RealeasesGastos } from "./ReleasesGastos";
import { ProgressCircle } from "react-native-svg-charts";
import { Circle, G, Svg, Text as SvgText } from "react-native-svg";

/**
 * Renders a component for displaying and deleting expenses.
 *
 * @param {Object} gasto - The expense object.
 * @returns {JSX.Element} The rendered component.
 */

class ProgressCircleExample extends React.PureComponent {
  render() {
    const { progress } = this.props; // Recebe a propriedade progress
    const progressPercentage = `${Math.round(progress * 100)}%`;

    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Svg height="200" width="200" viewBox="0 0 100 100">
          <G y="50" x="50">
            <Circle r="45" stroke="grey" strokeWidth="2" fill="transparent" />
            <ProgressCircle
              style={{ height: 200, width: 200 }}
              progress={progress}
              progressColor={"#610808"}
              strokeWidth={2.5}
              cornerRadius={45}
              startAngle={-Math.PI * 0.8}
              endAngle={Math.PI * 0.8}
            />
            <SvgText
              textAnchor="middle"
              y="6"
              fontSize="18"
              fill="black"
              fontFamily="Poppins_600SemiBold"
            >
              {progressPercentage ? progressPercentage : "0%"}
            </SvgText>
          </G>
        </Svg>
      </View>
    );
  }
}

export default function Gastos() {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  const { userInfo, handleInfo, handleGetGastos } = useContext(AuthContext);
  // const [gastosUser, setGastosUser] = useState([]);
  const [gastoTotal, setGastoTotal] = useState("0,00");
  const [valorInit, setValorInit] = useState("0,00");
  const fetchGastoInfo = async () => {
    try {
      await handleInfo(navigation);
      await handleGetGastos(navigation);
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
      if (error.response.status === 401) {
        navigation.replace("SignIn");
      }
    }
  };
  const progress = gastoTotal.replace(",", ".") / valorInit.replace(",", ".");

  // useEffect(() => {
  //   setGastosUser(Object.values(gastos).flat());
  // }, [gastos]);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      fetchGastoInfo();
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
      fetchGastoInfo();
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
    setGastoTotal((userInfo.valorGasto / 100).toFixed(2).replace(".", ","));
  }, [userInfo.valorGasto, userInfo.usuario[0].valorInit]);
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
            color: "#610808",
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          Gastos
        </Text>
        <View>
          <ProgressCircleExample progress={progress} />
        </View>
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
        <RealeasesGastos />
      </View>
    </ScrollView>
  );
}
