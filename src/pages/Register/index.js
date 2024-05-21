import React, { useEffect, useState } from "react";
import { styles } from "../SignIn/Style";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import getEnvVars from "../../../environment";

/**
 * Represents the Register page component.
 * @returns {JSX.Element} The JSX element representing the Register page.
 */
export default function Register() {
  //* Retrieve BASE_API from environment variables
  const { BASE_API } = getEnvVars();
  const baseApi = BASE_API;

  //* State variables
  const navigation = useNavigation();
  const [nameCadastro, setNameCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [passwordCadastro, setPasswordCadastro] = useState("");
  const [userCadastro, setUserCadastro] = useState(null);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [confirmPasswordCadastro, setConfirmPasswordCadastro] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [alertaDadosIncorrentos, setAlertaDadosIncorrentos] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  /**
   * Validates the name.
   * @param {string} name - The name to validate.
   * @returns {boolean} True if the name is valid, false otherwise.
   */
  const validateName = (name) => {
    return name.length >= 5;
  };

  /**
   * Validates the email.
   * @param {string} email - The email to validate.
   * @returns {boolean} True if the email is valid, false otherwise.
   */
  const validadeEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  /**
   * Validates the password.
   * @param {string} password - The password to validate.
   * @returns {boolean} True if the password is valid, false otherwise.
   */
  const validatePassword = (password) => {
    // Replace this with your own password validation logic
    return password.length > 5;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  //* useEffect hooks
  useEffect(() => {
    if (alertEmail !== false) {
      setAlertEmail(true);
    }
  }, [alertEmail]);
  useEffect(() => {
    if (alertaDadosIncorrentos !== false) {
      setAlertaDadosIncorrentos(true);
    }
  }, [alertaDadosIncorrentos]);

  useEffect(() => {
    setUserCadastro({
      name: nameCadastro,
      email: emailCadastro ? emailCadastro : null,
      password: passwordCadastro,
    });
  }, [nameCadastro, emailCadastro, passwordCadastro]);

  /**
   * Handles the registration process.
   * @returns {Promise<void>} A promise that resolves when the registration is complete.
   */
  const handleRegister = async () => {
    console.log("Meu user", userCadastro);
    console.log("entrei cadastro");
    try {
      if (
        isConfirmPasswordValid &&
        isEmailValid &&
        isNameValid &&
        isPasswordValid &&
        passwordCadastro === confirmPasswordCadastro
      ) {
        const response = await fetch(`${baseApi}/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCadastro),
        });

        if (response.ok) {
          // Handle successful responses
          const data = await response.json();
          console.log("Cadastro realizado com sucesso", data);
          navigation.navigate("SignIn");
        } else {
          // Handle unsuccessful responses
          const errorData = await response.json();

          if (errorData.msg === "Email já cadastrado") {
            console.error(
              `Erro ao realizar cadastro: Email existente ${errorData.msg}`
            );
            setAlertEmail(true);
          } else {
            setAlertaDadosIncorrentos(true);
          }
          console.error(`Erro ao realizar cadastro else: ${errorData.error}`);
        }
      } else {
        setAlertaDadosIncorrentos(true);
      }
    } catch (error) {
      setAlertaDadosIncorrentos(true);
      console.error("Erro ao realizar cadastro: fora else", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Animatable.View animation="fadeInLeft" style={styles.contentTitle}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subtitle}>
            Crie sua conta e em seguida faça login.
          </Text>
        </Animatable.View>
        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForms}
        >
          <Text style={styles.textInput}>Nome</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: `${
                isNameValid && alertaDadosIncorrentos === false
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
            placeholder="Digite seu nome..."
            onChangeText={(text) => {
              setNameCadastro(text);
              setIsNameValid(validateName(text));
              if (alertaDadosIncorrentos === true) {
                setAlertaDadosIncorrentos(false);
              }
            }}
          />
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: `${
                isEmailValid &&
                alertaDadosIncorrentos === false &&
                alertEmail === false
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
              setEmailCadastro(text);
              setIsEmailValid(validadeEmail(text));
              if (alertaDadosIncorrentos === true) {
                setAlertaDadosIncorrentos(false);
              }
              if (alertEmail === true) {
                setAlertEmail(false);
              }
            }}
            keyboardType="email-address"
          />
          {
            //* Alerta de dados incorretos
            alertEmail === true && (
              <Text
                style={{
                  color: "red",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  marginTop: -15,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Email já cadastrado!
              </Text>
            )
          }
          <Text style={styles.textInput}>Senha</Text>
          <TextInput
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
              setPasswordCadastro(text);
              setIsPasswordValid(validatePassword(text));
              if (alertaDadosIncorrentos === true) {
                setAlertaDadosIncorrentos(false);
              }
            }}
            secureTextEntry={true}
          />
          {
            //* Alerta de dados incorretos
            alertaDadosIncorrentos === true && (
              <Text
                style={{
                  color: "red",
                  opacity: alertaDadosIncorrentos ? 1 : 0,
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  marginTop: -15,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Senhas não correspondentes!
              </Text>
            )
          }
          <Text style={styles.textInput}>Confirme sua senha </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: `${
                confirmPasswordCadastro === passwordCadastro &&
                alertaDadosIncorrentos === false
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
            placeholder="Digite novamente sua senha..."
            onChangeText={(text) => {
              setConfirmPasswordCadastro(text);
              setIsConfirmPasswordValid(
                validateConfirmPassword(passwordCadastro, text)
              );
              if (alertaDadosIncorrentos === true) {
                setAlertaDadosIncorrentos(false);
              }
            }}
            secureTextEntry={true}
          />
          {
            //* Alerta de dados incorretos
            alertaDadosIncorrentos === true && (
              <Text
                style={{
                  color: "red",
                  opacity: alertaDadosIncorrentos ? 1 : 0,
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  marginTop: -15,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Senhas não correspondentes!
              </Text>
            )
          }
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
              <Text style={styles.buttonTextCadastro}>Faça o login</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}
