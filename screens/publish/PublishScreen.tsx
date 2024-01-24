import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import InputBar from "../../components/inputBar/InputBar";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Publish"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const PublishScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-zinc-950">
      <View className="flex mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">
          D'où partez-vous ?
        </Text>
      </View>
      <InputBar
        navigation={navigation}
        inputParams={{
          placeholder: "Saisissez l'adresse précise",
          value: "",
          onChangeText: () => {},
        }}
      />
    </View>
  );
};

export default PublishScreen;
