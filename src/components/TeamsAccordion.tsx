import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";
import GenericSelector from "./GenericSelector";
import Accordion from "./Accordion";
import { GameState, Team } from "../App";

const TeamsAccordion = (props: {
  accordionName: string;
  teamOptions: number[];
  gameState: GameState;
  setGameState: Function;
}) => {
  const { accordionName, teamOptions, gameState, setGameState } = props;

  const [numOfTeams, setNumOfTeams] = useState<2 | 3 | 4>(2);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    let teams: Record<string, Team> = {};
    for (let i = 1; i <= numOfTeams; i++) {
      teams[i] = {
        completedRounds: 0,
        score: 0,
        missed: 0,
      };
    }
    newGameState.teams = teams;
    newGameState.numOfTeams = numOfTeams;
    setGameState(newGameState);
  }, [numOfTeams]);

  // useEffect(() => {
  //   const newGameState = structuredClone(gameState);
  //   newGameState.numOfTeams = numOfTeams;
  //   setGameState(newGameState);
  // }, [numOfTeams]);

  console.log("after useEffect on TeamsAccordion run, gameState =", gameState);

  return (
    <Accordion accordionName={accordionName}>
      <GenericSelector 
        options={teamOptions}
        stateFunction={setNumOfTeams}
        stateVariable={numOfTeams}
      ></GenericSelector>
    </Accordion>
  );
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#5E3AC7",
      width: "30%",
      alignItems: "center",
      borderRadius: 10,
      position: "absolute",
      top: 365,
    },
  });

};


export default TeamsAccordion;
