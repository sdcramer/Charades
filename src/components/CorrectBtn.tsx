import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";
import { GameState, IsCard } from "../App";

const CorrectBtn = (props: {
  gameState: GameState;
  setGameState: Function;
  gamePhase: string;
  requestedGameTopics: Object[];
  setRequestedGameTopics: Function;
  setSelectedTopic: Function;
}) => {
  const {
    gameState,
    setGameState,
    requestedGameTopics,
    setRequestedGameTopics,
    setSelectedTopic,
  } = props;

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
    drawAnotherTopic();
  };

  const drawAnotherTopic = () => {
    let newArray = [... requestedGameTopics]
    setSelectedTopic(newArray.pop());
    setRequestedGameTopics(newArray);
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
