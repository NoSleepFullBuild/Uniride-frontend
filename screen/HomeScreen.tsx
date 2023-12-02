import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

// Définissez les props en fonction du type de navigation de votre pile
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

// Types pour les props du composant
type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require("../assets/login/bg.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.div}>
          <Text style={styles.title}>Uniride</Text>
          <Text style={styles.slogan}>Partenaires d'étude,</Text>
          <Text style={styles.slogan2}>Compagnons de route.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginButtonText}>Me connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.registerButtonText}>Commencer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  div: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 30,
    marginTop: "90%",
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  slogan: {
    marginTop: 10,
    fontSize: 20,
    color: "white",
  },
  slogan2: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    spaceBetween: "space-between",
    marginTop: 40,
  },
  registerButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: "8%",
    borderRadius: 30,
    marginLeft: 10,
  },
  registerButtonText: {
    fontSize: 15,
    color: "#000",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "transparent",
    paddingVertical: 15,
    paddingHorizontal: "7%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ffffff",
    marginRight: 20,
  },
  loginButtonText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});

export default HomeScreen;
