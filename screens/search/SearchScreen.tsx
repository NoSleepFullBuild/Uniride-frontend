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
  const handleSearch = (query: any): any => {
    console.log(query);
  };

  return (
    <View className="flex-1">
      <SearchBar navigation={navigation} onSearch={handleSearch} />
    </View>
  );
};

export default SearchScreen;
