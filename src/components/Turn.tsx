import { useState, useEffect } from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native-web";
import Counter from "./Counter";

const Turn = (props: {
  seconds: number;
  stateFunction: Function;
  gamePhase: string;
  isCountFinished: boolean;
  setIsCountFinished: Function;
}) => {
  const { seconds, stateFunction, gamePhase, isCountFinished, setIsCountFinished } = props;

  
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let delay: number;
    delay = setTimeout(() => setIsHidden(false), 3000);
    return () => {
      clearTimeout(delay);
    };
  }, []);
  return (
    <>
      <View>
        <Counter
          seconds={seconds}
          isCountFinished={isCountFinished}
          setIsCountFinished={setIsCountFinished}
        />
      </View>
      {!isHidden ? (
        <Text>I'm the turn phase being shown after a 3 second delay</Text>
      ) : null}

      {/* /* <View style={styles.container}>
        <ImageBackground source={'src/components/assets/placeholder.png'} style={styles.image}>
        <View style={styles.container2}>
            <Text style={styles.text}>√ or X</Text>

        </View>
      </ImageBackground>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "35%",
    width: "25%",
  },

  container2: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    backgroundColor: "yellow",
    color: "black",
    fontSize: 28,
  },
});

export default Turn;
