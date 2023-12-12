import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../App";
import SearchBar from "../../components/searchBar/SearchBar";
import { RouteProp } from "@react-navigation/native";
import SearchCard from "../../components/searchCard/searchCard";
import { useState } from "react";

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

type SearchScreenRouteProp = RouteProp<RootStackParamList, "Search">;

type SearchScreenProps = {
  route: SearchScreenRouteProp;
  navigation: SearchScreenNavigationProp;
};

const SearchScreen = ({ route, navigation }: SearchScreenProps) => {
  const { searchParams } = route.params;

  const [bgColor, setBgColor] = useState("bg-zinc-950");
  const [textColor, setRightTextColor] = useState("text-white");

  return (
    <View className={"flex-1 bg-cover bg-center justify-center " + bgColor}>
      <View className="flex-1">
        <SearchBar searchParams={searchParams} navigation={navigation} />
        <Text className={"mt-6 mb-3 mx-5 text-xl font-bold " + textColor}>
          {searchParams.date
            .toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
            .replace(/\./g, "")}
        </Text>
        <View>
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
