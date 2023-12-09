import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type SearchBarNavigationProp = {
  navigation: any;
  onSearch: any;
};

const SearchBAr = ({ navigation, onSearch }: SearchBarNavigationProp) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [iconsColor, setRightIconsColor] = useState("lightslategrey");
  const [textColor, setRightTextColor] = useState("text-neutral-300");
  const [subTextColor, setRightSubTextColor] = useState("text-slate-500");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <View className="flex-row justify-center shadow border-2 border-2 border-zinc-800 rounded-2xl h-16">
      {/* Go back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-none justify-center px-5"
      >
        <Icon name={"angle-left"} size={26} color={iconsColor} />
      </TouchableOpacity>

      {/* Search input */}
      <TouchableOpacity className="flex-none grow px-2">
        <View className="flex-1 justify-center gap-y-0.5 items-start">
          <Text className={"text-sm font-semibold " + textColor}>
            Lyon - Paris
          </Text>
          <Text className={"text-sm font-normal font-semibold " + subTextColor}>
            12/12/2021
          </Text>
        </View>
      </TouchableOpacity>

      {/* Filter button */}
      <TouchableOpacity
        className="flex-none px-3 justify-center"
        onPress={handleSearch}
      >
        <Text className={"font-bold text-base pl-2 pr-3 " + textColor}>Filtrer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBAr;
