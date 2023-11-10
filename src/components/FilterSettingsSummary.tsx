import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native-web";
import { useEffect } from 'react';
import { GameState } from "../App";
import GameSettings from "./GameSettings";

const FilterSettingsSummary = (props: { gameState: GameState}) => {
  const { gameState } = props;



  useEffect(() => {
    for (let i = 0; i <= gameState.categories.length; i++) {
     let categoryList = {
        name: gameState.categories[i]
      }
    }



  }, [gameState.categories]) 
  
    

  ;




  return (
    <GameSettings>
      <View style={styles.textWrapper}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Age:</Text>
          <Text style={styles.text2}>{gameState.age}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Year:</Text>
          <Text style={styles.text2}>
            {gameState.year.min} - {gameState.year.max}
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text1}>Photo Mode:</Text>
          <Text style={styles.text2}>
            {gameState.photo === true ? "On" : "Off"}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.text1}>Categories:</Text>
          </View>
          <View style={styles.categoriesContainer}>
            <FlatList
              data={gameState}
              renderItem={renderItem}
            />
          </View>
        </View>
      </View>
    </GameSettings>
  );
};

export default FilterSettingsSummary;

const styles = StyleSheet.create({
  textWrapper: {
    // backgroundColor: 'orange',

    
  },

  textContainer: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    flex: 1,
  },

  categoryContainer: {
    backgroundColor: 'purple'
  },



  categoriesContainer: {
    // backgroundColor: 'pink',
    flex: 11,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: 'center',
    flexWrap: 'wrap',
  },

  text1: {
    color: "#a193d9",
    fontSize: 12,
  },

  text2: {
    color: "magenta",
    fontSize: 12,
  },
});
