import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
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
      <View className="flex-row items-center bg-white rounded-full shadow pl-4 py-0.5 pr-1 m-3">
        <TextInput
          className="flex-1 py-2 text-base text-gray-800"
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity className="py-2 px-4 bg-blue-500 rounded-full" onPress={handleSearch}>
          <Icon name={"search"} size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    );
};

export default SearchBAr;
