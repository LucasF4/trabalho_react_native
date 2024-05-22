import React, { useEffect } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export function ModalUserCadastrado(props) {
  const { modalUserCadastro, setModalUserCadastro } = props;

  useEffect(() => {
    if (modalUserCadastro) {
      const timer = setTimeout(() => {
        setModalUserCadastro(false);
      }, 1000);

      // Limpa o timer se o componente for desmontado
      return () => clearTimeout(timer);
    }
  }, [modalUserCadastro]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalUserCadastro}
        onRequestClose={() => {
          setModalVisible(!modalUserCadastro);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Conta criada com sucesso!</Text>
            <Icon name="check" size={30} color="#fff" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: 30,
  },
  modalView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#36B44C",
    padding: 20,

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  modalText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
  },
});
