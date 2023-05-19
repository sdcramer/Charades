import { useState, useEffect } from "react";
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
import { IsCard, Category, GameState } from "../App";

const FiltersAccordion = (props: {
  accordionName: string;
  genericInputNames: string[];
  genericSelectorNames: string[];
  charadeCards: IsCard[];
  option: string;
  gameState: GameState;
  setGameState: Function;
  categories: Category[];
}) => {
  const {
    accordionName,
    genericSelectorNames,
    option,
    categories,
    gameState,
    setGameState,
  } = props;
  const [isPhotoMode, setIsPhotoMode] = useState(false);
  const [filteredSearchCategories, setFilteredSearchCategories] = useState<
    Category[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ageGroup, setAgeGroup] = useState<"kids" | "teens" | "adults">("kids");
  const [minYear, setMinYear] = useState(0);
  const [maxYear, setMaxYear] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    setFilteredSearchCategories(categories);
  }, []);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.age = ageGroup;
    setGameState(newGameState);
  }, [ageGroup]);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.year.min = minYear;
    setGameState(newGameState);
  }, [minYear]);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.year.max = maxYear;
    setGameState(newGameState);
  }, [maxYear]);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.photo = isPhotoMode;
    setGameState(newGameState);
  }, [isPhotoMode]);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.categories = selectedCategories;
    setGameState(newGameState);
  }, [selectedCategories]);

  console.log('after useEffects on FiltersAccordion run, gameState =', gameState)

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
      setSearchTerm("");
      setFilteredSearchCategories(categories);
    }
  };

  const handleAvailableCategories = (str: string) => {
    const filteredSearch = categories.filter((category) =>
      category.name.startsWith(str)
    );
    setFilteredSearchCategories(filteredSearch);
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
        sectionTitle={option}
        setMinYear={setMinYear}
        setMaxYear={setMaxYear}
        minYear={minYear}
        maxYear={maxYear}
      ></GenericInput>

      <Text>{"Photos Only"}</Text>
      <Switch
        value={isPhotoMode}
        onValueChange={() => setIsPhotoMode(!isPhotoMode)}
      ></Switch>
      <Text>{"Categories"}</Text>
      <SearchBar
        handleAvailableCategories={handleAvailableCategories}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      <FlatList
        data={filteredSearchCategories}
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
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
        ]}
      >
        <Text>{}</Text>
      </Pressable>
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
