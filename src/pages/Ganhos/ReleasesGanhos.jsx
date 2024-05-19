import React, { useContext, useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import Icon from "react-native-vector-icons/MaterialIcons";
import Swipeout from "react-native-swipeout";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "../Home/styleReleases";
import { useNavigation } from "@react-navigation/native";

export function RealeasesGanhos() {
  const { handleDeleteGanhos, handleGetGanhos, handleInfo } =
    useContext(AuthContext);
  const [releasesGanhos, setReleasesGanhos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [idGanho, setIdGanho] = useState();
  const [isSwipeoutOpen, setIsSwipeoutOpen] = useState(false);
  const navigation = useNavigation();
  const fetchGanhos = async () => {
    try {
      const ganhos = await handleGetGanhos(navigation);
      setReleasesGanhos(Object.values(ganhos).flat());
      await handleInfo(navigation);
    } catch (err) {
      console.log("Erro ao buscar ganhos");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchGanhos();
    }, [])
  );

  const swipeoutBtns = [
    {
      component: (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            borderRadius: 10,
          }}
        >
          <Icon name="delete" size={30} color="white" />
        </View>
      ),
      onPress: () => {
        console.log("idGanho", idGanho);
        setIsSwipeoutOpen(true);
        setModalVisible(true);
      },
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.textReleases}>Últimos lançamentos</Text>
      {releasesGanhos.map((ganho, index) => (
        <Swipeout
          style={{
            borderRadius: 10,
          }}
          key={index}
          right={swipeoutBtns}
          onOpen={() => {
            setIdGanho({
              idganho: ganho.idganho,
            });
          }}
          autoClose={!isSwipeoutOpen}
        >
          <View style={styles.release} key={index}>
            <View style={styles.containerTextRelease}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#C7FFC2",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Icon name="attach-money" size={20} color="#3C5839" />
              </View>
              <View>
                <Text style={styles.textNameRelease}>{ganho.nameProd}</Text>
                <Text style={styles.textTagRelease}>
                  {ganho.tipo === "ganho" ? "Ganho" : "Gasto"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#3C5839",
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 14,
                }}
              >
                R$ {(ganho.valorGanho / 100).toFixed(2).replace(".", ",")}
              </Text>
              <Text
                style={{
                  color: "#999999",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 10,
                }}
              >
                {new Date(ganho.createdAt).toLocaleDateString("pt-BR")}
              </Text>
            </View>
          </View>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
                setIsSwipeoutOpen(false);
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    gap: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      fontSize: 15,
                      width: 250,
                      textAlign: "center",
                      color: "#3C5839",
                      textTransform: "uppercase",
                    }}
                  >
                    Tem certeza que deseja excluir este ganho?
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontSize: 15,
                      color: "#3C5839",
                      textAlign: "center",
                    }}
                  >
                    Esta ação é irreversível!
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#C7FFC2",
                      padding: 10,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => {
                      async function fetchDeleteGanho() {
                        try {
                          console.log("idGanho", idGanho);
                          await handleDeleteGanhos(idGanho, navigation);
                          fetchGanhos();
                        } catch (err) {
                          console.log("Erro ao deletar ganho");
                        }
                      }
                      fetchDeleteGanho();
                      setModalVisible(false);
                      setIsSwipeoutOpen(false);
                    }}
                  >
                    <Text
                      style={{
                        color: "#3C5839",
                        fontFamily: "Poppins_600SemiBold",
                        fontSize: 15,
                      }}
                    >
                      Sim
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FFC7C7",
                      padding: 10,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => {
                      setModalVisible(false);
                      setIsSwipeoutOpen(false);
                    }}
                  >
                    <Text
                      style={{
                        color: "#610808",
                        fontFamily: "Poppins_600SemiBold",
                        fontSize: 15,
                      }}
                    >
                      Não
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </Swipeout>
      ))}
    </View>
  );
}
