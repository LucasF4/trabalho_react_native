import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";

export default function Releases() {
  const { handleGetGastos } = useContext(AuthContext);
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const fecthGastos = async () => {
      const gastoAt = await handleGetGastos();
      if (gastoAt && typeof gastoAt === "object") {
        setGastos(Object.values(gastoAt).flat());
        console.log("Meus gastos", Object.values(gastoAt));
      } else {
        console.error("handleGetGastos não retornou um objeto", gastoAt);
      }
    };
    fecthGastos();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textReleases}>Últimos lançamentos</Text>
      {gastos.map((gasto, index) => (
        <View key={index} style={styles.release}>
          <View style={styles.containerTextRelease}>
            <View style={styles.containerIconGasto}>
              <Icon name="money-off" size={20} color="#610808" />
            </View>
            <View>
              <Text style={styles.textNameRelease}>
                {gasto.nameProd || "Nome do gasto"}
              </Text>
              <Text style={styles.textTagRelease}>Gasto</Text>
            </View>
          </View>
          <Text style={styles.textValueRelease}>
            R$ {gasto.valorGasto / 100 || "0,00"}
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
  textValueRelease: {
    color: "#610808",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },

  containerIconGasto: {
    width: 40,
    height: 40,
    backgroundColor: "#FFC7C7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  containerIconAdd: {
    width: 40,
    height: 40,
    backgroundColor: "#C7FFC2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
