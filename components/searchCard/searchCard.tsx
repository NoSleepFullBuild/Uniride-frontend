import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchCard = () => {
  const [bgColor, setBgColor] = useState("bg-zinc-800");
  const [iconsColor, setRightIconsColor] = useState("lightslategrey");
  const [subIconsColor, setRightSubIconsColor] = useState("white");
  const [textColor, setRightTextColor] = useState("text-white");
  const [subTextColor, setRightSubTextColor] = useState("text-slate-500");

  return (
    <View className={"rounded-2xl p-4 mx-5 mb-3 " + bgColor}>
      <View className="flex-row justify-between">
        <View className="w-16 max-w-xs">
          <Text className={"text-lg font-semibold " + textColor}>05:30</Text>
          <Text className="text-gray-400 font-semibold">6h30</Text>
          <Text className={"text-lg mt-2 font-semibold " + textColor}>12:00</Text>
        </View>
        <View className="flex-1 justify-center">
          <Text className={"text-lg font-semibold " + textColor}>Versailles</Text>
          <View className="my-1">
            <Icon name="arrow-down" size={16} color={subIconsColor} />
          </View>
          <Text className={"text-lg font-semibold " + textColor}>Lyon</Text>
        </View>
        <View className="flex-row items-start">
          <Text className={"text-lg font-semibold " + textColor}>29</Text>
          <Text className={"text-xs font-semibold items-center pt-2 " + textColor}>,00</Text>
          <Text className={"text-lg font-semibold " + textColor}> €</Text>
        </View>
      </View>
      <View className="flex-row items-center mt-4">
        <View className="w-16 max-w-xs">
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          className="w-12 h-12 rounded-full mr-2 border-2 border-slate-500"
        />
        </View>
        <View>
          <Text className="text-white text-lg">Amelia</Text>
          <View className="flex-row items-center">
            <Icon name="star" size={16} color={iconsColor} />
            <Text className={"mx-1 text-base font-bold " + subTextColor}>5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchCard;
