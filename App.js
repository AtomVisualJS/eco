////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// By AtomVisualJS (Ecoliday Project - Réaco 2022 - React Native)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


/// Main Routes
import HomeScreen from "./Screens/Home";
import TransportScreen from "./Screens/Transport";
import ProfileScreen from "./Screens/Profile";
import SearchScreen from "./Screens/Search";
import HebergementScreen from "./Screens/Hebergement";


/// Details Routes
import CompoParcoursScreen from "./Details/CompoParcours";
import ParcoursEvenement from "./Details/ParcoursEvenement";


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const TransportStack = createNativeStackNavigator();


/// Home Router
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Composez votre Parcours" component={CompoParcoursScreen} />
      <HomeStack.Screen name="Parcours événementiel" component={ParcoursEvenement} />
    </HomeStack.Navigator>
  );
}

/// Transport Router
const TransportStackScreen = () => {
  return (
    <TransportStack.Navigator>
      <TransportStack.Screen name="Transport" component={TransportScreen} />
    </TransportStack.Navigator>
  );
}

const HebergementStackScreen = () => {
  return (
    <TransportStack.Navigator>
      <TransportStack.Screen name="Hebergement" component={HebergementScreen} />
    </TransportStack.Navigator>
  );
}

/// App Router
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={false}
        barStyle={{ backgroundColor: "white" }}
        activeColor="white"
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" size={26} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen} 
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="map-marked-alt" size={22} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={TransportStackScreen} 
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="directions-bike" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Hebergement"
          component={HebergementStackScreen} 
          options={{
            tabBarIcon: () => (
              <Ionicons name="bed-sharp" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen} 
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account-circle"
                color="black"
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
