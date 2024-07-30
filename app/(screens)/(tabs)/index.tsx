import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { TouchableOpacity } from "react-native-gesture-handler";

export enum TabName {
  Tab1,
  Tab2,
}
type TabButtonType = {
  title: string;
};

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const buttons: TabButtonType[] = [
    {
      title: "Truyện",
    },
    {
      title: "Audio Truyện",
    },
  ];
  return (
    <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: 40, paddingHorizontal:10, paddingVertical: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          alignItems: "center",
        }}
      >
        <View>
          <Entypo
            name="menu"
            size={24}
            color="#57ab91"
            style={{ fontSize: 35 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: 300, color: "#57ab91" }}>
            Tất cả
          </Text>
        </View>
        <View>
          <Fontisto name="search" size={24} color="#57ab91" />
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <View
          accessibilityRole="tabbar"
          style={{
            display: "flex",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            borderColor: "#bdbdbd",
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <View style={{ flexDirection: "row", width: "100%", padding: 2, gap: 5 }}>
            {buttons.map((button, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => setSelectedTab(index)}
                  style={{
                    flex: 1,
                    padding: 20,
                    borderRadius: 5,
                    borderColor: selectedTab === index ? "#57ab91" : "white",
                    borderWidth: selectedTab === index ? 0.5 : 0,
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      color: "#57ab91",
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: 15,

                    }}
                  >
                    {button.title}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
      <ScrollView horizontal={false} style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <View style={{borderWidth: 1, borderColor: "#57ab91", borderRadius:15}}>
              <Image
                source={require("../../../assets/images/post/1.jpg")}
                style={{ width: 190, height: 250, borderRadius: 15 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderWidth: 1, borderColor: "#57ab91", borderRadius:15}}>
              <Image
                source={require("../../../assets/images/post/2.jpg")}
                style={{ width: 190, height: 250, borderRadius: 15 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <View style={{borderWidth: 1, borderColor: "#57ab91", borderRadius:15}}>
              <Image
                source={require("../../../assets/images/post/3.jpg")}
                style={{ width: 190, height: 250, borderRadius: 15 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{borderWidth: 1, borderColor: "#57ab91", borderRadius:15}}>
              <Image
                source={require("../../../assets/images/post/4.jpg")}
                style={{ width: 190, height: 250, borderRadius: 15 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <View style={{borderWidth: 1, borderColor: "#57ab91", borderRadius:15}}>
              <Image
                source={require("../../../assets/images/post/5.jpg")}
                style={{ width: 190, height: 250, borderRadius: 15 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image
                source={require("../../../assets/images/post/6.jpg")}
                style={{ width: 190, height: 250, borderRadius: 15 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;