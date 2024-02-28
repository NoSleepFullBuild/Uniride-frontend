import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";
import { namePattern, phonePattern } from "../../utils/regexUtils";

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

  const validatePhoneNumber = (phone: string) => {
    const phoneNumber = phone.replace(/\s/g, "");
    setPhoneNumber(phoneNumber);
  };

  const trimFirstName = (firstName: string) => {
    return setFirstName(firstName.trim());
  }

  const trimLastName = (lastName: string) => {
    return setLastName(lastName.trim());
  }

  const handleRegister = () => {
    const errors = [];

    if (!lastName || !firstName || !phoneNumber) {
      console.error("All fields are required");
      Keyboard.dismiss();
      return;
    }

    if (!namePattern.test(lastName) || !namePattern.test(firstName)) {
      errors.push(
        "First name and last name must be between 2 and 50 characters"
      );
      Keyboard.dismiss();
    }

    if (!phonePattern.test(phoneNumber)) {
      errors.push("Invalid phone number");
      Keyboard.dismiss();
    }

    if (errors.length > 0) {
      errors.forEach((error) => console.error(error));
      Keyboard.dismiss();
      return;
    }

    navigation.navigate("RegisterSecond", {
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
            onChangeText={trimLastName}
            autoCorrect={false}
            autoFocus={true}
            textContentType="familyName"
            maxLength={20}
            returnKeyType="default"
            onSubmitEditing={Keyboard.dismiss}
            // onSubmitEditing={() => firstNameRef.current?.focus()}
            ref={lastNameRef}
          />
        </View>
      </View>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-300 rounded w-4/5 mb-6">
        <View className="flex-1 rounded">
          <TextInput
            className="h-10 rounded text-base text-gray-800"
            placeholder="Votre prénom"
            onChangeText={trimFirstName}
            autoCorrect={false}
            textContentType="givenName"
            maxLength={20}
            returnKeyType="default"
            onSubmitEditing={Keyboard.dismiss}
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
            returnKeyType="default"
            onSubmitEditing={Keyboard.dismiss}
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
