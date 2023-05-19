import { useState, useEffect } from "react";
import GenericSelector from "./GenericSelector";
import Accordion from "./Accordion";
import { StyleSheet } from "react-native-web";
import { GameState } from "../App";

const RoundsAccordion = (props: {
  accordionName: string;
  gameState: GameState;
  setGameState: Function;
}) => {
  const { accordionName, gameState, setGameState } = props;
  const [numOfRounds, setNumOfRounds] = useState<3 | 5 | 7>(3);
  const [numOfRoundTime, setNumOfRoundTime] = useState<30 | 60 | 90>(30);
  const roundTimes = ["3", "30", "60", "90"];
  const roundOptions = ["3", "5", "7"];

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.rounds = numOfRounds;
    setGameState(newGameState);
  }, [numOfRounds]);
  
  
  useEffect(() => {
    const newGameState = structuredClone(gameState);
    newGameState.roundTime = numOfRoundTime;
    setGameState(newGameState);
  }, [numOfRoundTime]);
  
  console.log('after useEffects run RoundsAccordion, gameState =', gameState)


  return (
    <Accordion accordionName={accordionName}>
      <GenericSelector
        options={roundOptions}
        stateFunction={setNumOfRounds}
        stateVariable={numOfRounds}
      ></GenericSelector>
      <GenericSelector
        sectionTitle={"Round Time"}
        options={roundTimes}
        stateFunction={setNumOfRoundTime}
        stateVariable={numOfRoundTime}
      ></GenericSelector>
    </Accordion>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "red",
    width: "30%",
  },

  container2: {
    backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  container3: {},
});

export default RoundsAccordion;
