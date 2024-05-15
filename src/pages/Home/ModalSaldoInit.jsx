import React, { useContext, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";

export default function ModalSaldoInit() {
  const { alertVisible, setAlertVisible } = useContext(AuthContext);

  useEffect(() => {
    setAlertVisible(true);
  }, []);
  if (!alertVisible) {
    return null;
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.subContainer}>
        <Icon
          style={styles.close}
          name="close"
          size={30}
          color="white"
          onPress={() => setAlertVisible(false)}
        />
        <Text
          style={{
            fontSize: 30,
            color: "#fff",
            fontFamily: "Inter_700Bold",
          }}
        >
          Seja bem vindo!
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#fff",
            fontFamily: "Inter_600SemiBold",
            marginTop: 10,
          }}
        >
          Para começar, adicione um saldo inicial de acordo com seus ganhos
          mensais:
        </Text>
        <View style={styles.saldoInit}>
          <TextInput
            style={styles.textSaldo}
            placeholder="Digite seu saldo"
            keyboardType="number-pad"
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "100%",

            alignItems: "center",
            padding: 10,
            marginTop: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#36B44C",
              fontFamily: "Inter_600SemiBold",
            }}
          >
            Adicionar saldo
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  subContainer: {
    width: "90%",
    height: "70%",
    backgroundColor: "#36B44C",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  saldoInit: {
    width: "100%",

    backgroundColor: "#3C5839",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  textSaldo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    color: "white",
  },
});