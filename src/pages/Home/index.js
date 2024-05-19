import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Overview from "./Overview";
import Releases from "./Releases";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import ModalSaldoInit from "./ModalSaldoInit";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({ route }) {
  const { handleInfo } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAddButton, setShowAddButton] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [valorAt, setValorAt] = useState("0,00");
  const [gastoTotal, setGastoTotal] = useState("0,00");
  const [username, setUsername] = useState("Usuário");

  const fetchHandleInfo = async () => {
    try {
      let newData;
      newData = await handleInfo(navigation);
      setUserInfo(newData);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.error("Erro ao buscar informações do usuário:", error);
      navigation.replace("SignIn");
    }
  };

  //* Função para atualizar a tela
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      fetchHandleInfo();
      setRefreshing(false);
    } catch (error) {
      console.error("Erro ao atualizar a tela:", error);
      if (error.response.status === 401) {
        navigation.replace("SignIn");
      }
    }
  }, []);

  const navigation = useNavigation();
  const [tokenStorage, setTokenStorage] = useState(null);
  const tokenSalvo = route.params?.token;

  useEffect(() => {
    setTokenStorage(tokenSalvo);
  }, [tokenSalvo]);

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    if (y > 0 && showAddButton) {
      setShowAddButton(false);
    } else if (y === 0 && !showAddButton) {
      setShowAddButton(true);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchHandleInfo();
    }, [tokenSalvo, refreshing])
  );
  // Adicione tokenSalvo como uma dependência do useEffect

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  useEffect(() => {
    if (userInfo && userInfo.usuario && userInfo.usuario.length > 0) {
      setUsername(userInfo.usuario[0].name);
    } else {
      console.log("Usuário não encontrado");
    }
  }, [userInfo]);

  useEffect(() => {
    console.log("Username", username);
  }, [username]);

  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.replace("SignIn");
      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });
      if (tokenStorage) {
        setTokenStorage(null);
      }
    } catch (e) {
      console.error("Erro ao fazer o logout", e);
    }
  };
  return loading ? (
    <Animatable.View
      animation="rotate"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      iterationCount="infinite"
    >
      <Icon name="refresh" size={70} color="#36B44C" />
    </Animatable.View>
  ) : (
    <>
      <ModalSaldoInit />
      <ScrollView
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header username={username} />
        <TouchableOpacity onPress={Logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <Overview />
        <Releases />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f0f0f0",
    position: "relative",
  },
  containerAdd: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#3C5839",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
