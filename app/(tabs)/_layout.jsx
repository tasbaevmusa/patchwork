import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tabs.Screen name='home'
        options={{
          tabBarLabel: 'Главный',
          tabBarIcon: ({ color }) => <Ionicons name="home" 
          size={24} color={color} />
        }}
      />
      <Tabs.Screen name='explore'
        options={{
          tabBarLabel: 'Поиск',
          tabBarIcon: ({ color }) => <Ionicons name="search" 
          size={24} color={color} />
        }}
      />
       <Tabs.Screen name='messages'
        options={{
          tabBarLabel: 'Сообщения',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble" 
          size={24} color={color} />
        }}
      />
      <Tabs.Screen name='profile'
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({ color }) => <Ionicons name="people-circle" 
          size={24} color={color} />
        }}
      />
     
    </Tabs>
  )
}
