import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground, View } from "react-native";
import { RootStackParamList } from "../../App";
import SearchBar from "../../components/searchBar/SearchBar";

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, "Search">;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const SearchScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require("../../assets/login/bg.jpg")}
      className="flex-1 bg-cover bg-center justify-center"
    >
      <View
        className="absolute inset-0 bg-black opacity-70 w-full
        h-full"
      />

      <View className="flex-1 mt-[35%]">
        <SearchBar navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default SearchScreen;
