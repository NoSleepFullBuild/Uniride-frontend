import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../App";
import SearchBar from "../../components/searchBar/SearchBar";
import { RouteProp } from "@react-navigation/native";
import SearchCard from "../../components/searchCard/searchCard";

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
  return (
    <View className="flex-1 bg-cover bg-center bg-zinc-950 justify-center">
      <View className="flex-1">
        <SearchBar searchParams={searchParams} navigation={navigation} />
        <Text className="text-white mt-8 mx-5 text-lg font-bold">
          {searchParams.date
            .toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
            .replace(/\./g, "")}
        </Text>
        <SearchCard />
      </View>
    </View>
  );
};

export default SearchScreen;
