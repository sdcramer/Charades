import { useState } from "react";
import {
  View,
  TextInput,
  Keyboard,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native-web";

const SearchBar = (props: {
  handleAvailableCategories: Function;
  setSearchTerm: Function;
  searchTerm: string;
}) => {
  const { handleAvailableCategories, setSearchTerm, searchTerm } = props;

  return (
    <View style={styles.searchbarContainer}>
      <TextInput
        style={styles.searchbarInput}
        placeholder={"Search"}
        placeholderTextColor={"#a193d9"}
        value={searchTerm}
        textAlign={"center"}
        onChangeText={(newText: string) => {
          setSearchTerm(newText);
          handleAvailableCategories(newText);
        }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    border: "solid #a193d945",
    borderRadius: 8,
    height: 26,
    justifyContent: "center",
    // marginTop: 2,
    // marginRight: 3,
    // marginLeft: 3,
    // marginBottom: 4,
  },

  searchbarInput: {
    fontSize: 12,
    color: "magenta",
    paddingLeft: 6,
  },
});

export default SearchBar;
