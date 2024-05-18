import React from "react";
import { Text } from "react-native";

export default function TextDadosIncorretos({ stateModal }) {
  return (
    <Text
      style={{
        color: "red",
        fontSize: 12,
        marginTop: -15,
        width: "100%",
        display: `${stateModal === true ? "flex" : "none"}`,
        textAlign: "left",
        marginBottom: 10,
      }}
    >
      Credenciais Incorretas!
    </Text>
  );
}
