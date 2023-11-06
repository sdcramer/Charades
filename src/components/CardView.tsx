import { View, Image, Text, StyleSheet } from "react-native-web";
import { GameState } from "../App";
import shark2 from "./assets/shark2.png";
import gorilla from "./assets/gorilla.png";
import bee from "./assets/bee.png";
import crocodile from "./assets/crocodile.png";
import camel from "./assets/camel.png";
import chicken from "./assets/chicken.png";
import elephant from "./assets/elephant.png";
import fox from "./assets/fox.png";
import lion from "./assets/lion.png";
// import beaver from './assets/beaver.png';

const CardView = (props: { gameState: GameState; selectedTopic: Object }) => {
  const { selectedTopic, gameState } = props;
  const image_Name = selectedTopic?.image_name;
  const topicText = selectedTopic?.description;

  return (
    <View style={styles.cardViewContainer}>
    {gameState.photo === true ? (
        <>
          <Image
          
            source={`/components/assets/${image_Name}`}
            style={styles.imageStyling}
          ></Image>
          <Text style={styles.cardViewText}>{topicText}</Text>
        </>
      ) : (
        <Text style={styles.cardViewText}>{topicText}</Text>
      )}
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  cardViewContainer: {
    // border: 'solid pink',
    width: "65%",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  imageStyling: {
    border: "solid #a193d945",
    resizeMode: "stretch",
    width: '100%',
    borderRadius: 25,
    flex: .85,
  },

  // cardViewTextContainer: {
  //   // backgroundColor: 'green',
  //   flex: 0.08,
  //   width: "100%",
  //   justifyContent: "center",
  //   alignItems: "",
  //   paddingTop: 10,
  // },

  cardViewText: {
    color: "white",
    fontSize: 25,
    // fontFamily: 'HennyPenny-Regular',
  },
});
