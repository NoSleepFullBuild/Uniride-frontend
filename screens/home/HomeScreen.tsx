import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import SearchTraject from "../../components/search/SearchTraject";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require("../../assets/login/bg.jpg")}
      className="flex-1 bg-cover bg-center justify-center"
    >
      <View
        className="absolute inset-0 bg-black opacity-70 w-full
        h-full"
      />

      <View className="flex px-7 mt-[20%] mb-4">
        <Text className="text-3xl font-bold text-center text-white">
          Partenaires d'étude, Compagnons de route.
        </Text>
      </View>

      <View className="flex-1 mt-[35%]">
        <SearchTraject />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
