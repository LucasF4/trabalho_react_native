import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { styles } from "./Style";

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import TextDadosIncorretos from "./TextDadosIncorretos";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(null);
  const { handleLogin } = useContext(AuthContext);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [alertaDadosIncorrentos, setAlertaDadosIncorrentos] = useState(false);
  const navigation = useNavigation();

  const validadeEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Substitua isso pela sua própria lógica de validação de senha
    return password.length >= 5;
  };

  useEffect(() => {
    if (alertaDadosIncorrentos !== false) {
      setAlertaDadosIncorrentos(true);
    }
  }, [alertaDadosIncorrentos]);

  useEffect(() => {
    setUserLogin({
      email: email,
      password: password,
    });
  }, [email, password]);

  const login = async () => {
    handleLogin(userLogin, navigation, setAlertaDadosIncorrentos);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ flexGrow: 1, width: "100%" }}
      >
        <Animatable.View animation="fadeInLeft" style={styles.contentTitle}>
          <Text style={styles.title}>Bem vindo(a)</Text>
        </Animatable.View>
        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForms}
        >
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            value={email}
            style={{
              borderWidth: 1,
              borderColor: `${
                isEmailValid && alertaDadosIncorrentos === false
                  ? "#36B44C"
                  : "red"
              }`,
              opacity: 0.8,
              width: "100%",
              borderRadius: 5,
              marginBottom: 15,
              padding: 12,
              color: "black",
              fontFamily: "Poppins_400Regular",
              fontSize: 16,
            }}
            placeholder="Digite seu email..."
            onChangeText={(text) => {
              setEmail(text);
              setIsEmailValid(validadeEmail(text));
              if (alertaDadosIncorrentos === true) {
                setAlertaDadosIncorrentos(false);
              }
            }}
            keyboardType="email-address"
          />
          <TextDadosIncorretos stateModal={alertaDadosIncorrentos} />
          <Text style={styles.textInput}>Senha</Text>
          <TextInput
            value={password}
            style={{
              borderWidth: 1,
              borderColor: `${
                isPasswordValid && alertaDadosIncorrentos === false
                  ? "#36B44C"
                  : "red"
              }`,
              opacity: 0.8,
              width: "100%",
              borderRadius: 5,
              marginBottom: 15,
              padding: 12,
              color: "black",
              fontFamily: "Poppins_400Regular",
              fontSize: 16,
            }}
            placeholder="Digite sua senha..."
            onChangeText={(text) => {
              setPassword(text);
              setIsPasswordValid(validatePassword(text));
              if (alertaDadosIncorrentos === true) {
                setAlertaDadosIncorrentos(false);
              }
            }}
            secureTextEntry={true}
          />
          <TextDadosIncorretos stateModal={alertaDadosIncorrentos} />
          <TouchableOpacity style={styles.buttonSignIn} onPress={login}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          <View style={styles.cntBtnCadastro}>
            <Text style={styles.textBtnCadastro}>Ou</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
