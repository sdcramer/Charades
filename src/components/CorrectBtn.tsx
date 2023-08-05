import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";
import { GameState } from "../App";

const CorrectBtn = (props: { gameState: GameState; setGameState: Function }) => {
  const { gameState, setGameState } = props;

  const correctBtnHandler = () => {
    const newGameState = structuredClone(gameState);
    const { currentTeamsTurn } = newGameState;
    newGameState.teams[currentTeamsTurn].score =
      newGameState.teams[currentTeamsTurn].score + 1;
    setGameState(newGameState);
  };

  return (
    <TouchableOpacity onPressIn={correctBtnHandler}>
      <View style={styles.correctBtn}>
        <Text style={styles.correctBtnText}>✔</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CorrectBtn;

const styles = StyleSheet.create({
  correctBtn: {
    backgroundColor: "#5E3AC7",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
  },

  correctBtnText: {
    color: "turquoise",
    fontWeight: "bold",
    fontSize: 35,
  },
});
