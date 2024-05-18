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
        {loading ? (
          <Animatable.Text
            style={{
              backgroundColor: "#f4f4f4",
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
  );
}

const styles = StyleSheet.create({
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
});
