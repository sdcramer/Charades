import { View, Text, StyleSheet } from "react-native-web";
import GameSettings from "./GameSettings";

const TeamSettingsSummary = (props: { gameState: Object }) => {
  const { gameState } = props;

  return (
    <GameSettings>
      <View style={styles.teamTextContainer}>
        <Text style={styles.text1}>Teams:</Text>
        <Text style={styles.text2}>{gameState.numOfTeams}</Text>
      </View>
    </GameSettings>
  );
};

export default TeamSettingsSummary;

const styles = StyleSheet.create({
  teamTextContainer: {
    flex: 1, 
    backgroundColor: 'pink',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

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
