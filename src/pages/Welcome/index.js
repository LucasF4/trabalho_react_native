import { HandCoins } from "lucide";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="flipInY" style={styles.containerLogo}>
        <Icon name="currency-exchange" size={200} color="white" />
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        delay={600}
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Organize seus ganhos e gastos de qualquer lugar!
        </Text>
        <Text style={styles.subtitle}>Faça o login para começar.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36B44C",
  },
  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    flex: 1,
    backgroundColor: "#277f36",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Lato_700Bold",
    fontSize: 24,
    textAlign: "left",
    color: "white",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontFamily: "Lato_400Regular",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#246b30",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
});
