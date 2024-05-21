import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  containerMenu: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  containerHeaderUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  containerTextUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  textUser: {
    fontFamily: "Poppins_600SemiBold",
    color: "black",
    fontSize: 16,
  },
  subtitleUser: {
    fontFamily: "Poppins_400Regular",
    color: "black",

    fontSize: 13,
  },

  containerImgUser: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
  imgUser: {
    width: 24,
    height: 24,
  },
  containerNumberNotification: {
    backgroundColor: "#36B44C",
    borderRadius: 50,
    width: 20,
    height: 20,
    position: "absolute",
    top: 0,
    right: 0,
  },
  numberNotification: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
    color: "white",
  },
});
