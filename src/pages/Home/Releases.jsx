import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styleReleases";

export default function Releases() {
  const navigation = useNavigation();
  const { userInfo } = useContext(AuthContext);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    setReleases(userInfo.ultimasTransicoes);
  }, [userInfo.ultimasTransicoes]);
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
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: `${gasto.tipo == "ganho" ? "#3C5839" : "#610808"}`,
                fontFamily: "Poppins_600SemiBold",
                fontSize: 14,
              }}
            >
              R$ {(gasto.valor / 100).toFixed(2).replace(".", ",")}
            </Text>
            <Text
              style={{
                color: "#999999",
                fontFamily: "Poppins_400Regular",
                fontSize: 10,
              }}
            >
              {new Date(gasto.createdAt).toLocaleDateString("pt-BR")}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
