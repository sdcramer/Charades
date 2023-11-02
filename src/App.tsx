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
import { fetcher, buildGetTopicsQuery } from "./fetchHelper";

export interface Category {
  id: number;
  name: string;
}

export interface IsCard {
  id: number;
  name: string;
  description: string;
  image_name: string;
  age: string;
  categories: string[];
}

interface Year {
  min: number | null;
  max: number | null;
}

export interface Team {
  completedRounds: number;
  score: number;
  missed: number;
  roundScores: number[];
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
    roundTime: 30,
    age: "",
    year: {
      min: 0,
      max: 0,
    },
    photo: true,
    categories: [],
    teams: {
      1: {
        completedRounds: 0,
        score: 0,
        missed: 0,
        roundScores: [],
      },

      2: {
        completedRounds: 0,
        score: 0,
        missed: 0,
        roundScores: [],
      },
    },
  };

  const [gameState, setGameState] = useState(initialGameState);
  // console.log("typeof gameState.rank =", typeof gameState.rank);
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
  // const accordionNames: AccordionNames = ["Teams", "Rounds", "Filters"];
  const settingsBtnNames: SettingsBtnNames = ["Teams", "Rounds", "Filters"];

  const categories: Category[] = [
    {
      id: 1,
      name: "Animals",
    },

    {
      id: 2,
      name: "Food",
    },

    {
      id: 3,
      name: "Professions (Coming Soon)",
    },

    {
      id: 4,
      name: "Musical Instruments (Coming Soon)",
    },

    {
      id: 5,
      name: "Tools (Coming Soon)",
    },
  ];

  const [requestedGameTopics, setRequestedGameTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState<Object>({});

  const createSingleArray = (object: IsCard) => {
    let topicsArray = [];
    for (const key in object) {
      topicsArray.push(...object[key]);
    }
    for (let i = topicsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [topicsArray[i], topicsArray[j]] = [topicsArray[j], topicsArray[i]];
    }
    topicsArray = [...new Set(topicsArray)];
    setRequestedGameTopics(topicsArray);

    return topicsArray;
  };
  console.log("requestedGameTopics =", requestedGameTopics);

  useEffect(() => {
    const fetchData = async () => {
      const topics = await fetcher(buildGetTopicsQuery(gameState));
      createSingleArray(topics);
    };
    if (
      gamePhase === "preTurnCountDown" &&
      gameState.currentRound === 1 &&
      gameState.currentTeamsTurn === 1
    ) {
      fetchData();
    }
  }, [gamePhase]);

  useEffect(() => {
    if (gamePhase === "turn") {
      let topic = null;
      let newArray = [...requestedGameTopics];
      topic = newArray.pop();
      setSelectedTopic(topic);
      setRequestedGameTopics(newArray);
    }
  }, [gamePhase]);
  // console.log("!!! SELECTED TOPIC !!! =", selectedTopic);

  useEffect(() => {
    if (gamePhase === "start") {
      setGameState(initialGameState);
    }
  }, [gamePhase]);

  if (gamePhase === "start") {
    return (
      <View style={styles.mainWrapper}>
        <SafeAreaView style={styles.mainContainer}>
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
        </SafeAreaView>
      </View>
    );
  } else if (gamePhase === "settings") {
    return (
      <View style={styles.mainWrapper}>
        <SafeAreaView style={styles.mainContainer}>
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
        </SafeAreaView>
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
    // console.log(JSON.stringify(gameState, null, 2));

    return (
      <View style={styles.mainWrapper}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.emptyViewContainer}></View>
          <View style={styles.preTurnRoundTextContainer}>
            <View style={styles.preTurnRoundTextWrapper}>
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
        </SafeAreaView>
      </View>
    );
  } else if (gamePhase === "preTurnCountDown") {
    return (
      <View style={styles.mainWrapper}>
        <SafeAreaView style={styles.mainContainer}>
          <PreTurnCounter setGamePhase={setGamePhase} seconds={5} />;
        </SafeAreaView>
      </View>
    );
  } else if (gamePhase === "turn") {
    return (
      <View style={styles.mainWrapper}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.navBarWrapper}>
            <View style={styles.navBarContainer}>
              <Text style={styles.roundText}>
                Round {gameState.currentRound}
              </Text>
              <NavBar
                setGamePhase={setGamePhase}
                seconds={gameState.roundTime}
                gameState={gameState}
                setGameState={setGameState}
              ></NavBar>
            </View>
          </View>
          <View style={styles.cardViewWrapper}>
            <CardView
              gameState={gameState}
              selectedTopic={selectedTopic}
            ></CardView>
          </View>
          <View style={styles.scoreBtnsWrapper}>
            <View style={styles.scoreBtnsContainer}>
              <MissedBtn
                gameState={gameState}
                setGameState={setGameState}
                requestedGameTopics={requestedGameTopics}
                setRequestedGameTopics={setRequestedGameTopics}
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
              />
              <CorrectBtn
                gameState={gameState}
                setGameState={setGameState}
                gamePhase={gamePhase}
                requestedGameTopics={requestedGameTopics}
                setRequestedGameTopics={setRequestedGameTopics}
                setSelectedTopic={setSelectedTopic}
              />
            </View>
            <View style={styles.quitBtnWrapper}>
              <View style={styles.quitBtnContainer}>
                <QuitModal setGamePhase={setGamePhase} gamePhase={gamePhase} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  } else if (gamePhase === "postTurn") {
    return (
      <View style={styles.mainWrapper}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.emptyViewContainer}></View>
          <View style={styles.postTurnMessageContainer}>
            <Text style={styles.postTurnTimesUpText}>Time's Up!</Text>
            <Text style={styles.postTurnTeamScoreText}>
              Team {gameState.currentTeamsTurn} scored{" "}
              {
                gameState.teams[gameState.currentTeamsTurn].roundScores[
                  gameState.currentRound - 1
                ]
              }{" "}
              points
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
        </SafeAreaView>
      </View>
    );
  } else if (gamePhase === "endGame") {
    return (
      <View style={styles.mainWrapper}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.emptyViewContainer}></View>
          <View style={styles.postTurnMessageContainer}>
            <View style={styles.gameOverTextContainer}>
              <Text style={styles.postTurnTimesUpText}>Game Over!</Text>
              <EndGameSummary gameState={gameState}></EndGameSummary>
            </View>
          </View>
          <View style={styles.scoreBtnsWrapper}>
            <View style={styles.quitBtnWrapper}>
              <View style={styles.quitBtnContainer}>
                <QuitModal setGamePhase={setGamePhase} gamePhase={gamePhase} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  mainContainer: {
    height: 932,
    width: 430,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#140029",
    border: "solid #a193d945 8px",
    borderRadius: "15px",
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
    // backgroundColor: "white",
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
    height: "16%",
  },

  preTurnMessageContainer: {
    flex: 0.25,
    // border: "solid black",
    backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "HennyPenny-Regular",
  },

  // preTurnMessageContainer: {
  //   // border: "solid red",
  //   // backgroundColor: "yellow",
  //   flex: 1,
  //   width: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  preTurnMessageText: {
    fontSize: 25,
    color: "#a193d9",
    fontFamily: "HennyPenny-Regular",
  },

  gameOverTextContainer: {
    // border: "solid green",
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  preTurnMessage: {
    backgroundColor: "turquoise",
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  preTurnRoundText: {
    fontFamily: "HennyPenny-Regular",
    color: "white",
    fontSize: 30,
  },

  rankRowWrapper: {
    flex: 1,
    // border: "solid red",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  gameSummaryContainer: {
    // border: "solid yellow",
    // backgroundColor: "pink",
    width: "100%",
    flex: 1,
    alignItems: "center",
  },

  preTurnRoundTextWrapper: {
    flex: 0.5,
    // backgroundColor: 'pink',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  preTurnRoundTextContainer: {
    flex: 1,
    // backgroundColor: "grey",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  roundText: {
    fontFamily: "HennyPenny-Regular",
    fontSize: 30,
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

  navBarWrapper: {
    width: "100%",
    flex: .85,
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    // backgroundColor: "red",
  },

  navBarContainer: {
    width: '100%',
    flex: .55,
    // backgroundColor: 'blue',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingTop: 10,
  },



  cardViewWrapper: {
    // backgroundColor: "orange",
    width: "100%",
    flex: 1,
    // border: "solid pink",
    alignItems: "center",
  },

  // cardViewTextContainer: {
  //   // backgroundColor: 'green',
  //   flex: 0.08,
  //   width: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingTop: 10,
  // },

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
    alignItems: "flex-end",
  },

  quitBtnWrapper: {
    // backgroundColor: "pink",
    flex: 0.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  quitBtnContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: "39%",
    justifyContent: "center",
    alignItems: "center",
  },

  postTurnMessageContainer: {
    flex: 1,
    // backgroundColor: "pink",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  postTurnMessage: {
    flex: 0.5,
    // border: "solid yellow",
  },

  endGameSummaryContainer: {
    flex: 0.5,
    // border: "solid red",
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
