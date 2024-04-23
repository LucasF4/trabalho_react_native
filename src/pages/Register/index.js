import React, { useState } from "react";
import { styles } from "../SignIn/Style";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Register() {
  const [nameCadastro, setNameCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [passwordCadastro, setPasswordCadastro] = useState("");

  const navigation = useNavigation();
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
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.buttonSignIn}>
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
