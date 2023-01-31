
import GenericSelector from "./GenericSelector";
import Accordion from "./Accordion";
import { StyleSheet } from "react-native-web";

const RoundsAccordion = (props: {
  accordionName: string;
  roundOptions: string[];
  roundTimes: string[];
  setNumOfRounds: Function;
  setNumOfRoundTime: Function;
  numOfRounds: number;
  numOfRoundTime: number;
}) => {
  const { accordionName, roundOptions, roundTimes, setNumOfRounds, setNumOfRoundTime, numOfRounds, numOfRoundTime } = props;

  return (
    <Accordion accordionName={accordionName}>
      <GenericSelector  options={roundOptions} stateFunction={setNumOfRounds} stateVariable={numOfRounds}></GenericSelector>
      <GenericSelector sectionTitle={"Round Time"} options={roundTimes} stateFunction={setNumOfRoundTime} stateVariable={numOfRoundTime}></GenericSelector>
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
