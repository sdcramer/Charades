import { useState } from "react";
import Accordion from "./components/TeamsAccordion";
import GenericBtn from "./components/GenericBtn";
import { View, Text, StyleSheet } from "react-native-web";
import TeamsAccordion from "./components/TeamsAccordion";
import RoundsAccordion from "./components/RoundsAccordion";
import FiltersAccordion from "./components/FiltersAccordion";
import Counter from "./components/Counter";
import PreTurnCounter from "./components/PreTurnCounter";
import NavBar from "./components/NavBar";
import CardView from "./components/CardView";

export interface IsCard {
  id: number;
  category: string;
  photo: boolean;
  title: string;
  age: number;
}

const App = () => {
  type AccordionNames = string[];

  const [gamePhase, setGamePhase] = useState<
    | "start"
    | "settings"
    | "preTurn"
    | "preTurnCountDown"
    | "turn"
    | "postTurn"
    | "endGame"
    | "quit"
  >("start");

  // const gameState = {
  //   teams: [
  //     {
  //       name: "team1",
  //       completedRounds: 0,
  //       score: 0
  //     },
  //     {
  //       name: "team2",
  //       completedRounds: 0,
  //       score: 0
  //     },
  //     {
  //       name: "team3",
  //       completedRounds: 0,
  //       score: 0
  //     }
  //   ],
  //   rounds: 4,
  // }

  const gameState = {
    rounds: 4,
    team1: {
      completedRounds: 0,
      score: 0,
    },
    team2: {
      completedRounds: 0,
      score: 0,
    },
    team3: {
      completedRounds: 0,
      score: 0,
    },
  };

  // const [gameState, setGameState] = useState({})

  // const createGameState = (numberOfTeams, numOfRounds) => {
  //   // const newGameState = {teams: [], rounds: numOfRounds};

  //   // for (let i = 0; i < numberOfTeams; i++) {
  //   //   newGameState.teams.push({name: `Team ${i+1}`, completedRounds: 0, score: 0})
  //   // }

  //   const newGameState = {rounds: numOfRounds}
  //   for (let i = 1; i <= numberOfTeams; i++) {
  //     newGameState[`team${i}`] = {completedRounds:0, score: 0}
  //   }

  //   setGameState(newGameState)
  // }

  const [isCountFinished, setIsCountFinished] = useState(true);
  const [numOfTeams, setNumOfTeams] = useState<2 | 3 | 4>(2);
  const [numOfRounds, setNumOfRounds] = useState<3 | 5 | 7>(3);
  const [numOfRoundTime, setNumOfRoundTime] = useState<30 | 60 | 90>(30);

  const teamOptions = ["2", "3", "4"];
  const roundOptions = ["3", "5", "7"];
  const roundTimes = ["3", "30", "60", "90"];
  const genericBtnNames = ["Start", "Continue", "Ready", "Go"];
  const genericInputNames = ["Age", "Year"];
  const accordionNames: AccordionNames = ["Teams", "Rounds", "Filters"];

  // const [teamTurn, setTeamTurn] = useState<1 | 2 | 3 | 4>(1);
  // const [currentRound, setCurrentRound] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);

  console.log("numOfTeams =", numOfTeams);
  console.log("numOfRounds =", numOfRounds);
  console.log("numOfRoundTime =", numOfRoundTime);

  const charadeCards: IsCard[] = [
    {
      id: 1,
      category: "animals",
      photo: true,
      title: "elephant",
      age: 1,
    },

    {
      id: 2,
      category: "food",
      photo: true,
      title: "ice-cream",
      age: 1,
    },

    {
      id: 3,
      category: "movies",
      photo: false,
      title: "Mad Max",
      age: 1,
    },
  ];

  if (gamePhase === "start") {
    return (
      <>
        <View style={styles.container1}>
          <Text>Charades</Text>
          <GenericBtn
            setGamePhase={setGamePhase}
            title={genericBtnNames[0]}
            gamePhase={"settings"}
          />
        </View>
      </>
    );
  } else if (gamePhase === "settings") {
    return (
      <>
        <View style={styles.container1}>
          <TeamsAccordion
            accordionName={accordionNames[0]}
            teamOptions={teamOptions}
            setNumOfTeams={setNumOfTeams}
          />
          <RoundsAccordion
            accordionName={accordionNames[1]}
            roundOptions={roundOptions}
            roundTimes={roundTimes}
            setNumOfRounds={setNumOfRounds}
            setNumOfRoundTime={setNumOfRoundTime}
          />
          <FiltersAccordion
            accordionName={accordionNames[2]}
            genericInputNames={genericInputNames}
            charadeCards={charadeCards}
          />
          <GenericBtn
            setGamePhase={setGamePhase}
            title={genericBtnNames[2]}
            gamePhase={"preTurn"}
          />
        </View>
      </>
    );
  } else if (gamePhase === "preTurn") {
    return (
      <>
        <View>
          <Text>Team 1's turn</Text>
          <Text>Press Go when ready</Text>
          <GenericBtn
            setGamePhase={setGamePhase}
            title={genericBtnNames[3]}
            gamePhase={"preTurnCountDown"}
          />
        </View>
      </>
    );
  } else if (gamePhase === "preTurnCountDown") {
    return (
      <>
        <View>
          <PreTurnCounter
            setGamePhase={setGamePhase}
            isCountFinished={isCountFinished}
            setIsCountFinished={setIsCountFinished}
            seconds={3}
          />
        </View>
      </>
    );
  }
  
  // else if (gamePhase === "turn") {
  //   return (
  //     <>
  //       <View>
  //         <NavBar
  //           seconds={5}
  //           setIsCountFinished={setIsCountFinished}
  //           gamePhase={"quit"}
  //           setGamePhase={setGamePhase}
  //           asset={"./assets/BackArrow.png"}
  //           role={"imagebutton"}
  //         ></NavBar>
  //         <CardView></CardView>
  //       </View>
  //     </>
  //   );
  // }
};
const styles = StyleSheet.create({
  container1: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "100%",
  },
});

export default App;
