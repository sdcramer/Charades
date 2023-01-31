import Counter from "./Counter";
import { View } from "react-native-web";
import { useState } from "react";
import QuitModal from "./QuitModal";

const NavBar = (props: { seconds: number; nextGamePhase: string; setGamePhase: Function; asset: string; role: string;  genericBtnNames: string[]}) => {
  const { seconds, setGamePhase, asset, role, nextGamePhase, genericBtnNames } = props;
  
  const [isCountFinished, setIsCountFinished] = useState(false)
  
  return (
    <>
      <Counter
        seconds={seconds}
        setIsCountFinished={setIsCountFinished}
      ></Counter>
      <QuitModal setGamePhase={setGamePhase} nextGamePhase={nextGamePhase} genericBtnNames={genericBtnNames} option={true}></QuitModal>
    </>
  );
};

export default NavBar;
