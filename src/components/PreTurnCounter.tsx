import { useState, useEffect } from "react";
import { View } from 'react-native-web';
import Counter from "./Counter";

const PreTurnCounter = (props: {
  seconds: number;
  setGamePhase: Function;
}) => {
  const { setGamePhase, seconds } = props;
  
  const [isCountFinished, setIsCountFinished] = useState(false);

  useEffect(() => {
    if (isCountFinished) {
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
