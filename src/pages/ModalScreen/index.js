import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AuthContext } from "../../contexts/auth";
import { AlertGastoAdd } from "./alertGastoAdd.jsx";
import { useNavigation } from "@react-navigation/native";
import { AlertGanhoAdd } from "./AlertGanhoAdd.jsx";
import { AlertErroAdd } from "./AlertErroAdd.jsx";

export default function ModalScreen() {
  //************************************** */
  const {
    handlePostGastos,
    handleGetGastos,
    handleInfo,
    handlePostGanhos,
    setAlertErroAdd,
  } = useContext(AuthContext);
  const [gastos, setGastos] = useState(null);
  const [ganhos, setGanhos] = useState(null);
  const [selectedValue, setSelectedValue] = useState("gasto");
  const [nomeLancamento, setNomeLancamento] = useState("");
  const [valorLancamento, setValorLancamento] = useState("");
  const [valueDef, setValueDef] = useState("");
  const [gastoAdicionado, setGastoAdicionado] = useState(false);
  const navigation = useNavigation();
  //************************************** */

  useEffect(() => {
    setValueDef(parseInt(valorLancamento.replace(",", ".") * 100));
  }, [valorLancamento]);

  useEffect(() => {
    setGastos({
      nameProd: nomeLancamento,
      valorGasto: valueDef,
    });

    setGanhos({
      nomeProd: nomeLancamento,
      valorGanho: valueDef,
    });
  }, [nomeLancamento, valueDef]);

  const handleAddLancamento = async () => {
    if (
      nomeLancamento === "" ||
      valorLancamento === "" ||
      valorLancamento === 0
    ) {
      console.log("Preencha os campos");
      setAlertErroAdd(true);
      return;
    } else {
      if (selectedValue == "gasto") {
        console.log("entrei gasto");
        await handlePostGastos(gastos, navigation);
        setNomeLancamento("");
        setValorLancamento("");
      }
      if (selectedValue == "ganho") {
        console.log("entrei ganho");
        await handlePostGanhos(ganhos, navigation);
        setNomeLancamento("");
        setValorLancamento("");
      }
      await handleGetGastos(navigation); // Atualiza os lançamentos após adicionar um novo
      await handleInfo(navigation);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Adicionar lançamento</Text>
        <View style={styles.containerPicker}>
          <Text style={styles.textModal}>Selecione o tipo de lançamento</Text>

          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Gasto" value="gasto" />
            <Picker.Item label="Ganho" value="ganho" />
          </Picker>
        </View>
        <View>
          <Text style={styles.textModal}>Nome do lançamento</Text>

          <TextInput
            value={nomeLancamento}
            onChangeText={(text) => {
              setNomeLancamento(text);
            }}
            style={styles.input}
            placeholder="Digite o nome..."
          />
        </View>
        <View>
          <Text style={styles.textModal}>Valor do lançamento</Text>
          <TextInput
            value={valorLancamento}
            onChangeText={(text) => {
              setValorLancamento(text);
            }}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Digite o valor..."
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.containerButtonAdd}
            onPress={handleAddLancamento}
          >
            <Text style={styles.textButtonAdd}>Adicionar lançamento</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AlertGastoAdd />
      <AlertGanhoAdd />
      <AlertErroAdd />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: "#f0f0f0",
    gap: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: "#36B44C",
  },

  textModal: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#000",
  },

  picker: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 5,
  },
  containerButtonAdd: {
    width: "100%",
    height: 50,
    backgroundColor: "#36B44C",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonAdd: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    color: "#fff",
  },
  input: {
    width: "100%",

    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 5,
    padding: 15,
    borderWidth: 1,
    fontFamily: "Poppins_400Regular",
    borderColor: "#36B44C",
    fontSize: 16,
  },
});
