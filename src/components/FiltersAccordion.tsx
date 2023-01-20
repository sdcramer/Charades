import { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native-web";
import Accordion from "./Accordion";
import GenericInput from "./GenericInput";
import SearchBar from "./SearchBar";
import { IsCard } from "../App";

const FiltersAccordion = (props: {
  accordionName: string;
  genericInputNames: string[];
  charadeCards: IsCard[];
}) => {
  const { accordionName, genericInputNames, charadeCards } = props;

  return (
    <Accordion accordionName={accordionName}>
      <GenericInput options={genericInputNames}></GenericInput>
      <Text>{"Photos Only"}</Text>
      <Switch></Switch>
      <Text>{"Categories"}</Text>
      <SearchBar charadeCards={charadeCards} />
      <FlatList
        keyExtractor={(item: { id: number; item: { id: number } }) => item.id}
        data={charadeCards}
        renderItem={({
          item,
        }: {
          item: {
            id: number;
            category: string;
            photo: boolean;
            title: string;
            age: number;
          };
        }) => (
          <TouchableOpacity>
            <Text>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </Accordion>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "red",
    width: "30%",
  },

  container2: {
    backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  container3: {},
});

export default FiltersAccordion;
