import { useState } from "react";
import Accordion from "./components/TeamsAccordion";
import GenericBtn from "./components/GenericBtn";
import { View, Text, StyleSheet } from "react-native-web";
import TeamsAccordion from "./components/TeamsAccordion";
import RoundsAccordion from "./components/RoundsAccordion";
import FiltersAccordion from "./components/FiltersAccordion";
import PreTurnCounter from "./components/PreTurnCounter";
import NavBar from "./components/NavBar";
import CardView from "./components/CardView";
import QuiteModal from "./components/QuitModal";

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
    age: {
      min: 14,
      max: 55,
    },
    year: {
      min: 1990,
      max: 2000,
    },
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

  /**
   * Age Bracket
   * () kids
   * (o) teens
   * () adults
   *
   * Categories
   * [x] 70's
   * [x] 80's
   * [] 90's
   * [] animals
   * [x] food
   * [] music
   */

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

  const [numOfTeams, setNumOfTeams] = useState<2 | 3 | 4>(2);
  const [numOfRounds, setNumOfRounds] = useState<3 | 5 | 7>(3);
  const [numOfRoundTime, setNumOfRoundTime] = useState<30 | 60 | 90>(30);
  const [ageGroup, setAgeGroup] = useState<"kids" | "teens" | "adults">("kids");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minYear, setMinYear] = useState();
  const [maxYear, setMaxYear] = useState();

  const teamOptions = [2, 3, 4];
  const roundOptions = ["3", "5", "7"];
  const roundTimes = ["3", "30", "60", "90"];
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
  const categories = [
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

  const accordionNames: AccordionNames = ["Teams", "Rounds", "Filters"];

  // const [teamTurn, setTeamTurn] = useState<1 | 2 | 3 | 4>(1);
  // const [currentRound, setCurrentRound] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);

  console.log("numOfTeams =", numOfTeams);
  console.log("numOfRounds =", numOfRounds);
  console.log("numOfRoundTime =", numOfRoundTime);
  console.log("ageGroup =", ageGroup);
  console.log("selectedCategories =", selectedCategories )
  console.log("minYear =", minYear)
  console.log("maxYear =", maxYear)

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
            setNumOfTeams={setNumOfTeams}
            numOfTeams={numOfTeams}
          />
          <RoundsAccordion
            accordionName={accordionNames[1]}
            roundOptions={roundOptions}
            roundTimes={roundTimes}
            setNumOfRounds={setNumOfRounds}
            setNumOfRoundTime={setNumOfRoundTime}
            numOfRounds={numOfRounds}
            numOfRoundTime={numOfRoundTime}
          />
          <FiltersAccordion
            accordionName={accordionNames[2]}
            genericInputNames={genericInputNames}
            genericSelectorNames={genericSelectorNames}
            charadeCards={charadeCards}
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup}
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            option={"Year"}
            minYear={minYear}
            maxYear={maxYear}
            setMinYear={setMinYear}
            setMaxYear={setMaxYear}
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
          <GenericBtn
            setStateFunction={setGamePhase}
            title={genericBtnNames[6]}
            option={"settings"}
          />
          <Text>Team 1's turn</Text>
          <Text>Press Go when ready</Text>
          <GenericBtn
            setStateFunction={setGamePhase}
            title={genericBtnNames[3]}
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
          nextGamePhase={"start"}
          setGamePhase={setGamePhase}
          asset={"./assets/BackArrow.png"}
          role={"imagebutton"}
          genericBtnNames={genericBtnNames}
        />
        <CardView></CardView>
      </>
    );
  }
  // else if (gamePhase === "quit") {
  //   return (
  //     <>
  //       <QuiteModal setGamePhase={setGamePhase} nextGamePhase={"start"} title={genericBtnNames}></QuiteModal>
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

  container2: {
    backgroundColor: "orange",
  },
});

export default App;
