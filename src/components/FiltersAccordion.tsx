import { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native-web";
import Accordion from "./Accordion";
import GenericInput from "./GenericInput";
import SearchBar from "./SearchBar";
import GenericSelector from "./GenericSelector";
import { IsCard } from "../App";
import { Category } from "../App";

const FiltersAccordion = (props: {
  accordionName: string;
  genericInputNames: string[];
  genericSelectorNames: string[];
  charadeCards: IsCard[];
  ageGroup: string;
  setAgeGroup: Function;
  selectedCategories: string[];
  setSelectedCategories: Function;
  categories: Category[];
  option: string;
  setMinYear: Function;
  setMaxYear: Function;
  minYear: number;
  maxYear: number;
}) => {
  const {
    accordionName,
    genericInputNames,
    charadeCards,
    ageGroup,
    setAgeGroup,
    genericSelectorNames,
    selectedCategories,
    setSelectedCategories,
    categories,
    option,
    setMinYear,
    setMaxYear,
    minYear,
    maxYear,
  } = props;

  const [isEnabled, setIsEnabled] = useState(false);

  const categoryHandler = (itemName: string) => {
    let chosenCategories = selectedCategories;
    if (selectedCategories.includes(itemName)) {
      const filteredCategories = selectedCategories.filter(
        (categoryName) => categoryName !== itemName
      );
      setSelectedCategories(filteredCategories);
    } else {
      chosenCategories = [...selectedCategories, itemName];
      setSelectedCategories(chosenCategories);
    }
  };

  return (
    <Accordion accordionName={accordionName}>
      <GenericSelector
        options={genericSelectorNames}
        sectionTitle={"Age"}
        stateFunction={setAgeGroup}
        stateVariable={ageGroup}
      ></GenericSelector>
      <GenericInput
        sectionTitle={option} setMinYear={setMinYear} setMaxYear={setMaxYear} minYear={minYear} maxYear={maxYear}></GenericInput>
        
      <Text>{"Photos Only"}</Text>
      <Switch
        value={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}
      ></Switch>
      <Text>{"Categories"}</Text>
      <SearchBar charadeCards={charadeCards} />
      <FlatList
        data={categories}
        keyExtractor={(item: Category) => item.id}
        renderItem={({ item }: { item: Category }) => (
          <Pressable onPress={() => categoryHandler(item.name)}>
            <Text
              style={
                selectedCategories.includes(item.name)
                  ? styles.categoryHighlight
                  : {}
              }
            >
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </Accordion>
  );
};

const styles = StyleSheet.create({
  categoryHighlight: {
    backgroundColor: "red",
  },

  categorySelected: {
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
