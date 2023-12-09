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
    <View className="flex-1 bg-cover bg-center bg-zinc-950 justify-center">
      <View className="flex-1 mt-[15%] px-5">
        <SearchBar navigation={navigation} onSearch={handleSearch} />
      </View>
    </View>
  );
};

export default SearchScreen;
