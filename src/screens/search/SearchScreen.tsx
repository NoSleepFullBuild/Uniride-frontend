import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../../components/searchBar/SearchBar";
import { RouteProp } from "@react-navigation/native";
import SearchCard from "../../components/searchCard/searchCard";
import { useCallback, useEffect, useState } from "react";
import { RootStackParamList, Traject } from "../../types/type";

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

type SearchScreenRouteProp = RouteProp<RootStackParamList, "Search">;

type SearchScreenProps = {
  route: SearchScreenRouteProp;
  navigation: SearchScreenNavigationProp;
};

const MAX_RESULTS = 40; // Simule une limite maximale de résultats

const SearchScreen = ({ route, navigation }: SearchScreenProps) => {
  const { searchParams } = route.params;
  // Explicitly type the state with the Traject type
  const [searchResults, setSearchResults] = useState<Traject[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0); // Simulate pagination

  // Simulate an API call to fetch results
  const fetchSearchResults = useCallback(async () => {
    if (isFetching) return;

    setIsFetching(true);

    // Fetch the next batch of results here. This is where we add the logic to retrieve more results from our backend or API.
    // For example, we could pass the length of searchResults as an offset to our backend.

    // Mock delay to simulate network request
    setTimeout(() => {
      const startId = searchResults.length;
      const newResults = Array.from({ length: 10 }, (_, index) => ({
        id: startId + index,
      }));

      if (searchResults.length < MAX_RESULTS) {
        setSearchResults((prevResults) => [
          ...prevResults,
          ...newResults.slice(0, MAX_RESULTS - searchResults.length),
        ]);
      }

      setIsFetching(false);
      setPage((prevPage) => prevPage + 1);
    }, 1500);
  }, [isFetching, searchResults]);

  useEffect(() => {
    // To avoid fetching results on initial render, we only fetch results when the searchResults array is empty.
    if (!isFetching && searchResults.length === 0) {
      fetchSearchResults();
    }
  }, [fetchSearchResults]);

  const renderFooter = () => {
    if (!isFetching) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

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
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <SearchCard />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={fetchSearchResults}
        onEndReachedThreshold={2}
        ListFooterComponent={renderFooter}
        bounces={false}
      />
    </View>
  );
};

async function loadMoreTrajects(offset): Promise<any> {
  // Replace this with our actual API call or logic to load more data.
  // The offset parameter can be used to fetch the correct slice of data.
  // Return an empty array when there are no more results.
  // Example API call:
  // return fetch(`your-api-endpoint/trajects?offset=${offset}`).then(res => res.json());
}

export default SearchScreen;
