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
  const [numOfRoundTime, setNumOfRoundTime] = useState<30 | 60 | 90>(30);
  const roundTimes = [30, 60, 90];
  const roundOptions = [3, 5, 7];

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
    <SettingsModal
      settingsBtnName={settingsBtnName}
      mainWrapper={styles.mainWrapper}
      modalWrapper={styles.modalWrapper}
      modalContainer={styles.modalContainer}
      modalEmptyViewContainer={styles.modalEmptyViewContainer}
      modalPressableWrapper={styles.modalPressableWrapper}
      modalDoneBtnWrapper={styles.modalDoneBtnWrapper}
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
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  modalWrapper: {
    height: 932,
    width: 430,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#140029",
    border: "solid #a193d945 8px",
    borderRadius: "15px",
  },

  // modalWrapper: {
  //   flex: 1,
  //   backgroundColor: "#140029",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  modalContainer: {
    flex: 1,
    width: 320,
    border: ".25rem solid #a193d945",
    borderRadius: 25,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-around",
  },

  modalEmptyViewContainer: {
    flex: 1,
    widht: "100%",
  },

  modalPressableWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalDoneBtnWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
