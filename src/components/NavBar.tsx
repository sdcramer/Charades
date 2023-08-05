import Counter from "./Counter";
import { View, StyleSheet } from "react-native-web";
import { useState, useEffect } from "react";

const NavBar = (props: { seconds: number; setGamePhase: Function }) => {
  const { seconds, setGamePhase } = props;

  const [isNavCountFinished, setIsNavCountFinished] = useState(false);

  useEffect(() => {
    if (isNavCountFinished) {
      setGamePhase("postTurn");
    }
  });

  return (
    <>
      <Counter
        seconds={seconds}
        setIsCountFinished={setIsNavCountFinished}
        counterSizeStyle={styles.navBarCounter}
      />
    </>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBarCounter: {
    fontSize: 40,
  }

});