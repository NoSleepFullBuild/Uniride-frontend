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
type ConnexionScreenNavigationProp = StackNavigationProp<RootStackParamList, "Connexion">;

// Types pour les props du composant
type Props = {
  navigation: ConnexionScreenNavigationProp;
};

const ConnexionScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require("../../assets/login/bg.jpg")}
      className="flex-1 bg-cover bg-center justify-center"
    >
      <View className="flex-1 bg-black opacity-70">
        <View className="flex-1 justify-center pl-7 mt-[90%]">
          <Text className="text-6xl font-bold text-white mb-2.5">
            Uniride
          </Text>
          <Text className="mt-2.5 text-xl text-white">
            Partenaires d'étude,
          </Text>
          <Text className="text-3xl font-bold text-white">
            Compagnons de route.
          </Text>
          <View className="flex-row justify-between mt-10">
            <TouchableOpacity
              className="bg-transparent py-3.5 px-7 border border-white rounded-full mr-5"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-base text-white text-center">
                Me connecter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white py-3.5 px-7 border border-white rounded-full mr-5"
              onPress={() => navigation.navigate("Register")}
            >
              <Text className="text-base text-black text-center">
                Commencer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ConnexionScreen;
