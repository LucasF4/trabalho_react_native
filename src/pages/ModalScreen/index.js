import React, { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ModalScreen() {
  const [selectedValue, setSelectedValue] = useState("gasto");
  const [nomeLancamento, setNomeLancamento] = useState("");
  const [valorLancamento, setValorLancamento] = useState("");
  const [valueDef, setValueDef] = useState("");
  useEffect(() => {
    setValueDef(valorLancamento * 100);
  }, [valorLancamento]);
  const handleAddLancamento = async () => {
    console.log("Adicionando lançamento...");
    console.log("Tipo de lançamento:", selectedValue);
    console.log("Nome do lançamento:", nomeLancamento);
    console.log("Valor do lançamento:", valueDef);
    if (selectedValue === "gasto") {
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Adicionar lançamento</Text>
        <View style={styles.containerPicker}>
          <Text style={{ fontFamily: "Inter_400Regular" }}>
            Selecione o tipo de lançamento
          </Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Gasto" value="gasto" />
            <Picker.Item label="Ganho" value="ganho" />
          </Picker>
        </View>
        <View>
          <Text style={{ fontFamily: "Inter_400Regular" }}>
            Nome do lançamento
          </Text>
          <TextInput
            onChangeText={(text) => {
              setNomeLancamento(text);
            }}
            style={styles.input}
            placeholder="Digite o nome..."
          />
        </View>
        <View>
          <Text style={{ fontFamily: "Inter_400Regular" }}>
            Valor do lançamento
          </Text>
          <TextInput
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
            onPress={() => handleAddLancamento()}
          >
            <Text style={styles.textButtonAdd}>Adicionar lançamento</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    fontFamily: "Inter_600SemiBold",
    color: "#36B44C",
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
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    color: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
  },
});
