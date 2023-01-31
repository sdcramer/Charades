import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";
import GenericSelector from "./GenericSelector";
import Accordion from "./Accordion";


const TeamsAccordion = (props: {
  accordionName: string;
  teamOptions: number[];
  setNumOfTeams: Function;
  numOfTeams: number;
}) => {
  const { accordionName, teamOptions, setNumOfTeams, numOfTeams} = props;

  return (
    <Accordion accordionName={accordionName}>
      <GenericSelector options={teamOptions} stateFunction={setNumOfTeams} stateVariable={numOfTeams}></GenericSelector>
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

export default TeamsAccordion;
