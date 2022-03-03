////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// By AtomVisualJS (Ecoliday Project - Réaco 2022 - React Native)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { View, StyleSheet, ImageBackground } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/// Header Bar
import HeaderBar from "./Views/HeaderBar";

/// Main Routes
import HomeScreen from "./Screens/Home";
import TransportScreen from "./Screens/Transport";
import ProfileScreen from "./Screens/Profile";
import SearchScreen from "./Screens/Search";
import HebergementScreen from "./Screens/Hebergement";

/// Logs Router
import RegisterScreen from "./logs/Register";

/// Details Routes
import CompoParcoursScreen from "./Details/CompoParcours";
import ParcoursEvenement from "./Details/ParcoursEvenement";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


/// Home Router
const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />

      <Stack.Screen
        name="Composez votre Parcours"
        component={CompoParcoursScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />
      <Stack.Screen
        name="Parcours événementiel"
        component={ParcoursEvenement}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

/// Transport Router
const TransportStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transport"
        component={TransportScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HebergementStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hebergement"
        component={HebergementScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />
      <Stack.Screen
        name="Connexion"
        component={RegisterScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

/// App Router
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={false}
        barStyle={{ backgroundColor: "#fff" }}
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
          component={ProfileStackScreen}
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

const styles = StyleSheet.create({
  headerbox: {
    backgroundColor: "white",
    height: 80,
  },

  headercontent: {
    marginTop: 50,
    marginLeft: 30,
    flexDirection: "row",
  },
});
