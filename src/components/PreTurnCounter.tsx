import { useState, useEffect } from "react";
import { View } from "react-native-web";
import Counter from "./Counter";

const PreTurnCounter = (props: {
  seconds: number;
  isCountFinished: Boolean;
  setGamePhase: Function;
  setIsCountFinished: Function;
}) => {
  const { isCountFinished, setGamePhase, setIsCountFinished, seconds } = props;

  useEffect(() => {
    if (!isCountFinished) {
      setGamePhase("turn");
    }
  }, [isCountFinished]);

  return (
    <>
      <View>
        <Counter seconds={seconds} setIsCountFinished={setIsCountFinished} />
      </View>
    </>
  );
};

export default PreTurnCounter;
