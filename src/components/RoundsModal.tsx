import { useState, useEffect } from "react";
import { GameState } from "../App";
import { View, StyleSheet } from "react-native-web";
import GenericSelector from "./GenericSelector";
import SettingsModal from "./SettingsModal";
const RoundsModal = (props: {
  settingsBtnName: string;
  gameState: GameState;
  setGameState: Function;
}) => {
  const { settingsBtnName, gameState, setGameState } = props;

  const [numOfRounds, setNumOfRounds] = useState<3 | 5 | 7>(3);
  const [numOfRoundTime, setNumOfRoundTime] = useState< 2 | 30 | 60 | 90>(2);
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

  console.log("gameState =", gameState);

  return (
    <SettingsModal
      settingsBtnName={settingsBtnName}
      modalWrapper={styles.modalWrapper}
      modalContainer={styles.modalContainer}
    >
      <GenericSelector
        options={roundOptions}
        stateVariable={numOfRounds}
        stateFunction={setNumOfRounds}
        sectionTitle={"Rounds"}
        optionSelected={styles.optionSelected}
        optionNotSelected={styles.optionNotSelected}
        pressableWrapperStyle={styles.pressableWrapper}
        sectionTitleStyle={styles.sectionTitle}
        sectionTitleTextStyle={styles.sectionTitleText}
      ></GenericSelector>

      <GenericSelector
        options={roundTimes}
        stateVariable={numOfRoundTime}
        stateFunction={setNumOfRoundTime}
        sectionTitle={"Round Time"}
        optionSelected={styles.optionSelected}
        optionNotSelected={styles.optionNotSelected}
        pressableWrapperStyle={styles.pressableWrapper}
        sectionTitleStyle={styles.sectionTitle}
        sectionTitleTextStyle={styles.sectionTitleText}
      ></GenericSelector>
    </SettingsModal>
  );
};

export default RoundsModal;

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: "#140029",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    flex: 0.35,
    width: 250,
    border: ".25rem solid #a193d945",
    borderRadius: 25,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-around",
  },

  pressableWrapper: {
    // backgroundColor: "orange",
    flex: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    // backgroundColor: "blue",
    height: "60%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  sectionTitleText: {
    color: "white",
    fontSize: 22,
    fontFamily: "HennyPenny-Regular",
  },

  optionNotSelected: {
    color: "#a193d9",
    fontSize: 20,
  },

  optionSelected: {
    color: "magenta",
    fontSize: 20,
  },
});
