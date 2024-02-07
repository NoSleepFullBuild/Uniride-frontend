import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";
import axios from "axios";

type RegisterSecondScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RegisterSecond"
>;

type Props = {
  route: {
    params: {
      lastName: string;
      firstName: string;
      phoneNumber: string;
    };
  }
  navigation: RegisterSecondScreenNavigationProp;
};

const RegisterScreen2 = ({ route, navigation }: Props) => {
  const { lastName, firstName, phoneNumber } = route.params;

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [rightIconColor, setRightIconColor] = useState("#000000");

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
    setRightIcon(rightIcon === "eye" ? "eye-slash" : "eye");
  };

  const handleRegister = async () => {
    console.log({ lastName, firstName, phoneNumber, email, password });
    try {
      const registerData = {
        firstname: firstName,
        lastname: lastName,
        username: firstName + "_" + lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      };

      const endpoint = process.env.EXPO_PUBLIC_GATEWAY_URL+"/api/gateway/register";
      const res = await axios.post(
        endpoint,
        registerData
      );

      if (res.status === 201) {
        navigation.replace("Login");
      } else {
        console.error("Erreur de connexion:", res);
      }
    } catch (error) {
      console.error("Erreur de requête:", error);
    }
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
          onChangeText={setEmail}
          autoCorrect={false}
          autoFocus={true}
          inputMode="email"
          textContentType="emailAddress"
          maxLength={50}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          ref={emailRef}
        />
      </View>

      <View className="flex-row items-center justify-center px-2.5 border-b border-gray-400 rounded w-4/5 mb-6">
        <TextInput
          className="flex-1 rounded text-base text-gray-800 h-10"
          placeholder="Votre mot de passe"
          onChangeText={setPassword}
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          maxLength={100}
          returnKeyType="send"
          onSubmitEditing={handleRegister}
          ref={passwordRef}
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