import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";

type DetailsPublishScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "DetailsPublish"
>;

type Props = {
  route: {
    params: {
      depart: string;
      arrival: string;
    };
  };
  navigation: DetailsPublishScreenNavigationProp;
};

const DetailsPublishScreen = ({ route, navigation }: Props) => {
  const { depart, arrival } = route.params;
  console.log(depart, arrival);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedNbPassengers, setSelectedNbPassengers] = useState("");
  const [date, setDate] = useState(new Date());
  
  const [inputIconsColor, setInputIconsColor] = useState("lightslategrey");

  const onChangeDate = (event: any, selectedDate: any) => {
    if (event.type !== "dismissed") {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
  };

  const handleContinue = () => {
    // TODO
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="flex mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">
          Les derniers détails...
        </Text>
      </View>

      <View className="flex-row mt-5 mx-5">
        {/* Date */}
        <View
          className="w-3/5 flex-row mr-1 justify-center shadow border-2 border-2 border-zinc-800 rounded-2xl h-16"
          style={{ backgroundColor: "#1c1c1c" }}
        >
          {/* Icon */}
          <View className="flex-row items-center pl-5 pr-2">
            <Icon name={"calendar"} size={20} color={inputIconsColor} />
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
              themeVariant="dark"
            />
          </View>

          {/* Input */}
          <View className="flex-none justify-center pl-5 pr-2"></View>
        </View>

        {/* Number of passengers */}
        <View
          className="w-2/5 flex-row ml-1 justify-center shadow border-2 border-2 border-zinc-800 rounded-2xl h-16"
          style={{ backgroundColor: "#1c1c1c" }}
        >
          <View className="flex-none justify-center pl-5 pr-2">
            <Text className="text-white text-xl font-bold">👥</Text>
          </View>
        </View>
      </View>

      {/* Input */}
      <View className="flex-none grow px-2">
        <View className="flex-1 justify-center gap-y-0.5 items-start">
          <TouchableOpacity
            className="bg-cyan-600 py-4 mt-1 rounded-xl opacity-80 mx-5"
            onPress={handleContinue}
          >
            <Text className={"text-center font-bold text-base "}>Suivant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailsPublishScreen;
