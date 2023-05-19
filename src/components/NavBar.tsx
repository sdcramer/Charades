import Counter from "./Counter";
import { View } from "react-native-web";
import { useState, useEffect } from "react";
import QuitModal from "./QuitModal";

const NavBar = (props: {
  seconds: number;
  setGamePhase: Function;
  asset: string;
  role: string;
  genericBtnNames: string[];
}) => {
  const { seconds, setGamePhase, asset, role } = props;

  const [isNavCountFinished, setIsNavCountFinished] = useState(false);
  // const [showCounter, setShowCounter] = useState(true);

  useEffect(() => {
    if (isNavCountFinished) {
      setGamePhase("postTurn");
      // setShowCounter(false);
    }
  });

  return (
    <>
      <Counter
        seconds={seconds}
        setIsCountFinished={setIsNavCountFinished}
      ></Counter>
      <QuitModal
        setGamePhase={setGamePhase}
        option={true}
      ></QuitModal>
    </>
  );
};

export default NavBar;
