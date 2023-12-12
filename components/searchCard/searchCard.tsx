import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchCard = () => {
  return (
    <View className="bg-gray-800 rounded-lg p-4 mx-5">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-white text-lg">05:30</Text>
          <Text className="text-gray-400">5h30</Text>
          <Text className="text-white text-lg mt-2">11:00</Text>
        </View>
        <View className="flex-1 justify-center">
          <Text className="text-white text-lg">Versailles</Text>
          <View className="flex-row justify-start items-center my-1">
            <Icon name="user" size={14} color="#FFD700" />
            <Icon name="user" size={14} color="#FFD700" className="ml-1" />
          </View>
          <Text className="text-white text-lg">Lyon</Text>
          <View className="flex-row justify-start items-center my-1">
            <Icon name="user" size={14} color="#FFFFFF" />
            <Icon name="user" size={14} color="#FFFFFF" className="ml-1" />
          </View>
        </View>
        <View>
          <Text className="text-white text-lg">29.00 €</Text>
        </View>
      </View>
      <View className="flex-row items-center mt-4">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-12 h-12 rounded-full mr-2"
        />
        <View>
          <Text className="text-white text-lg">Amelia</Text>
          <View className="flex-row items-center">
            <Icon name="star" size={14} color="#FFD700" />
            <Text className="text-white">5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchCard;
