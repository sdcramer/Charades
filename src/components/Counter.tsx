import { useState, useEffect } from "react";
import { View, Text } from "react-native-web";

const Counter = (props: {
  seconds: number;
  setIsCountFinished: Function;
}) => {
  const {
    seconds,
    setIsCountFinished,
  } = props;

  const [count, setCount] = useState<number>(seconds);
  
  // useEffect(() => {
  //   setIsCountFinished(false);
  // }, [])
  
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


  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};

export default Counter;
