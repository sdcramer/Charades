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
  const [minYear, setMinYear] = useState();
  const [maxYear, setMaxYear] = useState();
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

  console.log(
    "after useEffects on FiltersAccordion run, gameState =",
    gameState
  );

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

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.filteredCategorieContainer}
      onPress={() => categoryHandler(item.name)}
    >
      <Text
        style={
          selectedCategories.includes(item.name)
            ? styles.categoryTextHighlight
            : styles.categoryTextDefaultColor
        }
      >
        {item.name}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.filterContainer}>

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
      <View style={styles.photoModeContainer}>
        <Text style={styles.textPhotosOnly}>{"Photos Only"}</Text>
        <Switch
          style={styles.switch}
          value={isPhotoMode}
          onValueChange={() => setIsPhotoMode(!isPhotoMode)}
          thumbColor={"#a193d9"}
          activeThumbColor={"magenta"}
          trackColor={{ false: "#a193d950", true: "#a193d9" }}
        />
      </View>
      <Text style={styles.sectionTitle}>{"Categories"}</Text>
      <SearchBar
        handleAvailableCategories={handleAvailableCategories}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={filteredSearchCategories}
          keyExtractor={(item: Category) => item.id}
          renderItem={renderItem}
        />
      </View>
      {/* <Pressable
          style={({ pressed }) => [
            {
              color: pressed ? "magenta" : "white",
            },
          ]}
        >
          <Text>{}</Text>
        </Pressable> */}
    </Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1, 
  },

  photoModeContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
    marginBottom: 30,
  },

  switchThumbColorDisabled: {
    thumbColor: "#a193d9",
  },

  switchThumbColorEnabled: {
    thumbColor: "magenta",
  },

  textPhotosOnly: {
    color: "#a193d9",
    fontSize: 14,
    marginLeft: -25,
  },

  switch: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red',
    marginRight: -15,
  },

  flatListContainer: {
    // flex: 1,
    marginLeft: 8,
  },

  sectionTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "italics",
  },

  categoryTextHighlight: {
    color: "magenta",
  },

  categoryTextDefaultColor: {
    color: "#a193d9",
  },

  flatList: {
    // flex: 1, 
    // marginTop: 5,
    // marginLeft: 8,
    // marginBottom: 5,
  },
});

export default FiltersAccordion;
