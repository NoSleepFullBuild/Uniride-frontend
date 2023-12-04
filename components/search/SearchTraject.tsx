import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

const SearchTraject = () => {
  const [depart, setDepart] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const handleSearch = () => {
    console.log({ depart, destination, date, numberOfPeople });
  };

  return (
      <View className="mx-7 mb-10 p-5 bg-white bg-opacity-70 rounded-lg">
        <TextInput
          className="mb-4 px-3 py-2 bg-gray-200 rounded"
          placeholder="Départ"
          value={depart}
          onChangeText={setDepart}
        />
        <TextInput
          className="mb-4 px-3 py-2 bg-gray-200 rounded"
          placeholder="Destination"
          value={destination}
          onChangeText={setDestination}
        />
        <TextInput
          className="mb-4 px-3 py-2 bg-gray-200 rounded"
          placeholder="Date"
          value={date}
          onChangeText={setDate}
        />
        <TouchableOpacity 
          className="bg-blue-500 py-3 rounded"
          onPress={handleSearch}
        >
          <Text className="text-center text-white font-bold">Rechercher</Text>
        </TouchableOpacity>
      </View>
  );
};

export default SearchTraject;
