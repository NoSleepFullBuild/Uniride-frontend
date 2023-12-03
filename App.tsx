import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ConnexionScreen from "./screens/connexion/ConnexionScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import RegisterScreen2 from "./screens/register/RegisterScreen2";
import LoginScreen from "./screens/login/LoginScreen";

export type RootStackParamList = {
  Connexion: undefined;
  Register: undefined;
  RegisterSecond: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 bg-white">
        <Stack.Navigator
          initialRouteName="Connexion"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="RegisterSecond" component={RegisterScreen2} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};
