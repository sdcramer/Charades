import { useState, useEffect } from "react";
import { IsCard, Category, GameState } from "../App";
import {
  View,
  Text,
  Switch,
  FlatList,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native-web";
import GenericSelector from "../components/GenericSelector";
import GenericInput from "../components/GenericInput";
import SearchBar from "../components/SearchBar";
import SettingsModal from "../components/SettingsModal";

const FiltersModal = (props: {
  settingsBtnName: string;
  genericInputNames: string[];
  genericSelectorNames: string[];
  charadeCards: IsCard[];
  gameState: GameState;
  setGameState: Function;
  categories: Category[];
}) => {
  const {
    settingsBtnName,
    genericSelectorNames,
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
  const [minYear, setMinYear] = useState<number>();
  const [maxYear, setMaxYear] = useState<number>();
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
  }, [selectedCategories]);

  const categoryHandler = (itemName: string) => {
    let chosenCategories = selectedCategories;
    if (selectedCategories.includes(itemName)) {
      const filteredCategories = selectedCategories.filter(
        (categoryName) => categoryName !== itemName
      );
      console.log("filteredCategories =", filteredCategories);
      setSelectedCategories(filteredCategories);
    } else {
      chosenCategories = [...selectedCategories, itemName];
      setSelectedCategories(chosenCategories);
      console.log("selectedCategories =", selectedCategories);
      setSearchTerm("");
      setFilteredSearchCategories(categories);
    }
    console.log("selectedCategories at end of function", selectedCategories);
  };

  console.log("selectedCategories after function =", selectedCategories);
  const handleAvailableCategories = (str: string) => {
    const filteredSearch = categories.filter((category) =>
      category.name.startsWith(str)
    );
    setFilteredSearchCategories(filteredSearch);
  };

  const renderItem = ({ item }: any) => (
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
    <SettingsModal
      settingsBtnName={settingsBtnName}
      modalWrapper={styles.modalWrapper}
      modalContainer={styles.modalContainer}
      // setStateFunction={setGamePhase}
    >
      <GenericSelector
        options={genericSelectorNames}
        sectionTitle={"Age"}
        stateFunction={setAgeGroup}
        stateVariable={ageGroup}
        optionSelected={styles.optionSelected}
        optionNotSelected={styles.optionNotSelected}
        sectionTitleTextStyle={styles.sectionTitleText}
      ></GenericSelector>
      <GenericInput
        sectionTitle={"Year"}
        setMinYear={setMinYear}
        setMaxYear={setMaxYear}
        minYear={minYear}
        maxYear={maxYear}
      ></GenericInput>

      <View style={styles.photoModeSectionWrapper}>
        <Text style={styles.sectionTitle}>{"Photo Mode"}</Text>
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
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>{"Categories"}</Text>

        <View style={styles.searchBarContainer}>
          <SearchBar
            handleAvailableCategories={handleAvailableCategories}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
        </View>
      </View>
      <View style={styles.flatlistContainer}>
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
    </SettingsModal>
  );
};

export default FiltersModal;

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: "#140029",
    padding: 40,
  },

  modalContainer: {
    flex: 1,
    border: ".25rem solid #a193d945",
    borderRadius: 25,
  },

  sectionTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "HennyPenny-Regular",
    paddingTop: 10,
  },

  optionNotSelected: {
    color: "#a193d9",
    fontSize: 20,
  },

  optionSelected: {
    color: "magenta",
    fontSize: 20,
  },

  photoModeSectionWrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    textAlign: "center",
    // backgroundColor: 'pink',
  },

  photoModeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 9,
    paddingRight: 32,
  },

  switchThumbColorDisabled: {
    thumbColor: "#a193d9",
  },

  switchThumbColorEnabled: {
    thumbColor: "magenta",
  },

  textPhotosOnly: {
    color: "#a193d9",
    fontSize: 20,
  },

  switch: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },

  categoriesContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  flatlistContainer: {
    flex: 1,
    marginTop: -15,
    marginBottom: 2,
    borderRaidus: 25,
  },

  categoryTextHighlight: {
    color: "magenta",
  },

  categoryTextDefaultColor: {
    color: "#a193d9",
  },

  searchBarContainer: {
    justifyContent: "center",
    padding: 6,
  },

  flatList: {
    flex: 1,
    paddingLeft: 6,
    paddingTop: 2,
    backgroundColor: '#a193d925',
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
  },
});
