import { View, Text, StyleSheet } from "react-native-web";

const OptionsSummary = (props: { gameState: Object }) => {
  const { gameState } = props;

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Game Settings</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.teamTextContainer}>
          <Text style={styles.text1}>Teams:</Text>
          <Text style={styles.text2}>{gameState.numOfTeams}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Rounds:</Text>
          <Text style={styles.text2}>
            ({gameState.rounds} @ {gameState.roundTime} seconds)
          </Text>
        </View>
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
          <Text style={styles.text1}>Categories:</Text>
          <View style={styles.categoriesContainer}>
            <Text style={styles.text2}>
              {gameState.categories.join(", ").toString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OptionsSummary;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    width: "100%",
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  mainContainer: {
    flex: 0.5,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  titleContainer: {
    // backgroundColor: "pink",
    padding: 18,
  },

  titleText: {
    color: "white",
    fontSize: 15,
  },

  textContainer: {
    width: "60%",
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
  },

  categoriesContainer: {
    
  },

  text1: {
    color: "#a193d9",
  },

  text2: {
    color: "magenta",
  },
});
