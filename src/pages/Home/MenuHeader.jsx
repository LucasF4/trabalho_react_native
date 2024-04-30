import React, { Component } from "react";
import { DrawerLayoutAndroid, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    const navigationView = (
      <View style={styles.drawerContainer}>
        <Text style={styles.drawerItem}>Item 1</Text>
        <Text style={styles.drawerItem}>Item 2</Text>
        <Text style={styles.drawerItem}>Item 3</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
        drawerPosition="left"
        renderNavigationView={() => navigationView}
      >
        <View style={styles.container}>
          <Text>Main Content</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  drawerItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});
