import { useState } from "react";
import GenericBtn from "./components/GenericBtn";
import { View, Text, StyleSheet } from "react-native-web";
import TeamsAccordion from "./components/TeamsAccordion";
import RoundsAccordion from "./components/RoundsAccordion";
import FiltersAccordion from "./components/FiltersAccordion";
import PreTurnCounter from "./components/PreTurnCounter";
import NavBar from "./components/NavBar";
import CardView from "./components/CardView";
import ScoreBtn from "./components/ScoreBtn";
import ContinueBtn from "./components/ContinueBtn";
import EndGameSummary from "./components/LeaderBoard";
import MissedBtn from "./components/MissedBtn";
import QuitModal from './components/QuitModal';

export interface IsCard {
  id: number;
  category: string;
  photo: boolean;
  title: string;
  age: number;
}

export interface Category {
  id: number;
  name: string;
}

interface Year {
  min: number;
  max: number;
}

export interface Team {
  completedRounds: number;
  score: number;
  missed: number;
}

export interface GameState {
  rank: number[];
  currentTeamsTurn: number;
  numOfTeams: number;
  rounds: number;
  currentRound: number;
  roundTime: number;
  age: string;
  year: Year;
  categories: string[];
  teams: Record<string, Team>;
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

  const initialGameState: GameState = {
    rank: [],
    currentTeamsTurn: 1,
    numOfTeams: 2,
    rounds: 3,
    currentRound: 1,
    roundTime: 30,
    age: "",
    year: {
      min: 0,
      max: 0,
    },
    categories: [],
    teams: {
      1: {
        completedRounds: 0,
        score: 0,
        missed: 0,
      },
      2: {
        completedRounds: 0,
        score: 0,
        missed: 0,
      },
    },
  };

  const [gameState, setGameState] = useState(initialGameState);
  const teamOptions = [2, 3, 4];
  const genericBtnNames = [
    "Start",
    "Continue",
    "Ready",
    "Go",
    "No",
    "Yes",
    "Back",
    "Quit",
  ];
  const genericInputNames = ["Age", "Year"];
  const genericSelectorNames = ["Kids", "Teens", "Adults"];
  const accordionNames: AccordionNames = ["Teams", "Rounds", "Filters"];

  
  const categories: Category[] = [
    {
      id: 1,
      name: "movies",
    },
    {
      id: 2,
      name: "animals",
    },
    {
      id: 3,
      name: "food",
    },
  ];

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
      <View style={styles.container1}>
        <Text>Charades</Text>
        <GenericBtn
          setStateFunction={setGamePhase}
          title={genericBtnNames[0]}
          option={"settings"}
        />
      </View>
    );
  } else if (gamePhase === "settings") {
    return (
      <>
        <View style={styles.container1}>
          <TeamsAccordion
            accordionName={accordionNames[0]}
            teamOptions={teamOptions}
            gameState={gameState}
            setGameState={setGameState}
          />
          <RoundsAccordion
            accordionName={accordionNames[1]}
            gameState={gameState}
            setGameState={setGameState}
          />
          <FiltersAccordion
            accordionName={accordionNames[2]}
            genericInputNames={genericInputNames}
            genericSelectorNames={genericSelectorNames}
            charadeCards={charadeCards}
            option={"Year"}
            categories={categories}
            gameState={gameState}
            setGameState={setGameState}
          />

          <GenericBtn
            setStateFunction={setGamePhase}
            title={"Back"}
            option={"start"}
          />
          <GenericBtn
            setStateFunction={setGamePhase}
            title={"Ready"}
            option={"preTurn"}
          />
        </View>
      </>
    );
  } else if (gamePhase === "preTurn") {
    return (
      <>
        <View>
          <QuitModal
            setGamePhase={setGamePhase}
          />
          <Text>Round {gameState.currentRound}</Text>
          <Text>Team {gameState.currentTeamsTurn}'s turn</Text>
          <Text>Press Go when ready</Text>
          <GenericBtn
            setStateFunction={setGamePhase}
            title={"Go"}
            option={"preTurnCountDown"}
          />
        </View>
      </>
    );
  } else if (gamePhase === "preTurnCountDown") {
    return <PreTurnCounter setGamePhase={setGamePhase} seconds={3} />;
  } else if (gamePhase === "turn") {
    return (
      <>
        <NavBar
          seconds={5}
          setGamePhase={setGamePhase}
          asset={"./assets/BackArrow.png"}
          role={"imagebutton"}
          genericBtnNames={genericBtnNames}
        />
        <CardView></CardView>

        <MissedBtn gameState={gameState} setGameState={setGameState} />
        <ScoreBtn gameState={gameState} setGameState={setGameState} />
      </>
    );
  } else if (gamePhase === "postTurn") {
    return (
      <>
        <NavBar
          seconds={5}
          setGamePhase={setGamePhase}
          asset={"./assets/BackArrow.png"}
          role={"imagebutton"}
          genericBtnNames={genericBtnNames}
        />
        <CardView></CardView>
        <ContinueBtn
          title={"Continue"}
          setGamePhase={setGamePhase}
          gameState={gameState}
          setGameState={setGameState}
        ></ContinueBtn>
      </>
    );
  } else if (gamePhase === "endGame") {
    return <EndGameSummary gameState={gameState}></EndGameSummary>;
  }
};
const styles = StyleSheet.create({
  container1: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "100%",
  },

  container2: {
    backgroundColor: "orange",
  },
});

export default App;
