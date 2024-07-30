import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/> // Thêm dòng này để xóa header
      <Stack.Screen name="splash" options={{headerShown: false}}/>
    </Stack>
  );
};

export default RootLayout;
