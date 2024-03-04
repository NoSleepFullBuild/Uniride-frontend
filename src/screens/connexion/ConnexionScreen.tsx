import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";

type ConnexionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Connexion"
>;

type Props = {
  navigation: ConnexionScreenNavigationProp;
};

const ConnexionScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require("../../../assets/login/bg.jpg")}
      className="flex-1 bg-cover bg-center justify-center"
    >
      <View
        className="absolute inset-0 bg-black opacity-70 w-full
      h-full"
      />

      <View className="flex-1 justify-center px-7 mt-[90%]">
        <Text className="text-6xl font-bold text-white mb-2.5">Uniride</Text>
        <Text className="mt-2.5 text-xl text-white">Partenaires d'étude,</Text>
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
            <Text className="text-base text-black text-center">Commencer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ConnexionScreen;
