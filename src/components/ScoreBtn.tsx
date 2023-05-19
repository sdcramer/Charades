import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import { GameState } from "../App";

const ScoreBtn = (props: {
  gameState: GameState;
  setGameState: Function;

}) => {
  const { gameState, setGameState} = props;

  const ScoreBtnHandler = () => {
    const newGameState = structuredClone(gameState);
    const { currentTeamsTurn } = newGameState;
    newGameState.teams[currentTeamsTurn].score =
      newGameState.teams[currentTeamsTurn].score + 1;
    setGameState(newGameState);
  };

  return (
    <View>
      <TouchableOpacity onPress={ScoreBtnHandler}>
        <Text>√</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoreBtn;
