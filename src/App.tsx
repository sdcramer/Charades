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
import EndGameSummary from "./components/LeaderBoard";
import MissedBtn from "./components/MissedBtn";
import QuitModal from "./components/QuitModal";
import RankRow from "./components/RankRow";
import LeaderBoard from "./components/LeaderBoard";
import Counter from "./components/Counter";

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log("isModalVisible =", isModalVisible);

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
      name: "Musical Instruments",
    },

    {
      id: 7,
      name: "Musical Instruments",
    },

    {
      id: 7,
      name: "Musical Instruments",
    },

    {
      id: 7,
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

  useEffect(() => {
    if (gamePhase === "start") {
      setGameState(initialGameState);
      setIsModalVisible(false);
    }
  }, [gamePhase]);

  if (gamePhase === "start") {
    return (
      <View style={styles.mainWrapper}>
        <Text style={styles.setTitleTextStyle}>Charades</Text>
        <GenericBtn
          setStateFunction={setGamePhase}
          title={genericBtnNames[0]}
          option={"settings"}
        />
      </View>
    );
  } else if (gamePhase === "settings") {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.emptyViewContainer}></View>
        <View style={styles.settingBtnsContainer}>
          <TeamsModal
            settingsBtnName={settingsBtnNames[0]}
            teamOptions={teamOptions}
            gameState={gameState}
            setGameState={setGameState}
          />

          <RoundsModal
            settingsBtnName={settingsBtnNames[1]}
            gameState={gameState}
            setGameState={setGameState}
          />

          <FiltersModal
            settingsBtnName={settingsBtnNames[2]}
            genericInputNames={genericInputNames}
            genericSelectorNames={genericSelectorNames}
            charadeCards={charadeCards}
            categories={categories}
            gameState={gameState}
            setGameState={setGameState}
          />
        </View>
        <View style={styles.btnsWrapper}>
          <View style={styles.btnsContainer}>
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
    return (
      <>
        {isModalVisible ? (
          <QuitModal
            setGamePhase={setGamePhase}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        ) : (
          <View style={styles.mainWrapper}>
            <View style={styles.emptyViewContainer}></View>
            <View style={styles.preTurnMessageContainer}>
              <Text style={styles.preTurnRoundText}>
                Round {gameState.currentRound}
              </Text>
              <Text style={styles.preTurnMessageText}>
                Team {gameState.currentTeamsTurn} get ready!
              </Text>
              {/* <LeaderBoard gameState={gameState}></LeaderBoard> */}
            </View>
            <View style={styles.btnsWrapper}>
              <View style={styles.btnsContainer}>
                {gamePhase === "preTurn" &&
                gameState.currentRound === 1 &&
                gameState.currentTeamsTurn === 1 ? (
                  <>
                    <GenericBtn
                      setStateFunction={setGamePhase}
                      title={"Back"}
                      option={"settings"}
                    />
                  </>
                ) : (
                  <>
                    <GenericBtn
                      setStateFunction={setIsModalVisible}
                      title={"Quit"}
                      option={!isModalVisible}
                    ></GenericBtn>
                  </>
                )}
                <GenericBtn
                  setStateFunction={setGamePhase}
                  title={"Continue"}
                  option={"preTurnCountDown"}
                />
              </View>
            </View>
          </View>
        )}
      </>
    );
  } else if (gamePhase === "preTurnCountDown") {
    return <PreTurnCounter setGamePhase={setGamePhase} seconds={3} />;
  } else if (gamePhase === "turn") {
    return (
      <>
        {isModalVisible ? (
          <QuitModal
            setGamePhase={setGamePhase}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        ) : (
          <View style={styles.mainWrapper}>
            <View style={styles.navBarContainer}>
              <Text style={styles.roundText}>
                Round {gameState.currentRound}
              </Text>
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
              <View style={styles.quitBtnContainer}>
                <GenericBtn
                  setStateFunction={setIsModalVisible}
                  title={"Quit"}
                  option={!isModalVisible}
                ></GenericBtn>
              </View>
            </View>
          </View>
        )}
      </>
    );
  } else if (gamePhase === "postTurn") {
    return (
      <>
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
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#140029",
  },

  setTitleTextStyle: {
    color: "#a193d9",
    fontFamily: "HennyPenny-Regular",
    fontSize: 45,
  },

  emptyViewContainer: {
    flex: 1,
  },

  settingBtnsContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },

  btnsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },

  btnsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },

  preTurnMessageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  preTurnMessageText: {
    fontSize: 20,
    color: "#a193d9",
    fontFamily: "HennyPenny-Regular",
  },

  preTurnRoundText: {
    fontFamily: "HennyPenny-Regular",
    color: "white",
    fontSize: 25,
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
    backgroundColor: "orange",
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
    backgroundColor: "orange",
    flex: 1,
  },

  scoreBtnsWrapper: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
    width: "100%",
  },

  scoreBtnsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    padding: 15,
    alignItems: "center",
  },

  quitBtnContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
