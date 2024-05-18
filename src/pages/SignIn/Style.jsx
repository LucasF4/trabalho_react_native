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
    backgroundColor: "white",
  },
  containerForms: {
    flex: 1,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  contentTitle: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 30,
  },
  title: {
    width: "100%",
    fontSize: 25,
    fontFamily: "Poppins_600SemiBold",
    color: "white",
    marginBottom: 20,
    backgroundColor: "#36B44C",
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    textAlign: "center",
  },
  textInput: {
    color: "#000",
    alignSelf: "flex-start",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  input: {
    borderWidth: 1,
    borderColor: "#36B44C",
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
    backgroundColor: "#36B44C",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#344C",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    alignSelf: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
  cntBtnCadastro: {
    width: "100%",
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textBtnCadastro: {
    fontFamily: "Poppins_600SemiBold",
  },
});
