import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native-web";
import GameSettings from "./GameSettings";

const FilterSettingsSummary = (props: { gameState: Object }) => {
  const { gameState } = props;

  return (
    <GameSettings summaryContainer={styles.summaryContainer}>
      <ScrollView style={styles.scrollViewWrapper}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Age:</Text>
          <Text style={styles.text2}>{gameState.age}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Year:</Text>
          <Text style={styles.text2}>
            {gameState.year.min} - {gameState.year.max}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Photo Mode:</Text>
          <Text style={styles.text2}>
            {gameState.photo === true ? "On" : "Off"}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.text1}>Categories:</Text>
          </View>
          <View style={styles.categoriesContainer}>
            <Text style={styles.text2}>
              {gameState.categories.join(", ").toString()}
            </Text>
          </View>
        </View>
      </ScrollView>
    </GameSettings>
  );
};

export default FilterSettingsSummary;

const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    // backgroundColor: "#a193d925",
  },

  textContainer: {
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    // border: "solid black",
    // flex: 2,
  },

  categoryContainer: {
    // backgroundColor: "purple",
    flexDirection: "row",
    flex: 0.6,
  },

  categoriesContainer: {
    // backgroundColor: "green",
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "center",
    // flexWrap: "wrap",
  },

  text1: {
    color: "#a193d9",
    fontSize: 12,
  },

  text2: {
    color: "magenta",
    fontSize: 12,
  },
});
