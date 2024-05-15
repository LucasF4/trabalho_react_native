import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
export default function Releases() {
  const navigation = useNavigation();
  const { userInfo } = useContext(AuthContext);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReleases(userInfo.ultimasTransicoes);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textReleases}>Últimos lançamentos</Text>
      {releases.map((gasto, index) => (
        <View key={index} style={styles.release}>
          <View style={styles.containerTextRelease}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: `${
                  gasto.tipo === "ganho" ? "#C7FFC2" : "#FFC7C7"
                }`,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Icon
                name={`${
                  gasto.tipo == "ganho" ? "add-shopping-cart" : "money-off"
                }`}
                size={20}
                color={`${gasto.tipo == "ganho" ? "#3C5839" : "#610808"}`}
              />
            </View>
            <View>
              <Text style={styles.textNameRelease}>
                {gasto.nameProd || "Nome do gasto"}
              </Text>
              <Text style={styles.textTagRelease}>{gasto.tipo}</Text>
            </View>
          </View>
          <Text
            style={{
              color: `${gasto.tipo == "ganho" ? "#3C5839" : "#610808"}`,
              fontFamily: "Inter_600SemiBold",
              fontSize: 14,
            }}
          >
            R$ {gasto.valor / 100 || "0,00"}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    gap: 10,
    marginTop: 20,
  },
  release: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  containerTextRelease: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textReleases: {
    color: "black",
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
  },
  textTagRelease: {
    color: "#999999",
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    marginBottom: -5,
  },
  textNameRelease: {
    color: "black",
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
});
