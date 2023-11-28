import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/screen/HomeScreen";

import RegisterScreen from "./components/register/RegisterScreen";
import RegisterScreen2 from "./components/register/RegisterScreen2";

import LoginScreen from "./components/screen/LoginScreen";

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  RegisterSecond: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="RegisterSecond"  component={RegisterScreen2} />
          <Stack.Screen name="Login" component={LoginScreen} />
          
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
