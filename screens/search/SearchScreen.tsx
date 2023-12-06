import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground, View } from "react-native";
import { RootStackParamList } from "../../App";

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
    </ImageBackground>
  );
};

export default SearchScreen;
