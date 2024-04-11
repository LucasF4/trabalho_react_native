import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function AppList() {
  return (
    <View style={styles.container}>
      <Text>Open up AppList.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
