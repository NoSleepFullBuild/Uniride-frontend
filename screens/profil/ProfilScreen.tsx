import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";
import InputBar from "../../components/inputBar/InputBar";
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
    const [selectedProfil, setSelectedProfil] = useState("");
    const [loginToken, setLoginToken] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoginToken(await getLoginToken() || "");
          console.log("Token: ", loginToken);

            const endpointWhoAmI = process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/whoiam";
            const endpointGetUser =
              process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/users";

            const resWhoAmI = await axios.get(endpointWhoAmI, {
              headers: {
                Authorization: `Bearer ${loginToken}`,
              },
            });
            console.log(resWhoAmI.data);

          const resGetUser = await axios.get(`${endpointGetUser}/${resWhoAmI.data.data.id}`, {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
          });
  
          console.log(resGetUser.data);
        } catch (error: any) {
          console.error(
            "Failed to get profil",
            error.response?.data?.error || error.message
          );
        }
      };
  
      fetchData();
    }, []);

  const handleDisconnect = async () => {
    try {
      if (loginToken) {
        const endpointDisconnect =
          process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/logout";

        const res = await axios.post(endpointDisconnect, null, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });

        if (res.status === 200) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Connexion" }],
          });
        }
      } else {
        console.error("No token found");
        navigation.reset({
          index: 0,
          routes: [{ name: "Connexion" }],
        });
      }
    } catch (error: any) {
      console.error(
        "Failed to logout",
        error.response?.data?.error || error.message
      );
    }
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">
          Où allez-vous ?
        </Text>
      </View>

      <InputBar
        onChangeText={(text) => setSelectedProfil(text)}
        value={selectedProfil}
        placeholder="Votre destination"
      />

      <TouchableOpacity
        className="bg-cyan-600 py-4 mt-3 rounded-xl opacity-80 mx-5"
        onPress={handleDisconnect}
      >
        <Text className={"text-center font-bold text-base "}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilScreen;
