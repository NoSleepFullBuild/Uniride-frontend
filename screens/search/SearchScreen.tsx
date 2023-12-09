import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { RootStackParamList } from "../../App";
import SearchBar from "../../components/searchBar/SearchBar";

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const SearchScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 bg-cover bg-center bg-zinc-950 justify-center">
      <View className="flex-1">
        <SearchBar navigation={navigation} />
      </View>
    </View>
  );
};

export default SearchScreen;
