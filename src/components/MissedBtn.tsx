import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import { GameState } from "../App";

const MissedBtn = (props: {
  gameState: GameState;
  setGameState: Function;
  
}) => {
  const { gameState, setGameState } = props;

  const MissedBtnHandler = () => {
    const newGameState = structuredClone(gameState);
    const { currentTeamsTurn } = newGameState;
    newGameState.teams[currentTeamsTurn].missed =
      newGameState.teams[currentTeamsTurn].missed + 1;
    setGameState(newGameState);
  };

  return (
    <View>
      <TouchableOpacity onPress={MissedBtnHandler}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MissedBtn;
