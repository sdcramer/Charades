import { useState, useEffect } from "react";
import GenericSelector from "./GenericSelector";
import Accordion from "./Accordion";
import { GameState } from "../App";

const RoundsAccordion = (props: {
  accordionName: string;
  gameState: GameState;
  setGameState: Function;
}) => {
  const { accordionName, gameState, setGameState } = props;
  const [numOfRounds, setNumOfRounds] = useState<3 | 5 | 7>(3);
  const [numOfRoundTime, setNumOfRoundTime] = useState<30 | 60 | 90>(30);
  const roundTimes = ["30", "60", "90"];
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

export default RoundsAccordion;
