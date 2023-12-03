import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

// Définissez les props en fonction du type de navigation de votre pile
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

// Types pour les props du composant
type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require("../../assets/login/bg.jpg")}
      className="flex-1 bg-cover bg-center justify-center"
    >
    </ImageBackground>
  );
};

export default HomeScreen;
