import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../../components/searchBar/SearchBar";
import { RouteProp } from "@react-navigation/native";
import SearchCard from "../../components/searchCard/searchCard";
import { useEffect, useState } from "react";
import axios from 'axios';
import { RootStackParamList, Traject } from "../../types/type";
import { getLoginToken } from "../../utils/authUtils";

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
  const [searchResults, setSearchResults] = useState<Traject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loginToken, setLoginToken] = useState("");

  const fetchLoginToken = async () => {
    const token = await getLoginToken();
    setLoginToken(token || "");
  }

  useEffect(() => {
    fetchLoginToken();
  }, []);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const endpoint = process.env.EXPO_PUBLIC_GATEWAY_URL + "/api/gateway/trips";
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        });

        if (response.status !== 200) {
          console.error("Failed to fetch search results:", response.data.error);
          return;
        }

        setSearchResults(response.data.items[0]);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <View className="flex-1 bg-zinc-950">
      <SearchBar searchParams={searchParams} navigation={navigation} />
      <Text className="text-white text-xl font-bold mt-6 mb-3 mx-5">
        {searchParams.date.toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => <SearchCard />}
          keyExtractor={(item) => item.id.toString()}
          bounces={false}
        />
      )}
    </View>
  );
};

export default SearchScreen;
