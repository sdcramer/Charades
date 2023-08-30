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
        pressableWrapperStyle={styles.pressableWrapper}
        sectionTitleStyle={styles.sectionTitle}
        sectionTitleTextStyle={styles.sectionTitleText}
      ></GenericSelector>
      <View style={styles.emptyViewContainer}></View>
      <GenericInput
        sectionTitle={"Year"}
        setMinYear={setMinYear}
        setMaxYear={setMaxYear}
        minYear={minYear}
        maxYear={maxYear}
      ></GenericInput>
      <View style={styles.emptyViewContainer}></View>
      <View style={styles.photoModeSectionWrapper}>
        <View style={styles.photoModeSectionContainer}>
          <View style={styles.photoModeContainer}>
            <Text style={styles.photoModeText}>{"Photo Mode"}</Text>
          </View>
          <View style={styles.photosOnlySectionContainer}>
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
      </View>
      <View style={styles.emptyViewContainer}></View>
      <View style={styles.categoriesWrapper}>
        <View style={styles.categoriesContainer}>
          <View style={styles.categories}>
            <Text style={styles.categoriesText}>{"Categories"}</Text>
          </View>

          <View style={styles.searchBarContainer}>
            <SearchBar
              handleAvailableCategories={handleAvailableCategories}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
          </View>
        </View>
      </View>

      <View style={styles.flatlistContainer}>
        <FlatList
          style={styles.flatList}
          data={filteredSearchCategories}
          keyExtractor={(item: Category) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
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
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    flex: 0.8,
    width: 250,
    border: ".25rem solid #a193d945",
    borderRadius: 25,
  },

  pressableWrapper: {
    // backgroundColor: "orange",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    // backgroundColor: "blue",
    flex: 0.6,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitleText: {
    color: "white",
    // textAlign: "center",
    fontSize: 16,
    fontFamily: "HennyPenny-Regular",
  },

  emptyViewContainer: {
    // backgroundColor: 'red',
    flex: 0.1,
  },

  optionNotSelected: {
    color: "#a193d9",
    fontSize: 14,
  },

  optionSelected: {
    color: "magenta",
    fontSize: 14,
  },

  photoModeSectionWrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    textAlign: "center",
    // backgroundColor: "orange",
  },

  photoModeSectionContainer: {
    // backgroundColor: "blue",
    flex: 0.6,
    alignItems: "center",
    justifyContent: "space-between",
  },

  photoModeContainer: {
    // backgroundColor: 'red',
    height: "35%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  photosOnlySectionContainer: {
    // backgroundColor: 'pink',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "45%",
  },

  photoModeText: {
    color: "white",
    fontFamily: "HennyPenny-Regular",
    fontSize: 16,
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
  },

  switch: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scaleX: 1.0 }, { scaleY: 1.1 }],
  },

  categoriesWrapper: {
    // backgroundColor: "orange",
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },

  categoriesContainer: {
    // backgroundColor: "blue",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  categories: {
    // backgroundColor: "#a193d925",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "55%",
    width: "100%",
  },

  categoriesText: {
    color: "white",
    fontSize: 16,
    fontFamily: "HennyPenny-Regular",
  },

  searchBarContainer: {
    // backgroundColor: "pink",
    flexDirection: "flex-end",
    justifyContent: "center",
    height: "40%",
    width: "99%",
  },

  flatlistContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 2,
  },

  categoryTextHighlight: {
    color: "magenta",
  },

  categoryTextDefaultColor: {
    color: "#a193d9",
  },

  flatList: {
    flex: 1,
    paddingLeft: 6,
    paddingTop: 2,
    backgroundColor: "#a193d925",
    width: "100%",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,

    // marginLeft: 10,
    // marginRight: 10,
  },
});
