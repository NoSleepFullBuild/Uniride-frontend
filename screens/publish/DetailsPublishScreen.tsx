import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedNbPassengers, setSelectedNbPassengers] = useState("1");
  console.log(selectedDate, selectedNbPassengers);

  const [inputIconsColor, setInputIconsColor] = useState("lightslategrey");

  const onChangeDate = (event: any, selectedDate: any) => {
    if (event.type !== "dismissed") {
      const currentDate = selectedDate || setSelectedDate;
      setSelectedDate(currentDate);
    }
  };

  const handleContinue = () => {
    // TODO
    // -> Send the data to the DB
    // -> Redirect to another page (confirmation page, home page, ... idk yet)
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="flex mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">
          Les derniers détails...
        </Text>
      </View>

      <View className="flex-1 mt-5 mx-5">
        {/* Date */}
        <View
          className="justify-center shadow border-2 border-2 border-zinc-800 rounded-2xl h-16 mb-14"
          style={{ backgroundColor: "#1c1c1c" }}
        >
          <View className="flex-row items-center pl-5 pr-2">
            <Icon name={"calendar"} size={20} color={inputIconsColor} />
            <DateTimePicker
              value={selectedDate}
              mode="datetime"
              display="default"
              onChange={onChangeDate}
              themeVariant="dark"
            />
          </View>
        </View>

        {/* Number of passengers */}
        <View
          className="justify-center shadow border-2 border-2 border-zinc-800 rounded-2xl h-16"
          style={{ backgroundColor: "#1c1c1c" }}
        >
          <View className="flex-row items-center px-5">
            <Icon name={"users"} size={20} color={inputIconsColor} />
            <Picker
              style={{ width: "100%", color: "lightslategrey" }}
              selectedValue={selectedNbPassengers}
              onValueChange={(itemValue) => setSelectedNbPassengers(itemValue)}
            >
              {[...Array(10).keys()].map((number) => (
                <Picker.Item
                  color="white"
                  key={number}
                  label={`${number + 1}`}
                  value={`${number + 1}`}
                />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      {/* Next page */}
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
