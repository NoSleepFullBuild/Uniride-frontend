import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const handleLogin = () => {
    //navigation.replace("Home");
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

      <Text className="self-stretch items-center justify-start pl-10 text-2xl pb-5 mt-5">
        Me connecter
      </Text>

      <TextInput
        autoFocus
        className="w-4/5 p-2.5 border border-gray-400 rounded mb-2.5"
        placeholder="Votre email"
      />

      <TextInput
        className="w-4/5 p-2.5 border border-gray-400 rounded mb-2.5"
        placeholder="Votre mot de passe"
        secureTextEntry
      />

      <TouchableOpacity>
        <Text className="mt-1.5 mb-2.5 underline">Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-black py-3.5 px-8 mt-5 rounded-full w-4/5 items-center"
        onPress={handleLogin}
      >
        <Text className="text-base text-white">Me connecter</Text>
      </TouchableOpacity>

      <View className="flex-row items-center mt-2.5">
        <Text>Pas encore de compte ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="ml-1 underline">M'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
