import Counter from "./Counter";
import QuitBtn from "./QuitBtn";
import { View } from "react-native-web";

const NavBar = (props: { seconds: number; setIsCountFinished: Function; gamePhase: string; setGamePhase: Function; asset: string; role: string }) => {
  const { seconds, setIsCountFinished, gamePhase, setGamePhase, asset, role} = props;
  return (
    <View>
      <Counter
        seconds={seconds}
        setIsCountFinished={setIsCountFinished}
      ></Counter>
      <QuitBtn gamePhase={gamePhase} setGamePhase={setGamePhase} source={asset} accessbilityRole={role}></QuitBtn>
    </View>
  );
};

export default NavBar;
