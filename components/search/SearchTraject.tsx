import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";

const SearchTraject = () => {
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [inputIconsColor, setInputIconsColor] = useState("lightslategrey");
  const [iconsColor, setRightIconsColor] = useState("lightslategrey");

  const handleSearch = () => {
    console.log({ depart, destination, date });
  };

  const onChangeDate = (event: any, selectedDate: any) => {
    if (event.type !== 'dismissed') {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
    setShowDatePicker(false);
  };
  
  const formatDate = (date: any) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View className="mx-7 bg-zinc-800 rounded-xl">
      <View className="px-5 pt-4">
        {/* Departure Input */}
        <View className="px-1.5 pb-2 mb-2 flex flex-row items-center border-b border-slate-500 opacity-80 rounded">
          <Icon name={"circle-o"} size={18} color={inputIconsColor} />
          <TextInput
            className="px-2.5 pt-1 pb-2 text-white font-semibold text-base min-w-full"
            placeholder="Départ"
            placeholderTextColor={iconsColor}
            value={depart}
            onChangeText={setDepart}
          />
        </View>
        {/* Destination Input */}
        <View className="px-1.5 pb-2 mb-2 flex flex-row items-center border-b border-slate-500 opacity-80 rounded">
          <Icon name={"circle-o"} size={18} color={inputIconsColor} />
          <TextInput
            className="px-2.5 pt-1 pb-2 text-white font-semibold text-base min-w-full"
            placeholder="Destination"
            placeholderTextColor={iconsColor}
            value={destination}
            onChangeText={setDestination}
          />
        </View>
        {/* Date Input */}
        <View className="px-1.5 pb-2 flex flex-row items-center opacity-80">
          <Icon name={"calendar"} size={18} color={inputIconsColor} />
          <TouchableOpacity
            className="px-2.5 pt-1 pb-2 text-white font-semibold text-base"
            onPress={() => setShowDatePicker(true)}
          >
            <Text className="text-white font-semibold text-base">
              {formatDate(date)}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>
      </View>
      <TouchableOpacity
        className="bg-cyan-600 py-4 mt-1 rounded-b-xl opacity-80"
        onPress={handleSearch}
      >
        <Text className="text-center text-white font-bold text-base">
          Rechercher
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTraject;
