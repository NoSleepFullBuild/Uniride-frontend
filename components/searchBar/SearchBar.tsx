import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type SearchBarNavigationProp = {
  navigation: any;
  onSearch: any;
};

const SearchBAr = ({ navigation, onSearch }: SearchBarNavigationProp) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = () => {
      if (onSearch) {
        onSearch(searchQuery);
      }
    };
  
    return (
      <View className="flex-row items-center border-2 border-zinc-400 rounded-xl shadow">
        {/* Go back button */}
        <TouchableOpacity onPress={() => navigation.goBack()} className="basis-2/10 p-3 rounded-l-lg bg-red-800">
          <Icon name={"angle-left"} size={26} color="#000000" />
        </TouchableOpacity>

        {/* Search input */}
        <TouchableOpacity className="basis-6/10 bg-blue-600">
          {/* Contain Text : Lyon -> Paris and Subtext : date */}
          <View className="flex-1 items-center">
            <Text className="text-black text-base font-semibold">
              Lyon - Paris
            </Text>
            <Text className="text-black text-sm font-normal ml-1">
              12/12/2021
            </Text>
          </View>
        </TouchableOpacity>

        {/* Filter button */}
        <TouchableOpacity className="basis-3/10 rounded-r-lg bg-green-800" onPress={handleSearch}>
          <Text className="text-white font-semibold">Filtrer</Text>
        </TouchableOpacity>
      </View>
    );
};

export default SearchBAr;
