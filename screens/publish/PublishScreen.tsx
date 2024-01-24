import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import InputBar from "../../components/inputBar/InputBar";
import { useAppContext } from "../../context/AppContext";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Publish"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const PublishScreen = ({ navigation }: Props) => {
  const { departure, setDeparture } = useAppContext();
  const handleContinue = () => {
    console.log(departure);
    navigation.navigate("Publish2");
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="flex mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">
          D'où partez-vous ?
        </Text>
      </View>
      <InputBar navigation={navigation} />

      <TouchableOpacity
        className="bg-cyan-600 py-4 mt-1 rounded-xl opacity-80 mx-5"
        onPress={handleContinue}
      >
        <Text className={"text-center font-bold text-base "}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PublishScreen;
