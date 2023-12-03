import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

// Définissez les props en fonction du type de navigation de votre pile
type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;

// Types pour les props du composant
type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const validatePhoneNumber = (number: any) => {
    setPhoneNumber(number);
  };

  const handleRegister = () => {
    navigation.replace("RegisterSecond");
  };

  return (
    <View className="flex-1 items-center pt-20">
      <View className="flex-row self-stretch items-center justify-start mb-5 pl-10">
        <TouchableOpacity
          className="mr-2.5"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-2xl text-black">←</Text>
        </TouchableOpacity>
      </View>

      <Text className="self-stretch flex-row items-center justify-start pl-10 text-2xl pb-5 mt-5">
        Renseignez vos informations
      </Text>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-300 rounded w-4/5 mb-6">
        <View className="flex-1 rounded">
          <TextInput
            className="h-10 rounded text-base text-gray-800"
            placeholder="Votre nom"
            autoCorrect={false}
            autoFocus
          />
        </View>
      </View>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-300 rounded w-4/5 mb-6">
        <View className="flex-1 rounded">
          <TextInput
            className="h-10 rounded text-base text-gray-800"
            placeholder="Votre prénom"
            autoCorrect={false}
            autoFocus
          />
        </View>
      </View>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-300 rounded w-4/5 mb-6">
        <View className="flex-1 rounded">
          <TextInput
            className="h-10 rounded text-base text-gray-800"
            placeholder="Votre numéro de téléphone"
            autoCorrect={false}
            autoFocus
          />
        </View>
      </View>

      <TouchableOpacity
        className="bg-black py-3.5 px-8 rounded-full ml-1.25 mt-3.75 w-4/5"
        onPress={handleRegister}
      >
        <Text className="text-base text-white text-center">Poursuivre</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
