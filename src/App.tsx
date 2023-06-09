import { useState } from "react";
import GenericBtn from "./components/GenericBtn";
import { View, Text, StyleSheet, SafeAreaView } from "react-native-web";
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
import QuitModal from "./components/QuitModal";

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
      name: "Movies",
    },
    {
      id: 2,
      name: "Animals",
    },
    {
      id: 3,
      name: "Food",
    },

    {
      id: 4,
      name: "Sports",
    },

    {
      id: 5,
      name: "Professions",
    },
    {
      id: 6,
      name: "Superheroes & Villains",
    },

    {
      id: 7,
      name: "Musical Instruments",
    },
    {
      id: 8,
      name: "Movies",
    },
    {
      id: 9,
      name: "Animals",
    },
    {
      id: 10,
      name: "Food",
    },

    {
      id: 11,
      name: "Sports",
    },

    {
      id: 12,
      name: "Professions",
    },
    {
      id: 13,
      name: "Superheroes & Villains",
    },

    {
      id: 14,
      name: "Musical Instruments",
    },
    {
      id: 15,
      name: "Movies",
    },
    {
      id: 16,
      name: "Animals",
    },
    {
      id: 17,
      name: "Food",
    },

    {
      id: 18,
      name: "Sports",
    },

    {
      id: 19,
      name: "Professions",
    },
    {
      id: 20,
      name: "Superheroes & Villains",
    },

    {
      id: 21,
      name: "Musical Instruments",
    },
    {
      id: 22,
      name: "Movies",
    },
    {
      id: 23,
      name: "Animals",
    },
    {
      id: 24,
      name: "Food",
    },

    {
      id: 25,
      name: "Sports",
    },

    {
      id: 26,
      name: "Professions",
    },
    {
      id: 27,
      name: "Superheroes & Villains",
    },

    {
      id: 28,
      name: "Musical Instruments",
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
      <View style={styles.mainContainer}>
        <Text style={styles.setTitleTextStyle}>Charades</Text>
        <View style={styles.startButton}>
          <GenericBtn
            setStateFunction={setGamePhase}
            title={genericBtnNames[0]}
            option={"settings"}
          />
        </View>
      </View>
    );
  } else if (gamePhase === "settings") {
    return (
      <>
        <View style={styles.mainContainer}>
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
          <View style={styles.backButtonContainer}>
            <GenericBtn
              setStateFunction={setGamePhase}
              title={"<"}
              option={"start"}
            />
          </View>
          <View style={styles.readyButton}>
            <GenericBtn
              setStateFunction={setGamePhase}
              title={"Ready"}
              option={"preTurn"}
            />
          </View>
        </View>
      </>
    );
  } else if (gamePhase === "preTurn") {
    return (
      <>
        <View style={styles.container}>
          <QuitModal setGamePhase={setGamePhase} />
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
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#140029",
    paddingTop: 250,
  },

  settingsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    // marginTop: 50,
    // marginBottom: 150,

    // textAlign: 'center',
  },

  setTitleTextStyle: {
    color: "#a193d9",
    fontFamily: "HennyPenny-Regular",
    fontSize: 70,
    // backgroundColor: 'green',
    // position: "absolute",
  },

  startButton: {
    backgroundColor: "#5E3AC7",
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    textColor: "white",
    // marginTop: 140,
  },

  backButtonContainer: {
    position: "absolute",
    top: 5,
    left: 20,
  },

  readyButton: {
    backgroundColor: "#5E3AC7",
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    textColor: "white",
    // position: "absolute",
    // bottom: 90,
  },
});

export default App;

//   roundsButton: {
//     backgroundColor: "#5E3AC7",
//     borderRadius: 10,
//     width: "30%",
//     alignItems: "center",
//   },

//   filtersButton: {
//     backgroundColor: "#5E3AC7",
//     borderRadius: 10,
//     width: "30%",
//     alignItems: "center",
//   },

//   container2: {
//     position: "absolute",
//     top: -360,
//     left: 25,
//   },

//   backbutton: {
//     backgroundColor: "#5E3AC7",
//   },
