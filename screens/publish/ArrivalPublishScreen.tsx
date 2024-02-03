import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import InputBar from "../../components/inputBar/InputBar";

type ArrivalPublishScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ArrivalPublish"
>;

type Props = {
  route: {
    params: {
      depart: string;
    };
  };
  navigation: ArrivalPublishScreenNavigationProp;
};

const ArrivalPublishScreen = ({ route, navigation }: Props) => {
  console.log('route', route);
  const { depart } = route.params;
  console.log('depart', depart);
  const [selectedDestination, setSelectedDestination] = useState("");

  const handleContinue = () => {
    // navigation.navigate("PassengerPublish", {
    //   depart: depart,
    //   destination: selectedDestination,
    // });
  };

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
