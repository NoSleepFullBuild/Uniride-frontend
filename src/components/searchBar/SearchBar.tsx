import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchTraject from "../searchTraject/SearchTraject";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, SearchParams } from "../../types/type";

type SearchBarProps = {
  searchParams: SearchParams;
  navigation: StackNavigationProp<RootStackParamList>;
};

const screenHeight = Dimensions.get("window").height;

const SearchBar = ({ searchParams, navigation }: SearchBarProps) => {
  const { depart, destination, date } = searchParams;

  const [iconsColor, setRightIconsColor] = useState("lightslategrey");
  const [textColor, setRightTextColor] = useState("text-white");
  const [subTextColor, setRightSubTextColor] = useState("text-slate-500");
  const [modalVisible, setModalVisible] = useState(false);
  const modalY = useRef(new Animated.Value(-screenHeight)).current;

  const toggleModal = () => {
    if (modalVisible) {
      Animated.spring(modalY, {
        toValue: -screenHeight,
        useNativeDriver: true,
      }).start(() => setModalVisible(false));
    } else {
      setModalVisible(true);
      Animated.spring(modalY, { toValue: 0, useNativeDriver: true }).start();
    }
  };

  return (
    <View>
      {/* SearchBar */}
      <View className="mt-[15%] mx-5 flex-row justify-center shadow border-2 border-2 border-zinc-800 rounded-2xl h-16">
        {/* Go back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="flex-none justify-center px-5"
        >
          <Icon name={"angle-left"} size={26} color={iconsColor} />
        </TouchableOpacity>

        {/* Search input */}
        <TouchableOpacity className="flex-none grow px-2" onPress={toggleModal}>
          <View className="flex-1 justify-center gap-y-0.5 items-start">
            <Text className={"text-sm font-semibold " + textColor}>
              {depart} - {destination}
            </Text>
            <Text className={"text-sm font-semibold " + subTextColor}>
              {date
                .toLocaleDateString("fr-FR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })
                .replace(/\./g, "")}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Filter button */}
        <TouchableOpacity className="flex-none px-3 justify-center">
          <Text className={"font-bold text-base pl-2 pr-3 " + textColor}>
            Filtrer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal for SearchTraject */}
      {modalVisible && (
        <TouchableWithoutFeedback onPress={toggleModal}>
          <Animated.View
            style={{
              transform: [{ translateY: modalY }],
              height: screenHeight,
            }}
          >
            <TouchableWithoutFeedback>
              <View className="mx-5">
                <Text
                  className={"my-5 font-bold text-xl pl-2 pr-3 " + textColor}
                >
                  Modifiez votre recherche
                </Text>
                <SearchTraject navigation={navigation} onClose={toggleModal} />
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default SearchBar;
