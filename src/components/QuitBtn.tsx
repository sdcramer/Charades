import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native-web";
import BackArrow from './assets/BackArrow.png';

const QuitBtn = (props: {
  setGamePhase: Function;
  gamePhase: string;
  asset: string;
  accessibilityRole: string;

}) => {
  const { setGamePhase, gamePhase, asset, accessibilityRole } = props;
  console.log("GenricBtn pressed; gamePhase =", gamePhase);

  return (
    <View style={styles.button}>
      <Image
        accessibilityRole={accessibilityRole}
        source={BackArrow}
        onPress={() => setGamePhase(gamePhase)}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2277ee",
    width: "20%",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 35,
  },
});

export default QuitBtn;