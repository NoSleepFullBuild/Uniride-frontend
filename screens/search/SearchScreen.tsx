import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { RootStackParamList } from "../../App";
import SearchBar from "../../components/searchBar/SearchBar";
import { RouteProp } from "@react-navigation/native";

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
      </View>
    </View>
  );
};

export default SearchScreen;
