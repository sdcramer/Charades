import { useState, useEffect } from "react";
import { View } from 'react-native-web';
import Counter from "./Counter";

const PreTurnCounter = (props: {
  seconds: number;
  setGamePhase: Function;
  
}) => {
  const { setGamePhase, seconds } = props;
  
  const [isPreCountFinished, setIsPreCountFinished] = useState(false);
  

  useEffect(() => {
    if (isPreCountFinished) {
      setGamePhase("turn");
    }
  }, [isPreCountFinished]);

  return (
    <>
      <View>
        <Counter seconds={seconds} setIsCountFinished={setIsPreCountFinished} />
      </View>
    </>
  );
};

export default PreTurnCounter;
