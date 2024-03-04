import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { RootStackParamList } from "../../types/type";
import { getLoginToken } from "../../utils/authUtils";
import axios from "axios";

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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedNbPassengers, setSelectedNbPassengers] = useState("1");
  const [loginToken, setLoginToken] = useState("");

  const [inputIconsColor, setInputIconsColor] = useState("lightslategrey");

  const onChangeDate = (event: any, selectedDate: any) => {
    if (event.type !== "dismissed") {
      const currentDate = selectedDate || setSelectedDate;
      setSelectedDate(currentDate);
    }
  };

  const fetchLoginToken = async () => {
    const token = await getLoginToken();
    setLoginToken(token || "");
  }

  const convertCityToCoordinates = async (city: string) => {
    try {
      const endpointGeocoding = `https://api-adresse.data.gouv.fr/search/?q=${city}&limit=1`;
      const resGeocoding = await axios.get(endpointGeocoding);

      if (resGeocoding.status === 200) {
        return {
          latitude: resGeocoding.data.features[0].geometry.coordinates[1],
          longitude: resGeocoding.data.features[0].geometry.coordinates[0],
        };
      }
    } catch (error: any) {
      console.debug(
        "Failed to convert city to coordinates:",
        error.response?.data?.error || error.message
      );
    }
  }

  const getTimeFromDate = (date: Date) => {
    return date.toISOString().split("T")[1].split(":").slice(0, 2).join(":");
  }

  const getDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  }

  const constructTrip = async () => {
    const startLocation = await convertCityToCoordinates(depart);
    const endLocation = await convertCityToCoordinates(arrival);
    const date = getDate(selectedDate);
    const startTime = getTimeFromDate(selectedDate);
    const endTime = getTimeFromDate(new Date(selectedDate.getTime() + 60 * 60 * 1000));
    const passengers = parseInt(selectedNbPassengers);

    return {
      latitudeStartLocation: startLocation?.latitude,
      longitudeStartLocation: startLocation?.longitude,
      latitudeEndLocation: endLocation?.latitude,
      longitudeEndLocation: endLocation?.longitude,
      startTime: startTime,
      endTime: endTime,
      date: date,
      seats: passengers,
    };
  }

  const handleContinue = async () => {
    try {
      await fetchLoginToken();
      const endpointCreateTrip = process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/trips";
      const body = await constructTrip();
      const resCreateTrip = await axios.post(endpointCreateTrip, body, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });
      if (resCreateTrip.status === 201) {
        console.debug("Trip created:", resCreateTrip.data);
        navigation.navigate("StatusPublish", { status: "Trajet créé" });
      }
    } catch (error: any) {
      navigation.navigate("StatusPublish", { status: "Erreur" });
      console.debug(
        "Failed to create trip:",
        error.response?.data?.error || error.message
      );
    }
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <View className="mt-[10%] mb-4 mx-5">
        <Text className="text-white text-3xl font-bold mt-6">
          Les derniers détails...
        </Text>
      </View>

      <View className="flex mt-5 mx-5">
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
      <TouchableOpacity
        className="bg-cyan-600 py-4 mt-[100%] rounded-xl opacity-80 mx-5"
        onPress={handleContinue}
      >
        <Text className={"text-center font-bold text-base text-white"}>Voir les trajets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsPublishScreen;
