import "./global.css";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import ConnexionScreen from "./src/screens/connexion/ConnexionScreen";
import RegisterScreen from "./src/screens/register/RegisterScreen";
import RegisterScreen2 from "./src/screens/register/RegisterScreen2";
import LoginScreen from "./src/screens/login/LoginScreen";
import HomeScreen from "./src/screens/home/HomeScreen";
import SearchScreen from "./src/screens/search/SearchScreen";
import DeparturePublishScreen from "./src/screens/publish/DeparturePublishScreen";
import ArrivalPublishScreen from "./src/screens/publish/ArrivalPublishScreen";
import DetailsPublishScreen from "./src/screens/publish/DetailsPublishScreen";
import StatusPublishScreen from "./src/screens/publish/StatusPublishScreen";
import { RootStackParamList } from "./src/types/type";
import ProfilScreen from "./src/screens/profil/ProfilScreen";
import UpdateProfilScreen from "./src/screens/profil/UpdateProfilScreen";
import { getLoginToken } from "./src/utils/authUtils";
import axios from "axios";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MenuApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "rgba(255,255,255,0.3)",
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "rgba(0,0,0,0.05)",
          shadowOpacity: 1,
          elevation: 0,
          paddingTop: 10,
          backgroundColor: "rgba(34,36,40,1)",
        },
      }}
    >
      <Tab.Screen
        name="Rechercher"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: "rgba(255,255,255,1)",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Publier"
        component={DeparturePublishScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-square-o" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Vos trajets"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-o" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginToken = async () => {
    try {
      const loginToken = await getLoginToken();

      if (loginToken) {
        const endpoint =
        process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/auth/verify-token";

        const res = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });

        if (res.status === 200) {
          setIsLoggedIn(true);
        }
    }
    } catch (error: any) {
      console.debug(
        "Error checking login token:",
        error.response?.data?.error || error.message
      );
      
    } finally {
      setIsLoading(false);
    }
  };

  checkLoginToken();

  if (isLoading) {
    return <View className="flex-1 bg-zinc-800" />;
  }

  return (
    <NavigationContainer>
      <View className="flex-1 bg-zinc-800">
        <Stack.Navigator
          initialRouteName={isLoggedIn ? "Home" : "Connexion"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={MenuApp} />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="RegisterSecond" component={RegisterScreen2} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen
            name="DeparturePublish"
            component={DeparturePublishScreen}
          />
          <Stack.Screen
            name="ArrivalPublish"
            component={ArrivalPublishScreen}
          />
          <Stack.Screen
            name="DetailsPublish"
            component={DetailsPublishScreen}
          />
          <Stack.Screen name="StatusPublish" component={StatusPublishScreen} />
          <Stack.Screen name="Profil" component={ProfilScreen} />
          <Stack.Screen name="UpdateProfil" component={UpdateProfilScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
