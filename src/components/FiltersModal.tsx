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

  const [isPhotoMode, setIsPhotoMode] = useState(true);
  const [searchCategories, setSearchCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ageGroup, setAgeGroup] = useState<"Kids" | "Teens" | "Adults">("Kids");
  const [minYear, setMinYear] = useState<number>();
  const [maxYear, setMaxYear] = useState<number>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Animals", "Food"]);

  useEffect(() => {
    setSearchCategories(categories);
  }, []);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.age = ageGroup;
    setGameState(newGameState);
  }, [ageGroup]);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.year.min = minYear;
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

  const categoryHandler = (itemName: string) => {
    let newSelectedCategories;
    if (selectedCategories.includes(itemName)) {
      newSelectedCategories = selectedCategories.filter(
        (category) => category !== itemName
      );
    } else {
      newSelectedCategories = [...selectedCategories, itemName];
    }
    setSelectedCategories(newSelectedCategories);
    setSearchCategories(categories);
  };

  // const categoryHandler = (itemName: string) => {
  //   if (selectedCategories.includes(itemName)) {
  //     let searchCategoriesClicked: string[] = selectedCategories.filter(
  //       (name) => name !== itemName
  //     );
  //     setSelectedCategories(searchCategoriesClicked);
  //     console.log(" 1. selectedCategories after .filter =", selectedCategories);
  //   } else {
  //     selectedCategories.push(itemName);
  //     let searchCategoriesClicked: string[] = [...selectedCategories];

  //     console.log(
  //       "2. selectedCategories after push and spread =",
  //       selectedCategories
  //     );
  //     setSelectedCategories(searchCategoriesClicked);
  //   }
  //   setSearchTerm("");
  //   setSearchCategories(categories)
  //   return null;
  // };

  // console.log(
  //   "3. selectedCategories at end of handler =",
  //   selectedCategories
  // );

  // selected category is passed into categoryHandler function
  // need to capture selected category and add it to an array
  //.push(categoryName)

  // variable storing array of selected category names cannot be reset each time the function runs
  // at start of function set the variable storing the array of category names to the state variable that also stores an array of the selected category names

  // dedupe array by checking if selected category name already exists within array; if so remove it.
  // if (array.includes(categoryName) {
  //  array.filter( () => )
  //} else {
  //  array.push(categoryName)
  //}

  // save array containing selected categories to state variable selectedCategories.
  // reset searchbar with empty " " after selection is made

  // const categoryHandler = (itemName: string) => {
  //   let chosenCategories = selectedCategories;
  //   if (selectedCategories.includes(itemName)) {
  //     const filteredCategories = selectedCategories.filter(
  //       (categoryName) => categoryName !== itemName
  //     );
  //     console.log("filteredCategories =", filteredCategories);
  //     setSelectedCategories(filteredCategories);
  //   } else {
  //     chosenCategories = [...selectedCategories, itemName];
  //     setSelectedCategories(chosenCategories);
  //     console.log("selectedCategories =", selectedCategories);
  //     setSearchTerm("");
  //     setFilteredSearchCategories(categories);
  //   }
  //   console.log("selectedCategories at end of function", selectedCategories);
  // };
  const handleAvailableCategories = (str: string) => {
    const filteredSearch = categories.filter((category) =>
      category.name.startsWith(str)
    );
    setSearchCategories(filteredSearch);
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
      mainWrapper={styles.mainWrapper}
      modalWrapper={styles.modalWrapper}
      modalContainer={styles.modalContainer}
      modalEmptyViewContainer={styles.modalEmptyViewContainer}
      modalPressableWrapper={styles.modalPressableWrapper}
      modalDoneBtnWrapper={styles.modalDoneBtnWrapper}
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
          data={searchCategories}
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
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  modalWrapper: {
    height: 932,
    width: 430,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#140029",
    border: "solid #a193d945 8px",
    borderRadius: "15px",
  },

  // modalWrapper: {
  //   flex: 1,
  //   backgroundColor: "#140029",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  modalContainer: {
    flex: 1,
    width: 320,
    border: ".25rem solid #a193d945",
    borderRadius: 25,
  },

  modalEmptyViewContainer: {
    flex: 0.2,
    width: "100%",
  },

  modalPressableWrapper: {
    flex: 1.8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  modalDoneBtnWrapper: {
    flex: .5, 
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
