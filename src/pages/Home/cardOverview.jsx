import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

export function CardOverview(props) {
  const { background, valorAt, nome } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: `${background}`,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5,
      }}
    >
      <View>
        <Text style={styles.textWallet}>{nome}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={styles.textCifrao}>R$</Text>
          {loading ? (
            <Animatable.Text
              style={styles.textSaldo}
              animation="fadeIn"
              iterationCount="infinite"
            >
              ...
            </Animatable.Text>
          ) : (
            <Text style={styles.textSaldo}>{valorAt}</Text>
          )}
        </View>
      </View>
      <Icon name="account-balance-wallet" size={50} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  textWallet: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#edebeb",
    textTransform: "uppercase",
  },
  textSaldo: {
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
    color: "white",
  },
  textCifrao: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "white",
  },
});
