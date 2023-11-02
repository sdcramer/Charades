import { View, StyleSheet, Text } from "react-native-web";
import RankRow from "./RankRow";

const GameSummary = (props: { gameState: GameState }) => {
  const { gameState } = props;

  const positions: any = {
    0: "1st",
    1: "2nd",
    2: "3rd",
    3: "4th",
  };

  const createRank: any = (r: any, i: any) => {
    const place = positions[i];
    const msg = i === 0 ? `Team ${r} Wins!` : "";

    return (
      <View style={styles.rankRow}>
        <RankRow
          place={place}
          teamNameorNumber={r}
          correct={gameState.teams[r].score}
          attempts={gameState.teams[r].score + gameState.teams[r].missed}
        />
      </View>
    );
  };

  return (
   
      <View style={styles.rankRowContainer}>
        {gameState.rank.map(createRank)}
      </View>
    
  );
};

export default GameSummary;

const styles = StyleSheet.create({
  rankRowContainer: {
    border: "solid #a193d945",
    borderRadius: 10,
    flex: 0.7,
    width: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  rankRow: {
    // border: 'solid black',
    flex: 0.2,
    width: "80%",
    justifyContent: "center",
  },
});
