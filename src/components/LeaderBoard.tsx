import { View, Text, FlatList } from "react-native-web";
import { GameState } from "../App";
import RankRow from "./RankRow";

const LeaderBoard = (props: { gameState: GameState }) => {
  const { gameState } = props;
  
  const positions: any = {
    0: "1st",
    1: "2nd",
    2: "3rd",
    3: "4th",
  };

  const createRank: any = (r: any, i: any) => {
    const place = positions[i];
    const msg = i === 0 ? `Team ${r} Wins!` : "";
    
    return (
      <>
        <RankRow
          place={place}
          teamNameorNumber={r}
          correct={gameState.teams[r].score}
          attempts={gameState.teams[r].score + gameState.teams[r].missed}
          msg={msg}
        />
      </>
    );
  };

  return (
    <>
      <View>{gameState.rank.map(createRank)}</View>
      <View></View>
    </>
  );
};

export default LeaderBoard;
