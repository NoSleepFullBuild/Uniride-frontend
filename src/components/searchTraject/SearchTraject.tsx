import React, { useRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/type";

type SearchTrajectProps = {
  navigation: NavigationProp<RootStackParamList>;
  onClose?: () => void;
};


const SearchTraject = ({ navigation, onClose }: SearchTrajectProps) => {
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());

  const departRef = useRef<TextInput>(null);
  const destinationRef = useRef<TextInput>(null);

  const [bgColor, setBgColor] = useState("bg-zinc-800");
  const [textColor, setRightTextColor] = useState("text-white");
  const [inputIconsColor, setInputIconsColor] = useState("lightslategrey");
  const [iconsColor, setRightIconsColor] = useState("lightslategrey");

  const handleSearch = () => {
    const searchParams = { depart, destination, date };
    navigation.navigate("Search", { searchParams })
    if (onClose) {
      onClose();
    }
  };

  {
    /*
     * On my test, the returned date is 1 hour and 10min less than the selected date
     * TODO: Verify the pertinence of the return between different localizations
     * https://github.com/react-native-datetimepicker/datetimepicker#localization-note
     */
  }
  const onChangeDate = (event: any, selectedDate: any) => {
    if (event.type !== "dismissed") {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
  };

  return (
    <View className={"rounded-xl " + bgColor}>
      <View className="px-5 pt-4">
        {/* Departure Input */}
        <View className="px-1.5 pb-2 mb-2 flex flex-row items-center border-b border-slate-500 opacity-80 rounded">
          <Icon name={"circle-o"} size={18} color={inputIconsColor} />
          <TextInput
            className={"px-2.5 pt-1 pb-2 font-semibold text-base min-w-full " + textColor}
            placeholder="Départ"
            placeholderTextColor={iconsColor}
            value={depart}
            onChangeText={setDepart}
            textContentType="none"
            maxLength={50}
            returnKeyType="default"
            onSubmitEditing={() => destinationRef.current?.focus()}
            ref={departRef}
          />
        </View>
        {/* Destination Input */}
        <View className="px-1.5 pb-2 mb-2 flex flex-row items-center border-b border-slate-500 opacity-80 rounded">
          <Icon name={"circle-o"} size={18} color={inputIconsColor} />
          <TextInput
            className={"px-2.5 pt-1 pb-2 font-semibold text-base min-w-full " + textColor}
            placeholder="Destination"
            placeholderTextColor={iconsColor}
            value={destination}
            onChangeText={setDestination}
            textContentType="none"
            maxLength={50}
            ref={destinationRef}
            returnKeyType="default"
          />
        </View>
        {/* Date Input */}
        <View className="px-1.5 pb-2 flex flex-row items-center opacity-80">
          <Icon name={"calendar"} size={18} color={inputIconsColor} />
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            themeVariant="dark"
          />
        </View>
      </View>
      <TouchableOpacity
        className="bg-cyan-600 py-4 mt-1 rounded-b-xl opacity-80"
        onPress={handleSearch}
      >
        <Text className={"text-center font-bold text-base " + textColor }>
          Rechercher
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTraject;
