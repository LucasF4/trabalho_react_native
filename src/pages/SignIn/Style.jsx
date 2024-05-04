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
    fontFamily: "Inter_700Bold",
    color: "white",
    marginBottom: 20,
    backgroundColor: "#36B44C",
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    textAlign: "center",
  },
  textInput: {
    color: "black",
    alignSelf: "flex-start",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },
  input: {
    borderBottomWidth: 1,

    opacity: 0.8,
    width: "100%",
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "black",
    fontFamily: "Inter_400Regular",
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
    fontFamily: "Inter_700Bold",
  },
  cntBtnCadastro: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textBtnCadastro: {
    fontFamily: "Inter_700Bold",
  },
});
