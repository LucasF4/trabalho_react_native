import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Releases() {
  return (
    <View style={styles.container}>
      <Text style={styles.textReleases}>Últimos lançamentos</Text>
      <View style={styles.release}>
        <View style={styles.containerTextRelease}>
          <View style={styles.containerIconGasto}>
            <Icon name="call-made" size={20} color="#610808" />
          </View>
          <View>
            <Text style={styles.textTagRelease}>Alimentação</Text>
            <Text style={styles.textNameRelease}>Pagamento de conta</Text>
          </View>
        </View>
        <Text style={styles.textValueRelease}>R$ 20,00</Text>
      </View>
      <View style={styles.release}>
        <View style={styles.containerTextRelease}>
          <View style={styles.containerIconGasto}>
            <Icon name="call-made" size={20} color="#610808" />
          </View>
          <View>
            <Text style={styles.textTagRelease}>Alimentação</Text>
            <Text style={styles.textNameRelease}>Pagamento de conta</Text>
          </View>
        </View>
        <Text style={styles.textValueRelease}>R$ 20,00</Text>
      </View>
      <View style={styles.release}>
        <View style={styles.containerTextRelease}>
          <View style={styles.containerIconGasto}>
            <Icon name="call-made" size={20} color="#610808" />
          </View>
          <View>
            <Text style={styles.textTagRelease}>Alimentação</Text>
            <Text style={styles.textNameRelease}>Pagamento de conta</Text>
          </View>
        </View>
        <Text style={styles.textValueRelease}>R$ 20,00</Text>
      </View>
      <View style={styles.release}>
        <View style={styles.containerTextRelease}>
          <View style={styles.containerIconGasto}>
            <Icon name="call-made" size={20} color="#610808" />
          </View>
          <View>
            <Text style={styles.textTagRelease}>Alimentação</Text>
            <Text style={styles.textNameRelease}>Pagamento de conta</Text>
          </View>
        </View>
        <Text style={styles.textValueRelease}>R$ 20,00</Text>
      </View>
      <View style={styles.release}>
        <View style={styles.containerTextRelease}>
          <View style={styles.containerIconGasto}>
            <Icon name="call-made" size={20} color="#610808" />
          </View>
          <View>
            <Text style={styles.textTagRelease}>Alimentação</Text>
            <Text style={styles.textNameRelease}>Pagamento de conta</Text>
          </View>
        </View>
        <Text style={styles.textValueRelease}>R$ 20,00</Text>
      </View>
      <View style={styles.release}>
        <View style={styles.containerTextRelease}>
          <View style={styles.containerIconAdd}>
            <Icon name="add-shopping-cart" size={20} color="#3C5839" />
          </View>
          <View>
            <Text style={styles.textTagRelease}>Trabalho</Text>
            <Text style={styles.textNameRelease}>Free Lancer</Text>
          </View>
        </View>
        <Text style={styles.textValueRelease}>R$ 20,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  textValueRelease: {
    color: "#610808",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },

  containerIconGasto: {
    width: 40,
    height: 40,
    backgroundColor: "#FFC7C7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  containerIconAdd: {
    width: 40,
    height: 40,
    backgroundColor: "#C7FFC2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
