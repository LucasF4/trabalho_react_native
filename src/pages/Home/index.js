import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { ScrollView, StyleSheet, View } from "react-native";
import Overview from "./Overview";
import Releases from "./Releases";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../contexts/auth";

export default function Home() {
  const [showAddButton, setShowAddButton] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const { handleInfo } = useContext(AuthContext);
  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    if (y > 0 && showAddButton) {
      setShowAddButton(false);
    } else if (y === 0 && !showAddButton) {
      setShowAddButton(true);
    }
  };

  const getUserInfo = async () => {
    const data = await handleInfo();
    setUserInfo(data);
  };
  getUserInfo();

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <>
      <ScrollView
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Header />
        <Overview />
        <Releases />
      </ScrollView>
      {showAddButton && (
        <View style={styles.containerAdd}>
          <Icon name="add" size={40} color="white" />
        </View>
      )}
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
