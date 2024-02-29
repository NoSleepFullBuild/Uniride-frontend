import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";
import SearchTraject from "../../components/searchTraject/SearchTraject";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require("../../assets/login/bg.jpg")}
      className="flex-1 bg-cover bg-center"
    >
      <View
        className="absolute inset-0 bg-black opacity-70 w-full
        h-full"
      />

      <View className="px-7 mt-[25%] mb-4">
        <Text className="text-3xl font-bold text-center text-white">
          Trouver une place
        </Text>
        <Text className="text-xl font-bold text-center text-white">
        pour des trajets partagés
        </Text>
      </View>

      <View className="mx-7 mt-[15%]">
        <SearchTraject navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
