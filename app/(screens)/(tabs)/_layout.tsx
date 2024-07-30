import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const TabRootLayout = () => {
    const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#57ab91',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
                <TabBarIcon name="home" color={color} size={24} />
              )
          },
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
                <Feather name="search" size={24} color={color} />
              )
          },
          tabBarLabel: '',
        }}
      />
       <Tabs.Screen
        name="comment"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
                <MaterialCommunityIcons name="comment" size={24} color={color} />
              )
          },
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
                <FontAwesome name="user" size={24} color={color} />
              )
          },
          tabBarLabel: '',
        }}
      />
    </Tabs>
  )
}

export default TabRootLayout