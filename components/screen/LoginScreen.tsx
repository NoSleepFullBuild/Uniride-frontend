import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // Remplacez par le chemin d'accès correct au fichier où votre RootStackParamList est défini

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const handleLogin = () => {
    navigation.replace("Home");
  };

  const phoneInputRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Me connecter</Text>

      <TextInput autoFocus style={styles.input} placeholder="Votre email" />

      <TextInput
        style={styles.input}
        placeholder="Votre mot de passe"
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.connectText}>Me connecter</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text>Pas encore de compte ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerLink}>M'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
    paddingLeft: "11%",
  },
  backButton: {
    marginRight: 10,
  },
  backArrow: {
    fontSize: 24,
    color: "#000",
  },
  phoneInput: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "10%",
    fontSize: 24,
    paddingBottom: 20,
    marginTop: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 10,
  },
  login: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    paddingHorizontal: "8%",
    borderRadius: 30,
    marginLeft: 10,
  },
  passwordContainer: {
    alignSelf: "stretch",
    alignItems: "flex-end",
    paddingRight: "10%",
    paddingBottom: 10,
  },
  passwordInput: {
    marginBottom: 0,
  },
  forgotPassword: {
    marginTop: 5,
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    paddingHorizontal: "8%",
    marginTop: 20,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
  },
  connectText: {
    fontSize: 15,
    color: "#fff",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  registerLink: {
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
