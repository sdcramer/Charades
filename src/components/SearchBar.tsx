import { useState } from "react";
import {
  View,
  TextInput,
  Keyboard,
  Button,
  FlatList,
  Text,
} from "react-native-web";

const SearchBar = (props: { handleAvailableCategories: Function; setSearchTerm: Function; searchTerm: string; }) => {
  const { handleAvailableCategories, setSearchTerm, searchTerm } = props;
  

  return (
    <View>
      <TextInput
        placeholder={"Search"}
        placeholderTextColor={"gray"}
        value={searchTerm}
        onChangeText={(newText: string) => {
          setSearchTerm(newText);
          handleAvailableCategories(newText);
        }}
      ></TextInput>
    </View>
  );
};

export default SearchBar;
