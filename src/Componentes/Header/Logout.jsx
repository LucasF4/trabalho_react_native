import React, { useContext } from "react";
import { Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Logout() {
  //   const { tokenSalvo, setTokenSalvo } = useContext(AuthContext);
  //   const [tokenStorage, setTokenStorage] = useState(null);
  const navigation = useNavigation();
  const Logout = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    try {
      await AsyncStorage.removeItem("token");
      navigation.replace("SignIn");
      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });
    } catch (e) {
      console.error("Erro ao fazer o logout", e);
    }
  };
  return (
    <TouchableHighlight
      underlayColor="#d4d4d4"
      onPress={Logout}
      style={{
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 10,
      }}
    >
      <>
        <Icon name="logout" size={30} color="#36B44C" />
        <Text
          style={{
            color: "#000",
            fontFamily: "Poppins_500Medium",
            fontSize: 16,
          }}
        >
          Logout
        </Text>
      </>
    </TouchableHighlight>
  );
}
