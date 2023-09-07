import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";
import { GameState } from "../App";

const CorrectBtn = (props: {
  gameState: GameState;
  setGameState: Function;
  gamePhase: string;
}) => {
  const { gameState, setGameState } = props;

  const correctBtnHandler = () => {
    const newGameState = structuredClone(gameState);
    const { currentTeamsTurn, currentRound } = newGameState;

    newGameState.teams[currentTeamsTurn].score++;

    if (newGameState.teams[currentTeamsTurn].roundScores[currentRound - 1]) {
      newGameState.teams[currentTeamsTurn].roundScores[currentRound - 1]++;
    } else {
      newGameState.teams[currentTeamsTurn].roundScores[currentRound - 1] = 1;
    }

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
    width: 95,
    height: 39,
  },

  correctBtnText: {
    color: "turquoise",
    fontWeight: "bold",
    fontSize: 32,
  },
});
