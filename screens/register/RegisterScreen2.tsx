import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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

const RegisterScreen2 = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [rightIconColor, setRightIconColor] = useState("#000000");

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
    setRightIcon(rightIcon === "eye" ? "eye-slash" : "eye");
  };

  const handleRegister = () => {
    navigation.replace("Home");
  };

  return (
    <View className="flex-1 items-center pt-20">
      <View className="flex-row self-stretch items-center justify-start mb-5 pl-10">
        <TouchableOpacity className="mr-2.5" onPress={() => navigation.goBack()}>
          <Text className="text-2xl text-black">←</Text>
        </TouchableOpacity>
      </View>

      <Text className="self-stretch flex-row items-center justify-start pl-10 text-2xl pb-5 mt-2.5">Confirmer vos identifiants</Text>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-400 rounded w-4/5 mb-6">
        <TextInput
          className="flex-1 rounded text-base text-gray-800 h-10"
          placeholder="Votre email"
          autoCorrect={false}
          autoFocus={true}
        />
      </View>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-400 rounded w-4/5 mb-6">
        <TextInput
          className="flex-1 rounded text-base text-gray-800 h-10"
          placeholder="Votre mot de passe"
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
        />
        <TouchableOpacity className="p-2.5" onPress={handlePasswordVisibility}>
          <Icon name={rightIcon} size={20} color={rightIconColor} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-black py-3.5 px-8 rounded-full ml-1.25 mt-3 w-4/5" onPress={handleRegister}>
        <Text className="text-base text-white text-center">S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen2;