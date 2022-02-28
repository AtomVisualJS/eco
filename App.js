import React, { Component } from 'react'
import { View, Text } from 'react-native'

import HomeScreen from './Screens/Home';
import TransportScreen from './Screens/Transport';
import ProfileScreen from './Screens/Profile';
import SearchScreen from './Screens/Search';
import HebergementScreen from './Screens/Hebergement';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'white' }} activeColor="white" >
      <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={26} color="black" />
            
          
         
        ),
    }}/>
      <Tab.Screen name="Search" component={SearchScreen}        // Search Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map-marked-alt" size={22} color="black" />
        ),
    }}/>
      <Tab.Screen name="Notification" component={TransportScreen}      // Notification Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="directions-bike" size={24} color="black" />
        ),
    }}/>
    <Tab.Screen name="Hebergement" component={HebergementScreen}      // Notification Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bed-sharp" size={24} color="black" />
        ),
    }}/>
      <Tab.Screen name="Profile" component={ProfileScreen}            // Profile Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color="black" size={26}/>
        ),
    }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
