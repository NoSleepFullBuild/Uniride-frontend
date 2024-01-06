import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import Icon from "react-native-vector-icons/FontAwesome";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [rightIconColor, setRightIconColor] = useState("#000000");

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
    setRightIcon(rightIcon === "eye" ? "eye-slash" : "eye");
  };

  const handleLogin = () => {
    console.log({ email, password });
    navigation.replace("Home");
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
        onChangeText={setEmail}
        autoCorrect={false}
        textContentType="emailAddress"
        maxLength={100}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        ref={emailRef}
      />

      <View className="w-4/5 flex-row border border-gray-400 rounded mb-2.5">
        <TextInput
          className="flex-1 p-2.5"
          placeholder="Votre mot de passe"
          onChangeText={setPassword}
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType="password"
          maxLength={100}
          returnKeyType="send"
          onSubmitEditing={handleLogin}
          ref={passwordRef}
        />
        <TouchableOpacity
          className="p-2.5 mr-2"
          onPress={handlePasswordVisibility}
        >
          <Icon name={rightIcon} size={20} color={rightIconColor} />
        </TouchableOpacity>
      </View>

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
        <TouchableOpacity onPress={() => navigation.replace("Register")}>
          <Text className="ml-1 underline">M'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
