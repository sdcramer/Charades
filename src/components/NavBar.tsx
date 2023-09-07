import Counter from "./Counter";
import { GameState, Team } from "../App";
import { View, StyleSheet } from "react-native-web";
import { useState, useEffect } from "react";

const NavBar = (props: {
  seconds: number;
  setGamePhase: Function;
  gameState: GameState;
  setGameState: Function;
}) => {
  const { seconds, setGamePhase, gameState, setGameState } = props;

  const [isNavCountFinished, setIsNavCountFinished] = useState(false);
  const [holderTemporaryScore, setHolderTemporaryScore] = useState<number>(0);


  useEffect(() => {
    if (isNavCountFinished) {
      setGamePhase("postTurn");
    }
  });



  

  // useEffect(() => {
  //   if (isNavCountFinished === true) {
  //     const newGameState = structuredClone(gameState);
  //     let temporaryRoundScore = [];
  //     let temporaryScore;
  //     const { currentTeamsTurn, numOfRounds, completedRounds } = newGameState;
  //     temporaryScore = newGameState.teams[currentTeamsTurn].score
  //     temporaryRoundScore.push(temporaryScore)
      
  //     if (completedRounds)
  //     for (let i = 1; i < numOfRounds; i++ )
      
      
  //     roundScore = newGameState.teams[currentTeamsTurn].score - newGameState.teams[currentTeamsTurn].roundScores[newGameState.currentRound - 1]
  //     newGameState.teams[currentTeamsTurn].roundScores.push(roundScore);
      

      // Round 1
      // Team 1 scores 3 points
      // score: 3
      // roundScores: [3]
    

      // Round 2
      // Team 1 scores 2 points
      // score: 5
      // roundScores: [3, 5] but needs to be [3, 2]
      // so if it is Round 2 before score gets pushed into roundScores array it needs to be subtracted by the previous round's score(first element at index 0 of the roundScores array)
      // after doing so roundScores will be roundScores: [3, 2]

      // Round 3
      // Team 1 scores 4 points
      // score: 9
      // incorrect roundScores: [3, 5, 9]
      
      
      
      // for (let i = 1; i <= numOfTeams; i++) {
    ///   roundScore = gameState.teams[i].score;
      //   newGameState.teams[i].roundScores.push(roundScore);

      //   // newGameState.teams[i].roundScores = [
      //   //   ...newGameState.teams[i].roundScores,
      //   //   roundScore,
      //   // ];
      // }

  //     setGameState(newGameState);
  //     console.log("GAMESTATE =", gameState);
  //   }
  // }, [isNavCountFinished]);

  return (
    <>
      <Counter
        seconds={seconds}
        setIsCountFinished={setIsNavCountFinished}
        counterSizeStyle={styles.navBarCounter}
      />
    </>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBarCounter: {
    fontSize: 40,
  },
});
