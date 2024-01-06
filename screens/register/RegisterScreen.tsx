import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const lastNameRef = useRef<TextInput>(null);
  const firstNameRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  const validatePhoneNumber = (number: string) => {
    number = number.replace(/\s/g, "");
    setPhoneNumber(number);
  };

  const handleRegister = () => {
    console.log(lastName, firstName, phoneNumber);
    navigation.push("RegisterSecond", {
      lastName,
      firstName,
      phoneNumber,
    });
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
            onChangeText={setLastName}
            autoCorrect={false}
            autoFocus={true}
            textContentType="familyName"
            maxLength={20}
            returnKeyType="next"
            onSubmitEditing={() => firstNameRef.current?.focus()}
            ref={lastNameRef}
          />
        </View>
      </View>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-300 rounded w-4/5 mb-6">
        <View className="flex-1 rounded">
          <TextInput
            className="h-10 rounded text-base text-gray-800"
            placeholder="Votre prénom"
            onChangeText={setFirstName}
            autoCorrect={false}
            textContentType="givenName"
            maxLength={20}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current?.focus()}
            ref={firstNameRef}
          />
        </View>
      </View>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-300 rounded w-4/5 mb-6">
        <View className="flex-1 rounded">
          <TextInput
            className="h-10 rounded text-base text-gray-800"
            placeholder="Votre numéro de téléphone"
            onChangeText={validatePhoneNumber}
            autoCorrect={false}
            inputMode="tel"
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            maxLength={13}
            returnKeyType="next"
            onSubmitEditing={handleRegister}
            ref={phoneRef}
          />
        </View>
      </View>

      <TouchableOpacity
        className="bg-black py-3.5 px-8 rounded-full ml-1.25 mt-3 w-4/5"
        onPress={handleRegister}
      >
        <Text className="text-base text-white text-center">Poursuivre</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
