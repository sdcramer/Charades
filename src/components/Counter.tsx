import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native-web";

const Counter = (props: { seconds: number; setIsCountFinished: Function; counterSizeStyle: Object }) => {
  const { seconds, setIsCountFinished, counterSizeStyle } = props;
  const [count, setCount] = useState<number>(seconds);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (count > 0) {
      timer = setInterval(() => setCount(count - 1), 1000);
    } else {
      setIsCountFinished(true);
    }
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <Text style={[styles.timerText, counterSizeStyle]}>{count}</Text>;
};

export default Counter;

const styles = StyleSheet.create({
  timerText: {
    color: "#a193d9",
  },
});
