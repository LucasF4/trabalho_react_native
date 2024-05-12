import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../../contexts/auth";

export function AlertGastoAdd() {
  const { alertVisible, setAlertVisible } = useContext(AuthContext);
  const ref = useRef(null);
  useEffect(() => {
    if (alertVisible) {
      if (ref.current) {
        ref.current.fadeIn(1000);
      }
      const timer = setTimeout(() => {
        if (ref.current) {
          ref.current.fadeOut(1000);
          setAlertVisible(false);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alertVisible]);

  if (!alertVisible) {
    return null;
  }

  return (
    <Animatable.View
      ref={ref}
      animation="fadeInRight"
      duration={2000}
      style={styles.container}
    >
      <Text style={styles.text}>Gasto adicionado</Text>
      <Icon name="check" size={30} color="#fff" />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    padding: 20,
    width: 250,
    position: "absolute",
    right: 0,
    top: 30,
  },
  text: {
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
    color: "#fff",
  },
});
