import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";
import { getLoginToken } from "../../utils/authUtils";
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

  const navigateToUpdateProfil = () => {
    navigation.navigate("UpdateProfil");
  }

  const fetchLoginToken = async () => {
    const token = await getLoginToken();
    setLoginToken(token || "");
  }

  const fetchProfileData = async () => {
    try {
      const endpointWhoAmI =
        process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/users/whoiam";
      const resWhoAmI = await axios.get(endpointWhoAmI, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });

      if (resWhoAmI.status === 200) {
        setUserId(resWhoAmI.data.items[0].id);
        setFirstName(resWhoAmI.data.items[0].firstname);
        setLastName(resWhoAmI.data.items[0].lastname);
        setPhoneNumber(resWhoAmI.data.items[0].phoneNumber);
        setVehicle(resWhoAmI.data.items[0].vehicle);
        setUsername(resWhoAmI.data.items[0].username);
        setEmail(resWhoAmI.data.items[0].email);
      }
    } catch (error: any) {
      console.debug(
        "Failed to get profile data:",
        error.response?.data?.error || error.message
      );
    }
  };

  useEffect(() => {
    fetchLoginToken();
  }, []);

  useEffect(() => {
    if (loginToken) {
      fetchProfileData();
    }
  }, [loginToken]);

  if (!email || !phoneNumber || !username || !firstName || !lastName) {
    return <Text>Chargement...</Text>;
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">Mon profil</Text>
        <Text className="text-white text-lg mt-3">{email}</Text>
        <Text className="text-white text-md mt-2">{phoneNumber}</Text>
      </View>
      <Text className="text-white text-xl font-bold mt-6 mx-5">
        Mes informations personnelles
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
            editable={false}
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
            editable={false}
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
            editable={false}
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
            editable={false}
            className="text-white bg-zinc-900 py-2 px-4 rounded-lg"
          />
        </View>
        {/* Delete Account Button */}
        <TouchableOpacity
          onPress={navigateToUpdateProfil}
          className="py-2 mb-4 mt-4 items-end"
        >
          <Text className="text-white font-semibold underline text-md">
            Gérer mon compte -&gt;
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilScreen;
