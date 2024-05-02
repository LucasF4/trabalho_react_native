import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const baseApi = "http://192.168.100.180:3000";
  const navigation = useNavigation();
  const handleLogin = async (userLogin) => {
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
        navigation.navigate("Home"); // Mova esta linha para aqui
        return data;
      }
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao realizar cadastro:", error);
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

  const handleInfo = async () => {
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
        return data;
        // Do something with the response data
      }
    } catch (error) {
      console.error("Erro ao consultar infos:", error);
    }
  };
  return (
    <AuthContext.Provider value={{ handleLogin, handleInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
