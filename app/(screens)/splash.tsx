import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const SplashScreen = () => {
    const router  = useRouter();
    useEffect(()=>{
      setTimeout(()=>{
          router.push('/(tabs)')
      },2000)
    },[])
  return (
    <View style={{ flex: 1, backgroundColor: "#57ab91" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 50 }}>
          Audio Studio
        </Text>
        <Text style={{ color: "#fff", fontSize: 13 }}>
          Đọc truyện xuyên không!
        </Text>
        <Text style={{ color: "#fff", fontSize: 13, marginTop: 30 }}>
          LOADING...
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
