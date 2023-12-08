import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type SearchBarNavigationProp = {
  navigation: any;
  onSearch: any;
};

const SearchBAr = ({ navigation, onSearch }: SearchBarNavigationProp) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <View className="flex-row items-center shadow">
      {/* Go back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-none p-3 border-y-2 border-l-2 border-zinc-400 rounded-l-xl h-14"
      >
        <Icon name={"angle-left"} size={26} color="#000000" />
      </TouchableOpacity>

      {/* Search input */}
      <TouchableOpacity className="grow border-y-2 border-zinc-400 rounded-y-xl h-14 py-1">
        {/* Contain Text : Lyon -> Paris and Subtext : date */}
        <View className="flex-1 items-center">
          <Text className="text-black text-base font-semibold">
            Lyon - Paris
          </Text>
          <Text className="text-black text-sm font-normal">
            12/12/2021
          </Text>
        </View>
      </TouchableOpacity>

      {/* Filter button */}
      <TouchableOpacity
        className="flex-none px-3 justify-center items-center border-y-2 border-r-2 border-zinc-400 rounded-r-xl h-14"
        onPress={handleSearch}
      >
        <Text className="font-bold text-base">Filtrer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBAr;
