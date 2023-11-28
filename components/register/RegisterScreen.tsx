import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // Assurez-vous que le chemin d'importation est correct

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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Renseignez vos informations</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.input}
              placeholder="Votre nom"
              autoCorrect={false}
              autoFocus
          />
        </View>
      </View>
      

      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.input}
              placeholder="Votre prénom"
              autoCorrect={false}
              autoFocus
          />
        </View>
      </View>

      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
              style={styles.input}
              placeholder="Votre numéro de téléphone"
              autoCorrect={false}
              autoFocus
          />
        </View>
      </View>


      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.inscriptionText}> Poursuivre </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal:10,
    borderBottomWidth: 1,
    borderRadius: 10,

    width: "80%",
    marginBottom: 25, // Ajustez en fonction de votre design
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 10 // La valeur de borderRadius que vous voulez
    // Ajoutez des ombres si nécessaire
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
  title: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "10%",
    fontSize: 24,
    paddingBottom: 30,
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    paddingHorizontal: "8%",
    borderRadius: 30,
    marginLeft: 5,
    marginTop: 15,
    width: "80%",
  },
  inputTel: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 25,
  },
  input: {
    height: 40, // Définissez une hauteur pour les inputs
    borderRadius: 10, // Assurez-vous que cette valeur est la même que celle du inputWrapper pour que le border radius s'applique correctement
    fontSize: 15,
    color: '#333', 
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  inscriptionText: {
    fontSize: 15,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default RegisterScreen;
