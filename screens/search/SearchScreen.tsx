import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { RootStackParamList } from "../../App";
import SearchBar from "../../components/searchBar/SearchBar";

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

type Props = {
  route: any;
  navigation: SearchScreenNavigationProp;
};

const SearchScreen = ({ route, navigation }: Props) => {
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
