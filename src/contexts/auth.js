import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  function signIn() {
    if (email !== "" && password !== "") {
      setUser({
        name: "User",
        email: "",
      });
    }
  }
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
