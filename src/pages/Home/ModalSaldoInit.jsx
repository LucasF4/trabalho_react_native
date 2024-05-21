import React, { useContext, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
export default function ModalSaldoInit() {
  const navigation = useNavigation();
  const {
    modalSaldoInit,
    setModalSaldoInit,
    userInfo,
    handleSaldo,
    handleInfo,
  } = useContext(AuthContext);
  const [saldo, setSaldo] = useState("");
  const [sendSaldo, setSendSaldo] = useState("");

  useEffect(() => {
    setSendSaldo({
      valorInit: parseInt(saldo.replace(",", ".") * 100),
    });
  }, [saldo]);

  useEffect(() => {
    const fecthSaldo = async () => {
      const saldo = userInfo.usuario[0].valorInit;
      if (!saldo) {
        console.log("Saldo não encontrado");
        setModalSaldoInit(true);
      } else {
        console.log("Saldo encontrado");
        setModalSaldoInit(false);
      }
    };
    fecthSaldo();
  }, [userInfo]);

  const handleSaldoInit = async () => {
    console.log("entrei saldo");
    if (sendSaldo) {
      try {
        await handleSaldo(sendSaldo, navigation);
        await handleInfo(navigation);
      } catch (error) {
        console.error("Erro ao lidar com o saldo: ", error);
      }
    }
  };

  if (!modalSaldoInit) {
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
          onPress={() => setModalSaldoInit(false)}
        />
        <Text
          style={{
            fontSize: 30,
            color: "#fff",
            fontFamily: "Poppins_700Bold",
          }}
        >
          Seja bem vindo!
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#fff",
            fontFamily: "Poppins_500Medium",
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
            onChangeText={(text) => setSaldo(text)}
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
          onPress={handleSaldoInit}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#36B44C",
              fontFamily: "Poppins_600SemiBold",
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

    backgroundColor: "#36B44C",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
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
  },
  textSaldo: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#000",
  },
});
