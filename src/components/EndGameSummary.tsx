import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native-web";
import { GameState } from "../App";
import RankRow from "./RankRow";
import React from "react";

const EndGameSummary = (props: { gameState: GameState }) => {
  const {gameState} = props;

  // mapping positions since they can't be dynamically produced
  const positions: any = {
    0: "1st",
    1: "2nd",
    2: "3rd",
    3: "4th",
  };

  
  
  const msg = `Team ${gameState.rank[0]} Wins!`;
 
  const createRank: any = (r: any, i: any) => {
    const place = positions[i];

    return (
      <View style={styles.rankRow}>
        <RankRow
          place={place}
          teamNameorNumber={r}
          correct={gameState.teams[r].score}
          attempts={gameState.teams[r].score + gameState.teams[r].missed}
        />
      </View>
    );
  };

  return (
    <View style={styles.rankRowWrapper}>
      <View style={styles.winMsgContainer}>
        <Text style={styles.winMsgText}>{msg}</Text>
      </View>
      <View style={styles.rankRowContainer}>
        {gameState.rank.map(createRank)}
      </View>
    </View>
  );
};

export default EndGameSummary;

const styles = StyleSheet.create({
  rankRowWrapper: {
    flex: 1,
    // border: "solid red",
    width: "100%",
    justifyContent: "space-between",
    alignItems: 'center',
  },

  rankRowContainer: {
    border: "solid #a193d945",
    borderRadius: 10,
    flex: 0.7,
    width: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  rankRow: {
    // border: 'solid black',
    flex: 0.25,
    width: "80%",
    justifyContent: "center",
  },

  winMsgContainer: {
    flex: 0.25,
    // border: "solid black",
    width: "100%",
    justifyContent: 'center',
    alignItems: "center",
    fontFamily: "HennyPenny-Regular",
  },

  winMsgText: {
    color: "magenta",
    fontSize: 25,
    fontFamily: "HennyPenny-Regular",
  },
});
