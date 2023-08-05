import { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native-web';
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
      <View style={styles.preTurnWrapper}>
        <Counter seconds={seconds} setIsCountFinished={setIsPreCountFinished} counterSizeStyle={styles.preTurnCounter} />
      </View>
    </>
  );
};

export default PreTurnCounter;

const styles = StyleSheet.create({
  preTurnWrapper: {
    backgroundColor: "#140029",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  preTurnCounter: {
    fontSize: 80,
  }
});


