import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
export const AuthContext = createContext({});
import AsyncStorage from "@react-native-async-storage/async-storage";
import getEnvVars from "../../environment";

function AuthProvider({ children }) {
  const { BASE_API } = getEnvVars();
  const [userInfo, setUserInfo] = useState({});
  const [gastos, setGastos] = useState({});
  const [ganhos, setGanhos] = useState([]);
  // Adiciona um estado para armazenar os gastos [1
  const [token, setToken] = useState(null);
  const baseApi = BASE_API;
  const navigation = useNavigation();
  const [alertVisible, setAlertVisible] = useState(false);

  //* Função para armazenar o token no AsyncStorage
  const storeToken = async (tokenSalvo) => {
    try {
      await AsyncStorage.setItem("token", tokenSalvo);
    } catch (error) {
      console.error("Erro ao armazenar token:", error);
    }
  };

  const checkToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value === null || value === "" || value === undefined) {
        console.log("Token não encontrado");
      } else {
        console.log("Token encontrado:", value);
        setToken(value);
      }
    } catch (e) {
      console.error("Erro ao verificar o token:", e);
    }
  };

  useEffect(() => {
    checkToken();
  }, [token]);

  //* Função para fazer login
  const handleLogin = async (userLogin, navigation) => {
    console.log("entrei login");
    try {
      const response = await fetch(`${baseApi}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });

      if (response.ok) {
        console.log("Login realizado com sucesso");
        const data = await response.json();
        console.log(data);
        setToken(data["access_token"]);
        await storeToken(data["access_token"]); // Armazena o token no AsyncStorage
        navigation.replace("Home"); // Navega para a tela "Home" apenas quando o login for bem-sucedido
        return data;
      } else {
        // Trata respostas não bem-sucedidas
        const errorData = await response.json();
        console.error(`Erro ao realizar login: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Erro ao realizar login==========:", error);
    }
  };

  useEffect(() => {
    console.log("Token", token);
  }, [token]);
  // const checkToken = () => {
  //   if (!token) {
  //     console.log("Token não encontrado");
  //     // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
  //   } else {
  //     console.log("Token encontrado:", token);
  //     // Aqui você pode fazer algo com o token, como verificar se ele ainda é válido
  //   }
  // };

  const handleInfo = async (navigation) => {
    try {
      const response = await fetch(`${baseApi}/info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("Consulta info realizada:");
        const data = await response.json();
        setUserInfo(data);
        return data;
        // Do something with the response data
      } else {
        console.log("Erro ao consultar infos: resposta não foi bem-sucedida");
        if (res.status === 401) {
          console.log("Token expirado, faça login novamente");
          // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
          navigation.replace("SignIn");
        }
      }
    } catch (error) {
      console.error("Erro ao consultar infos:", error);
      navigation.replace("SignIn");
    }
  };

  const handlePostGastos = async (gasto, navigation) => {
    try {
      const res = await fetch(`${baseApi}/gasto`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(gasto),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Gasto adicionado com sucesso!");
        setAlertVisible(true); // Atualize o estado para true quando um gasto for adicionado com sucesso
        return data;
      } else {
        if (res.status === 401) {
          console.log("Token expirado, faça login novamente");
          // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
          navigation.replace("SignIn");
        }

        return null;
      }
    } catch (err) {
      console.log("Erro ao adicionar gasto:", err);
      return null;
    }
  };
  const handleGetGastos = async (navigation) => {
    try {
      const res = await fetch(`${baseApi}/gasto`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Gastos encontrados com sucesso!");
        console.log(data);
        return data;
      } else {
        if (res.status === 401) {
          console.log("Token expirado, faça login novamente");
          // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
          navigation.replace("SignIn");
        }
        console.log("Erro ao encontrar gastos");
        return null;
      }
    } catch (err) {
      console.log("Erro ao adicionar gasto:", err);
      return null;
    }
  };

  const handlePostGanhos = async (ganhos, navigation) => {
    try {
      const res = await fetch(`${baseApi}/ganhos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(ganhos),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Ganho adicionado com sucesso!");
        setAlertVisible(true); // Atualize o estado para true quando um gasto for adicionado com sucesso

        return data;
      } else {
        if (res.status === 401) {
          console.log("Token expirado, faça login novamente");
          // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
          navigation.replace("SignIn");
        }
        console.log("Erro ao adicionar ganho");

        return null;
      }
    } catch (err) {
      console.log("Erro ao adicionar gasto:", err);
      return null;
    }
  };

  const handleGetGanhos = async (navigation) => {
    try {
      const res = await fetch(`${baseApi}/gasto`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Ganhos encontrados com sucesso!");

        return data;
      } else {
        if (res.status === 401) {
          console.log("Token expirado, faça login novamente");
          // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
          navigation.replace("SignIn");
        }
        console.log("Erro ao encontrar Ganhos");
        return null;
      }
    } catch (err) {
      if (err.response.status === 401) {
        console.log("Token expirado, faça login novamente");
        // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
        navigation.replace("SignIn");
      }
      console.log("Erro ao encontrar Ganhos:", err);
      return null;
    }
  };

  const handleSaldo = async (saldo) => {
    try {
      const res = await fetch(`${baseApi}/saldo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(saldo),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Saldo adicionado com sucesso!");
        setAlertVisible(false);
        return data;
      } else {
        if (res.status === 401) {
          console.log("Token expirado, faça login novamente");
          // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
          navigation.replace("SignIn");
        }
        console.log("Erro ao adicionar saldo else");
        return null;
      }
    } catch (err) {
      if (err.response.status === 401) {
        console.log("Token expirado, faça login novamente");
        // Aqui você pode redirecionar o usuário para a página de login ou fazer outra coisa
        navigation.replace("SignIn");
      }
      console.log("Erro ao adicionar saldo", err);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleInfo,
        handlePostGastos,
        alertVisible,
        setAlertVisible,
        handleGetGastos,
        userInfo,
        token,
        handlePostGanhos,
        handleGetGanhos,
        handleSaldo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
