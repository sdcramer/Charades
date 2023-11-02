import { useState, useEffect } from "react";
import { GameState, Team } from "../App";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native-web";
import GenericSelector from "./GenericSelector";
import SettingsModal from "./SettingsModal";
import GenericBtn from "./GenericBtn";

const TeamsModal = (props: {
  settingsBtnName: string;
  teamOptions: number[];
  gameState: GameState;
  setGameState: Function;
}) => {
  const { settingsBtnName, teamOptions, gameState, setGameState } = props;

  const [numOfTeams, setNumOfTeams] = useState<2 | 3 | 4>(2);

  useEffect(() => {
    const newGameState = structuredClone(gameState);
    let teams: Record<string, Team> = {};
    for (let i = 1; i <= numOfTeams; ++i) {
      teams[i] = {
        completedRounds: 0,
        score: 0,
        missed: 0,
        roundScores: [],
      };
    }
    newGameState.teams = teams;
    newGameState.numOfTeams = numOfTeams;
    setGameState(newGameState);
  }, [numOfTeams]);

  return (
    <SettingsModal
      settingsBtnName={settingsBtnName}
      mainWrapper={styles.mainWrapper}
      modalWrapper={styles.modalWrapper}
      modalContainer={styles.modalContainer}
    >
      <GenericSelector
        options={teamOptions}
        stateVariable={numOfTeams}
        stateFunction={setNumOfTeams}
        sectionTitle={"Teams"}
        optionSelected={styles.optionSelected}
        optionNotSelected={styles.optionNotSelected}
        pressableWrapperStyle={styles.pressableWrapper}
        sectionTitleStyle={styles.sectionTitle}
        sectionTitleTextStyle={styles.sectionTitleText}
      ></GenericSelector>
    </SettingsModal>
  );
};

export default TeamsModal;

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
    // backgroundColor:'green',
    flex: 0.25,
    width: 320,
    justifyContent: "center",
    border: ".25rem solid #a193d945",
    borderRadius: 25,
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
    fontSize: 22,
    color: "white",
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
