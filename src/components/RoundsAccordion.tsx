
import GenericSelector from "./GenericSelector";
import Accordion from "./Accordion";
import { StyleSheet } from "react-native-web";

const RoundsAccordion = (props: {
  accordionName: string;
  roundOptions: string[];
  roundTimes: string[];
  setNumOfRounds: Function;
  setNumOfRoundTime: Function;
}) => {
  const { accordionName, roundOptions, roundTimes, setNumOfRounds, setNumOfRoundTime } = props;

  return (
    <Accordion accordionName={accordionName}>
      <GenericSelector options={roundOptions} stateFunction={setNumOfRounds}></GenericSelector>
      <GenericSelector options={roundTimes} stateFunction={setNumOfRoundTime}></GenericSelector>
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
