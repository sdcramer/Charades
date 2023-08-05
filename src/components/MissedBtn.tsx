import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";
import { GameState } from "../App";

const MissedBtn = (props: { gameState: GameState; setGameState: Function }) => {
  const { gameState, setGameState } = props;

  const MissedBtnHandler = () => {
    const newGameState = structuredClone(gameState);
    const { currentTeamsTurn } = newGameState;
    newGameState.teams[currentTeamsTurn].missed =
      newGameState.teams[currentTeamsTurn].missed + 1;
    setGameState(newGameState);
  };

  return (
      <TouchableOpacity onPress={MissedBtnHandler}>
    <View style={styles.missedBtn}>
        <Text style={styles.missedBtnText}>X</Text>
    </View>
      </TouchableOpacity>
  );
};

export default MissedBtn;

const styles = StyleSheet.create({
  missedBtn: {
    backgroundColor: "#5E3AC7",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
  },

  missedBtnText: {
    color: "magenta",
    fontWeight: 'bold',
    fontSize: 35,
  },
});
