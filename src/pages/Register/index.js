import React, { useEffect, useState } from "react";
import { styles } from "../SignIn/Style";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import getEnvVars from "../../../environment";

export default function Register() {
  const { BASE_API } = getEnvVars();
  const baseApi = BASE_API;
  const [nameCadastro, setNameCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [passwordCadastro, setPasswordCadastro] = useState("");
  const [confirmPasswordCadastro, setConfirmPasswordCadastro] = useState("");
  const [userCadastro, setUserCadastro] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    setUserCadastro({
      name: nameCadastro,
      email: emailCadastro,
      password: passwordCadastro,
    });
  }, [nameCadastro, emailCadastro, passwordCadastro]);
  const handleRegister = async () => {
    console.log("Meu user", userCadastro);
    console.log("entrei cadastro");
    try {
      const response = await fetch(`${baseApi}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCadastro),
      });

      if (response.ok) {
        console.log("Cadastro realizado com sucesso!");
        const data = await response.json();
        console.log(data);
        navigation.navigate("SignIn");
      } else {
        // Trata respostas não bem-sucedidas
        const errorData = await response.json();
        console.error(`Erro ao realizar cadastro: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Erro ao realizar cadastro:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Animatable.View animation="fadeInLeft" style={styles.contentTitle}>
          <Text style={styles.title}>Cadastro</Text>
        </Animatable.View>
        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForms}
        >
          <Text style={styles.textInput}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            onChangeText={(text) => setNameCadastro(text)}
          />
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email..."
            onChangeText={(text) => setEmailCadastro(text)}
            keyboardType="email-address"
          />
          <Text style={styles.textInput}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha..."
            onChangeText={(text) => setPasswordCadastro(text)}
            secureTextEntry={true}
          />
          <Text style={styles.textInput}>Confirme sua senha </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite novamente sua senha..."
            onChange={(text) => setConfirmPasswordCadastro(text)}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <View style={styles.cntBtnCadastro}>
            <Text style={styles.textBtnCadastro}>Já possui uma conta?</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text style={styles.buttonText}>Faça o login</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}
