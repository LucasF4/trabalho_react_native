import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    gap: 10,
    marginTop: 20,
  },
  release: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  containerTextRelease: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textReleases: {
    color: "black",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
  },
  textTagRelease: {
    color: "#999999",
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    marginBottom: -5,
  },
  textNameRelease: {
    color: "black",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
  },
});
