import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  SafeAreaView,
} from "react-native-web";
// import TeamsAccordion from './components/TeamsAccordion';
// import RoundsAccordion from './components/RoundsAccordion';
// import FiltersAccordion from './components/FiltersAccordion';
import GenericBtn from "./components/GenericBtn";
import TeamsModal from "./components/TeamsModal";
import RoundsModal from "./components/RoundsModal";
import FiltersModal from "./components/FiltersModal";
import PreTurnCounter from "./components/PreTurnCounter";
import NavBar from "./components/NavBar";
import CardView from "./components/CardView";
import CorrectBtn from "./components/CorrectBtn";
import ContinueBtn from "./components/ContinueBtn";
import EndGameSummary from "./components/EndGameSummary";
import MissedBtn from "./components/MissedBtn";
import QuitModal from "./components/QuitModal";
import Counter from "./components/Counter";
import GameSummary from "./components/GameSummary";

export interface IsCard {
  card: Object;
  id: number;
  category: string;
  img: string;
  name: string;
  title: string;
  description: string;
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
  photo: boolean;
  categories: string[];
  teams: Record<string, Team>;
}

const App = () => {
  type AccordionNames = string[];
  type SettingsBtnNames = string[];

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
    roundTime: 2,
    age: "",
    year: {
      min: 0,
      max: 0,
    },
    photo: false,
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
  const settingsBtnNames: SettingsBtnNames = ["Teams", "Rounds", "Filters"];

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
      id: 7,
      name: "Activities",
    },

    {
      id: 7,
      name: "Items",
    },
  ];

  const cards: IsCard = [
    {
      id: 1,
      name: "elephant",
      title: "elephant",
      description: "elephant",
      img: "./components/assets/elephant",
      age: "kids",
      category: "animals",
    },

    {
      id: 2,
      name: "gorilla",
      title: "gorilla",
      description: "gorilla",
      img: "./components/assets/gorilla",
      age: "kids",
      category: "animals",
    },

    {
      id: 3,
      name: "singing",
      title: "singing",
      description: "",
      img: "./components/assets/singing",
      age: "kids",
      category: "activities",
    },

    {
      id: 4,
      name: "bow and arrow",
      title: "bow and arrow",
      description: "bow and arrow",
      img: "./components/assets/bowAndArrow",
      age: "adults",
      category: "items",
    },

    {
      id: 5,
      name: "roller-skating",
      title: "roller-skating",
      description: "roller-skating",
      img: "./components/assets/rollerSkating",
      age: "kids",
      category: "activities",
    },

    {
      id: 6,
      name: "E.T.",
      title: "E.T.",
      description: "E.T.",
      img: "",
      age: "teens",
      category: "movies",
    },

    {
      id: 7,
      name: "doctor",
      title: "doctor",
      description: "doctor",
      img: "./components/assets/doctor",
      age: "kids",
      category: "professions",
    },

    {
      id: 8,
      name: "drums",
      title: "drums",
      description: "drums",
      img: "./components/assets/drums",
      age: "kids",
      category: "musical instruments",
    },

    {
      id: 9,
      name: "swimming",
      title: "swimming",
      description: "swimming",
      img: "./components/assets/swimming",
      age: "teens",
      category: "sports",
    },

    {
      id: 10,
      name: "spider-man",
      title: "spider-man",
      description: "green goblin",
      img: "",
      age: "adults",
      category: "superheroes & villains",
    },
  ];

  useEffect(() => {
    if (gamePhase === "start") {
      setGameState(initialGameState);
    }
  }, [gamePhase]);

  if (gamePhase === "start") {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.startScreenContainer}>
          <Text style={styles.setTitleTextStyle}>Charades</Text>
          <View style={styles.startBtnContainer}>
            <GenericBtn
              setStateFunction={setGamePhase}
              title={genericBtnNames[0]}
              option={"settings"}
            />
          </View>
        </View>
      </View>
    );
  } else if (gamePhase === "settings") {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.emptyViewContainer}></View>
        <View style={styles.settingsBtnsWrapper}>
          <View style={styles.settingsBtnsContainer}>
            <View style={styles.settingsBtnCard}>
              <TeamsModal
                settingsBtnName={settingsBtnNames[0]}
                teamOptions={teamOptions}
                gameState={gameState}
                setGameState={setGameState}
              />
            </View>
            <View style={styles.settingsBtnCard}>
              <RoundsModal
                settingsBtnName={settingsBtnNames[1]}
                gameState={gameState}
                setGameState={setGameState}
              />
            </View>
            <View style={styles.settingsBtnCard}>
              <FiltersModal
                settingsBtnName={settingsBtnNames[2]}
                genericInputNames={genericInputNames}
                genericSelectorNames={genericSelectorNames}
                charadeCards={cards}
                categories={categories}
                gameState={gameState}
                setGameState={setGameState}
              />
            </View>
          </View>
        </View>

        <View style={styles.btnsWrapper}>
          <View style={styles.btnsContainer}>
            <View style={styles.btnsCard}>
              <GenericBtn
                setStateFunction={setGamePhase}
                title={"Back"}
                option={"start"}
              />
              <GenericBtn
                setStateFunction={setGamePhase}
                title={"Continue"}
                option={"preTurn"}
              />
            </View>
          </View>
        </View>
      </View>
    );
    //Accordion drop-down option
    // return (
    //   < style={styles.mainContainer}>

    //       <TeamsAccordion
    //         accordionName={accordionNames[0]}
    //         teamOptions={teamOptions}
    //         gameState={gameState}
    //         setGameState={setGameState}
    //       />

    //       <RoundsAccordion
    //         accordionName={accordionNames[1]}
    //         gameState={gameState}
    //         setGameState={setGameState}
    //       />

    //       <FiltersAccordion
    //         accordionName={accordionNames[2]}
    // genericInputNames={genericInputNames}
    // genericSelectorNames={genericSelectorNames}
    // charadeCards={charadeCards}
    // option={'Year'}
    // categories={categories}
    // gameState={gameState}
    // setGameState={setGameState}
    //       />
  } else if (gamePhase === "preTurn") {
    console.log(JSON.stringify(gameState, null, 2));

    return (
      <View style={styles.mainWrapper}>
        <View style={styles.emptyViewContainer}></View>
        <View style={styles.preTurnMessageContainer}>
          <View style={styles.preTurnMessage}>
            <Text style={styles.preTurnRoundText}>
              Round {gameState.currentRound}
            </Text>
            <Text style={styles.preTurnMessageText}>
              Team {gameState.currentTeamsTurn} get ready!
            </Text>
          </View>
          {gameState.currentRound === 1 &&
          gameState.currentTeamsTurn === 1 ? null : (
            <GameSummary gameState={gameState}></GameSummary>
          )}
        </View>
        <View style={styles.btnsWrapper}>
          <View style={styles.btnsContainer}>
            <View style={styles.btnsCard}>
              {gameState.currentRound === 1 &&
              gameState.currentTeamsTurn === 1 ? (
                <GenericBtn
                  setStateFunction={setGamePhase}
                  title={"Back"}
                  option={"settings"}
                />
              ) : (
                <QuitModal
                  setGamePhase={setGamePhase}
                  gamePhase={gamePhase}
                ></QuitModal>
              )}

              <GenericBtn
                setStateFunction={setGamePhase}
                title={"Continue"}
                option={"preTurnCountDown"}
              />
            </View>
          </View>
        </View>
      </View>
    );
  } else if (gamePhase === "preTurnCountDown") {
    return <PreTurnCounter setGamePhase={setGamePhase} seconds={1} />;
  } else if (gamePhase === "turn") {
    return (
      <>
        <View style={styles.mainWrapper}>
          <View style={styles.navBarContainer}>
            <Text style={styles.roundText}>Round {gameState.currentRound}</Text>
            <NavBar
              setGamePhase={setGamePhase}
              seconds={gameState.roundTime}
            ></NavBar>
          </View>
          <View style={styles.cardViewContainer}>
            <CardView></CardView>
          </View>
          <View style={styles.scoreBtnsWrapper}>
            <View style={styles.scoreBtnsContainer}>
              <MissedBtn gameState={gameState} setGameState={setGameState} />
              <CorrectBtn gameState={gameState} setGameState={setGameState} />
            </View>
            <View style={styles.quitBtnWrapper}>
              <View style={styles.quitBtnContainer}>
                <QuitModal setGamePhase={setGamePhase} gamePhase={gamePhase} />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  } else if (gamePhase === "postTurn") {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.emptyViewContainer}></View>
        <View style={styles.postTurnMessageContainer}>
          <Text style={styles.postTurnTimesUpText}>Time's Up!</Text>
          <Text style={styles.postTurnTeamScoreText}>
            Team {gameState.currentTeamsTurn} scored{" "}
            {gameState.teams[gameState.currentTeamsTurn].score} points
          </Text>
        </View>
        <View style={styles.continueBtnWrapper}>
          <View style={styles.continueBtnContainer}>
            <ContinueBtn
              title={"Continue"}
              setGamePhase={setGamePhase}
              gameState={gameState}
              setGameState={setGameState}
            ></ContinueBtn>
          </View>
        </View>
      </View>
    );
  } else if (gamePhase === "endGame") {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.emptyViewContainer}></View>
        <View style={styles.postTurnMessageContainer}>
          <Text style={styles.postTurnTimesUpText}>Game Over!</Text>
          <Text style={styles.postTurnTeamScoreText}>
            Team {gameState.currentTeamsTurn} scored{" "}
            {gameState.teams[gameState.currentTeamsTurn].score} points
          </Text>
          <EndGameSummary gameState={gameState}></EndGameSummary>
        </View>
        <View style={styles.scoreBtnsWrapper}>
          <View style={styles.quitBtnWrapper}>
            <View style={styles.quitBtnContainer}>
              <QuitModal setGamePhase={setGamePhase} gamePhase={gamePhase} />
            </View>
          </View>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#140029",
  },

  startScreenContainer: {
    flex: 0.333,
    // backgroundColor: "pink",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  setTitleTextStyle: {
    color: "#a193d9",
    fontSize: 65,
    fontFamily: "HennyPenny-Regular",
  },

  startBtnContainer: {
    // backgroundColor: 'red',
    height: "16%",
    width: "100%",
    alignItems: "center",
  },

  emptyViewContainer: {
    // border: "solid white",
    backgroundColor: "white",
    flex: 1,
    width: "100%",
  },

  settingsBtnsWrapper: {
    // backgroundColor: "red",
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },

  settingsBtnsContainer: {
    // backgroundColor: "green",
    height: "80%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  settingsBtnCard: {
    // backgroundColor: "yellow",
    height: "23%",
    width: 110,
    justifyContent: "center",
    alignItems: "center",
  },

  btnsWrapper: {
    // backgroundColor: "pink",
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },

  btnsContainer: {
    flex: 1,
    // border: "solid green",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    width: "100%",
  },

  btnsCard: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "22%",
  },

  preTurnMessageContainer: {
    // border: "solid red",
    // backgroundColor: "yellow",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  preTurnMessage: {
    // backgroundColor: "turquoise",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  preTurnMessageText: {
    fontSize: 25,
    color: "#a193d9",
    fontFamily: "HennyPenny-Regular",
  },

  preTurnRoundText: {
    fontFamily: "HennyPenny-Regular",
    color: "white",
    fontSize: 30,
  },

  gameSummaryContainer: {
    // border: "solid yellow",
    backgroundColor: "pink",
    width: "100%",
    flex: 1,
    alignItems: "center",
  },

  roundTextContainer: {
    flex: 1,
    justifyContent: "center",
  },

  roundText: {
    fontFamily: "HennyPenny-Regular",
    fontSize: 20,
    color: "white",
  },

  teamTextContainer: {
    flex: 1,
    justifyContent: "center",
  },

  pressGoTextContainer: {
    flex: 1,
    // backgroundColor: "orange",
    justifyContent: "center",
  },

  goBtnContainer: {
    flex: 1,
    justifyContent: "center",
  },

  goBtn: {
    backgroundColor: "#5E3AC7",
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    textColor: "white",
  },

  navBarContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  cardViewContainer: {
    // backgroundColor: "orange",
    flex: 1,
  },

  scoreBtnsWrapper: {
    // backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
    width: "100%",
  },

  scoreBtnsContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    flex: 0.5,
    justifyContent: "space-around",
    padding: 15,
    alignItems: "center",
  },

  quitBtnWrapper: {
    backgroundColor: "pink",
    flex: 0.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  quitBtnContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: "42%",
    justifyContent: "center",
    alignItems: "center",
  },

  postTurnMessageContainer: {
    flex: 1,
    backgroundColor: "pink",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  postTurnMessage: {
    flex: 0.5,
    border: "solid yellow",
  },

  endGameSummaryContainer: {
    flex: 0.5,
    border: "solid red",
  },

  postTurnTimesUpText: {
    fontFamily: "HennyPenny-Regular",
    fontSize: 30,
    color: "white",
  },

  postTurnTeamScoreText: {
    fontFamily: "HennyPenny-Regular",
    fontSize: 25,
    color: "#a193d9",
  },

  continueBtnWrapper: {
    flex: 1,
    // backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  continueBtnContainer: {
    // backgroundColor: "red",
    height: "16%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
