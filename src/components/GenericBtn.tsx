import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";

const GenericBtn = (props: {
  setGamePhase: Function;
  title: string;
  gamePhase: string;
  
}) => {
  const { setGamePhase, title, gamePhase } = props;
  console.log("GenricBtn pressed; gamePhase =", gamePhase);

  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={() => setGamePhase(gamePhase)}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
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

export default GenericBtn;