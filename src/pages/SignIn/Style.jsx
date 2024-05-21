import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",

    gap: 30,
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  containerForms: {
    flex: 1,
    width: "100%",

    alignItems: "center",

    gap: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  contentTitle: {
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    width: "100%",
    fontSize: 30,
    fontFamily: "Poppins_700Bold",
    color: "#36B44C",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  textInput: {
    color: "#000",
    alignSelf: "flex-start",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  input: {
    opacity: 0.8,
    width: "100%",
    borderRadius: 5,
    marginBottom: 15,
    padding: 12,
    color: "black",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },

  buttonSignIn: {
    width: "100%",

    backgroundColor: "#36B44C",

    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
  button: {
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,

    alignSelf: "center",
    borderRadius: 25,
  },
  buttonTextCadastro: {
    color: "red",
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },

  cntBtnCadastro: {
    width: "100%",
    marginTop: 10,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtnCadastro: {
    fontFamily: "Poppins_500Medium",
  },
});
