import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native-web";
import { GameState } from "../App";

const ContinueBtn = (props: {
  gameState: GameState;
  setGameState: Function;
  title: string;
  setGamePhase: Function;
}) => {
  const { gameState, setGameState, title, setGamePhase } = props;

  const continueBtnHandler = () => {
    const newGameState = structuredClone(gameState);

    if (newGameState.currentTeamsTurn < newGameState.numOfTeams) {
      newGameState.currentTeamsTurn = newGameState.currentTeamsTurn + 1;
      setGamePhase("preTurn");
    } else {
      newGameState.currentTeamsTurn = 1;

      setGamePhase("preTurn");
      if (newGameState.currentRound < newGameState.rounds) {
        newGameState.currentRound = newGameState.currentRound + 1;
      } else {
        setGamePhase("endGame");
      }
    }

    const teamsArr: any = structuredClone(Object.entries(newGameState.teams));
    console.log("teamsArr =", teamsArr);

    teamsArr.sort((a: any, b: any) => {
      // are there any ties?
      if (b[1].score === a[1].score) {
        // if so whoever has LESS misses gets 0.1 added to their score
        if (b[1].missed < a[1].missed) {
          b[1].score = a[1].score + 0.1;
        }
        if (a[1].missed < b[1].missed) {
          a[1].score = a[1].score + 0.1;
        }

        console.log("tie occurred; 0.1 added to a team's score", teamsArr);
        console.log("newGameState just before sort", newGameState);
      }
      return b[1].score - a[1].score;
    });

    const rank = teamsArr.map((team) => team[0]);

    newGameState.rank = rank;
    setGameState(newGameState);
  };

  return (
    <View>
      <TouchableOpacity onPress={continueBtnHandler}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueBtn;
