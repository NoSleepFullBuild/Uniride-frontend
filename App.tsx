import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import ConnexionScreen from "./screens/connexion/ConnexionScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import RegisterScreen2 from "./screens/register/RegisterScreen2";
import LoginScreen from "./screens/login/LoginScreen";
import HomeScreen from "./screens/home/HomeScreen";
import SearchScreen from "./screens/search/SearchScreen";

export type RootStackParamList = {
  Home: undefined;
  Connexion: undefined;
  Register: undefined;
  RegisterSecond: {
    lastName: string;
    firstName: string;
    phoneNumber: string;
  };
  Login: undefined;
  Search: {
    searchParams: {
      depart: string;
      destination: string;
      date: string;
    };
  };
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MenuApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'neutral-950',
          borderTopWidth: 0,
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "rgba(0,0,0,0.05)",
          shadowOpacity: 1,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Rechercher"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Publier"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-square-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Vos trajets"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 bg-zinc-800">
        <Stack.Navigator
          initialRouteName="Connexion"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={MenuApp} />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="RegisterSecond" component={RegisterScreen2} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
