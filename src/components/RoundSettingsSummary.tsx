import { View, Text, StyleSheet } from "react-native-web";
import GameSettings from "./GameSettings";

const RoundSettingsSummary = (props: { gameState: Object }) => {
  const { gameState } = props;

  return (
    <GameSettings>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Rounds:</Text>
        <Text style={styles.text2}>
          ({gameState.rounds} @ {gameState.roundTime} seconds)
        </Text>
      </View>
    </GameSettings>
  );
};

export default RoundSettingsSummary;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
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
