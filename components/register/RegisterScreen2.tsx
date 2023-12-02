import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
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

  const validatePhoneNumber = (number: any) => {
    setPhoneNumber(number);
  };

  const handleRegister = () => {
    navigation.replace("Home");
  };

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [rightIconColor, setRightIconColor] = useState("#000000");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-slash");
      setRightIconColor("#000000");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-slash") {
      setRightIcon("eye");
      setRightIconColor("#000000");
      setPasswordVisibility(!passwordVisibility);
    }
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

      <Text style={styles.title}>Confirmer vos identifiants</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Votre email"
            autoCorrect={false}
            autoFocus={true}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Votre mot de passe"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            textContentType="password"
          />
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handlePasswordVisibility}
        >
          <Icon name={rightIcon} size={20} color={rightIconColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Votre mot de passe"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            textContentType="password"
          />
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handlePasswordVisibility}
        >
          <Icon name={rightIcon} size={20} color={rightIconColor} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.inscriptionText}> S'inscrire </Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderRadius: 10,

    width: "80%",
    marginBottom: 25,
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 10,
  },
  inputPassword: {
    flex: 1,
    color: "#333",
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
  },
  iconContainer: {
    padding: 10,
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
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    paddingHorizontal: "8%",
    borderRadius: 30,
    marginLeft: 5,
    marginTop: 20,
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
    color: "#333",
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

export default RegisterScreen2;
