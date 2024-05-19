import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/auth";
import Icon from "react-native-vector-icons/MaterialIcons";
import Swipeout from "react-native-swipeout";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "../Home/styleReleases";
import { useNavigation } from "@react-navigation/native";
/**
 * Renders a component for displaying and deleting expenses.
 *
 * @param {Object} gasto - The expense object.
 * @returns {JSX.Element} The rendered component.
 */
/**
 * Renders a component for displaying and deleting expenses.
 *
 * @param {Object} gasto - The expense object.
 * @returns {JSX.Element} The rendered component.
 */
export function RealeasesGastos() {
  const { handleDeleteGasto, handleGetGastos, handleInfo } =
    useContext(AuthContext);
  const [releasesGastos, setReleasesGastos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [idGasto, setIdGasto] = useState();
  const [isSwipeoutOpen, setIsSwipeoutOpen] = useState(false);

  const navigation = useNavigation();
  const fetchGastos = async () => {
    try {
      const gastos = await handleGetGastos(navigation);
      setReleasesGastos(Object.values(gastos).flat());
      await handleInfo(navigation);
    } catch (err) {
      console.log("Erro ao buscar gastos");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchGastos();
    }, [])
  );

  useEffect(() => {
    if (releasesGastos.length > 0) {
      setIdGasto({
        idgasto: releasesGastos[0].idgasto,
      });
    }
  }, [releasesGastos]);

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
        setIsSwipeoutOpen(true);
        setModalVisible(true);
      },
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.textReleases}>Últimos lançamentos</Text>
      {releasesGastos.map((gasto, index) => (
        <Swipeout
          style={{
            borderRadius: 10,
          }}
          key={index}
          right={swipeoutBtns}
          autoClose={!isSwipeoutOpen}
        >
          <View style={styles.release} key={index}>
            <View style={styles.containerTextRelease}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FFC7C7",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Icon name="money-off" size={20} color="#610808" />
              </View>
              <View>
                <Text style={styles.textNameRelease}>{gasto.nameProd}</Text>
                <Text style={styles.textTagRelease}>
                  {gasto.tipo === "ganho" ? "Ganho" : "Gasto"}
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
                  color: "#610808",
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 14,
                }}
              >
                R$ {(gasto.valorGasto / 100).toFixed(2).replace(".", ",")}
              </Text>
              <Text
                style={{
                  color: "#999999",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 10,
                }}
              >
                {new Date(gasto.createdAt).toLocaleDateString("pt-BR")}
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
                      color: "#610808",
                      textTransform: "uppercase",
                    }}
                  >
                    Tem certeza que deseja excluir este gasto?
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontSize: 15,
                      color: "#610808",
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
                      // Coloque aqui a lógica para excluir o gasto
                      async function fetchDeleteGasto() {
                        try {
                          console.log("idGasto", idGasto);
                          await handleDeleteGasto(idGasto, navigation);
                          fetchGastos();
                        } catch (err) {
                          console.log("Erro ao deletar gasto");
                        }
                      }
                      fetchDeleteGasto();
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
