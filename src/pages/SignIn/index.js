import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
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

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(null);
  const { handleLogin } = useContext(AuthContext);

  useEffect(() => {
    setUserLogin({
      email: email,
      password: password,
    });
  }, [email, password]);
  const navigation = useNavigation();
  const login = () => {
    handleLogin(userLogin);
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
            style={styles.input}
            placeholder="Digite seu email..."
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
          <Text style={styles.textInput}>Senha</Text>
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Digite sua senha..."
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />

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
