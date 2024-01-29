import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import InputBar from "../../components/inputBar/InputBar";

type ArrivalScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ArrivalPublish"
>;

type Props = {
  route: {
    publishParams: {
      depart: string;
    };
  };
  navigation: ArrivalScreenNavigationProp;
};

const ArrivalPublishScreen = ({ route, navigation }: Props) => {
  const { depart } = route.publishParams;
  const [selectedDestination, setSelectedDestination] = useState("");

  const handleContinue = () => {
    console.log(selectedDestination);
    navigation.navigate("PassengerPublish", {
      depart: depart,
      destination: selectedDestination,
    });
  };

  // const handleInputChange = (value: string) => {
  //   setSelectedDestination(value);
  // };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="flex mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">
          Où allez-vous ?
        </Text>
      </View>
      <InputBar
        onChangeText={(text) => setSelectedDestination(text)}
        value={selectedDestination}
        placeholder="Votre destination"
      />

      <TouchableOpacity
        className="bg-cyan-600 py-4 mt-1 rounded-xl opacity-80 mx-5"
        onPress={handleContinue}
      >
        <Text className={"text-center font-bold text-base "}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArrivalPublishScreen;
