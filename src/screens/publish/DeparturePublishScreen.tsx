import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import InputBar from "../../components/inputBar/InputBar";
import { RootStackParamList } from "../../types/type";

type DeparturePublishScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "DeparturePublish"
>;

type Props = {
  navigation: DeparturePublishScreenNavigationProp;
};

const DeparturePublishScreen = ({ navigation }: Props) => {
  const [selectedDeparture, setSelectedDeparture] = useState("");

  const handleContinue = () => {
    navigation.navigate("ArrivalPublish", { depart: selectedDeparture });
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">
          D'où partez-vous ?
        </Text>
      </View>

      <InputBar
        onChangeText={(text) => setSelectedDeparture(text)}
        value={selectedDeparture}
        placeholder="Votre lieu de départ"
      />

      <TouchableOpacity
        className="bg-cyan-600 py-4 mt-3 rounded-xl opacity-80 mx-5"
        onPress={handleContinue}
      >
        <Text className={"text-center font-bold text-base text-white"}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeparturePublishScreen;
