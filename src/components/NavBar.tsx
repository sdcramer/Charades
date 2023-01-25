import Counter from "./Counter";
import { View } from "react-native-web";
import { useState } from "react";
import QuitModal from "./QuitModal";

const NavBar = (props: { seconds: number; nextGamePhase: string; setGamePhase: Function; asset: string; role: string;  title: string[]}) => {
  const { seconds, setGamePhase, asset, role, nextGamePhase, title } = props;
  
  const [isCountFinished, setIsCountFinished] = useState(false)
  
  return (
    <>
      <Counter
        seconds={seconds}
        setIsCountFinished={setIsCountFinished}
      ></Counter>
      <QuitModal setGamePhase={setGamePhase} nextGamePhase={nextGamePhase} title={title} ></QuitModal>
    </>
  );
};

export default NavBar;
