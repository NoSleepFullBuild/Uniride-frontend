import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";
import { getLoginToken, storeLoginToken } from "../../utils/authUtils";
import axios from "axios";

type ProfilScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profil"
>;

type Props = {
  navigation: ProfilScreenNavigationProp;
};

const ProfilScreen = ({ navigation }: Props) => {
  const [loginToken, setLoginToken] = useState("");
  const [userId, setUserId] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchLoginToken = async () => {
        const resLoginToken = (await getLoginToken()) ?? "";
        setLoginToken(resLoginToken);
    };

    const fetchProfileData = async () => {
      try {
        await fetchLoginToken();

        const endpointWhoAmI =
          process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/users/whoiam";
          console.log("fetchProfileData", loginToken);
          console.log("fetchProfileData", endpointWhoAmI);
        const resWhoAmI = await axios.get(endpointWhoAmI, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });


        if (resWhoAmI.status === 200) {
          setUserId(resWhoAmI.data.id);
          setUsername(resWhoAmI.data.username);
          setEmail(resWhoAmI.data.email);
          setFirstName(resWhoAmI.data.firstName);
          setLastName(resWhoAmI.data.lastName);
          setPhoneNumber(resWhoAmI.data.phoneNumber);
          setVehicle(resWhoAmI.data.vehicle);
        }
      } catch (error: any) {
        console.debug(
          "Failed to get profile data:",
          error.response?.data?.error || error.message
        );
      }
    };

    fetchProfileData();
  }, []);

  const updateProfileData = async () => {
    try {
      const endpointUpdateProfile =
        process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/users/" + userId;
      console.log("updateProfileData", endpointUpdateProfile);
      console.log("updateProfileData", loginToken);
      const resUpdateProfile = await axios.put(
        endpointUpdateProfile,
        {
          username: username,
          firstName: firstName,
          lastName: lastName,
          vehicle: vehicle,
        },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      );
      if (resUpdateProfile.status === 200) {
        console.debug("Profile updated successfully");
      }
    } catch (error: any) {
      console.debug(
        "Failed to update profile data:",
        error.response?.data?.error || error.message
      );
    }
  };

  const handleSignOut = async () => {
    try {
      if (loginToken) {
        const endpointDisconnect =
          process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/auth/logout";

        const res = await axios.post(endpointDisconnect, null, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });

        if (res.status !== 200) {
          console.debug("Failed to add token to blacklist");
        }
        await storeLoginToken("");
      }
    } catch (error: any) {
      console.error(
        "Failed to logout",
        error.response?.data?.error || error.message
      );
    } finally {
      navigation.reset({
        index: 0,
        routes: [{ name: "Connexion" }],
      });
    }
  };

  const handleDeleteAccount = async () => {
    try {
      if (loginToken) {
        const endpointDeleteAccount =
          process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/users/" + userId;

        const res = await axios.delete(endpointDeleteAccount, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });

        if (res.status === 200) {
          await storeLoginToken("");
          navigation.reset({
            index: 0,
            routes: [{ name: "Connexion" }],
          });
        } else {
          console.debug("Failed to delete account");
        }
      }
    } catch (error: any) {
      console.error(
        "Failed to delete account",
        error.response?.data?.error || error.message
      );
    }
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">Mon profil</Text>
        <Text className="text-white text-lg mt-3">{email}</Text>
        <Text className="text-white text-md mt-2">{phoneNumber}</Text>
      </View>
      <Text className="text-white text-xl font-bold mt-6 mx-5">
        Gérez vos informations personnelles
      </Text>
      <View className="mx-5 mt-3">
        {/* Username */}
        <View className="mb-3">
          <Text className="text-white text-md font-semibold mb-2">
            Pseudonyme
          </Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Entrez votre pseudonyme"
            className="text-white bg-zinc-900 py-2 px-4 rounded-lg"
          />
        </View>
        {/* First Name */}
        <View className="mb-3">
          <Text className="text-white text-md font-semibold mb-2">Prénom</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Entrez votre prénom"
            className="text-white bg-zinc-900 py-2 px-4 rounded-lg"
          />
        </View>
        {/* Last Name */}
        <View className="mb-3">
          <Text className="text-white text-md font-semibold mb-2">Nom</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            placeholder="Entrez votre nom"
            className="text-white bg-zinc-900 py-2 px-4 rounded-lg"
          />
        </View>
        {/* Vehicle */}
        <View className="mb-3">
          <Text className="text-white text-md font-semibold mb-2">
            Véhicule
          </Text>
          <TextInput
            value={vehicle}
            onChangeText={setVehicle}
            placeholder="Entrez votre véhicule"
            className="text-white bg-zinc-900 py-2 px-4 rounded-lg"
          />
        </View>
        {/* Save changes Button */}
        <TouchableOpacity
          onPress={updateProfileData}
          className="bg-blue-600 py-2 px-6 rounded-lg mt-1 mb-3"
        >
          <Text className="text-white font-bold text-lg">
            Enregistrer les modifications
          </Text>
        </TouchableOpacity>
        {/* add separator line */}
        <View className="border-b-2 border-gray-400 mb-2" />
        {/* Change Password Button */}
        <TouchableOpacity className="bg-blue-600 py-2 px-6 rounded-lg mt-1 mb-3">
          <Text className="text-white font-bold text-lg">
            Changer le mot de passe
          </Text>
        </TouchableOpacity>
        {/* Disconnect Button */}
        <TouchableOpacity
          onPress={handleSignOut}
          className="bg-red-600 py-2 px-6 rounded-lg mb-3"
        >
          <Text className="text-white font-bold text-lg">Déconnexion</Text>
        </TouchableOpacity>
        {/* Delete Account Button */}
        <TouchableOpacity
          onPress={handleDeleteAccount}
          className="bg-red-600 py-2 px-6 rounded-lg mb-4"
        >
          <Text className="text-white font-bold text-lg">
            Supprimer le compte
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilScreen;
