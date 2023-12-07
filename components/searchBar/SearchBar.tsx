import React, { useRef, useState } from "react";
import { View, TextInput } from "react-native";

type SearchBarNavigationProp = {
  navigation: any;
};

const SearchBAr = ({ navigation }: SearchBarNavigationProp) => {

  const handleSearch = () => {
    navigation.push("Search");
  };

  return (
    <View className="mx-7 bg-zinc-800 rounded-xl">
        <TextInput className="text-white">dkqdkdk</TextInput>
    </View>
  );
};

export default SearchBAr;
