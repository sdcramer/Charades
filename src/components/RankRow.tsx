import { View, Text, StyleSheet } from "react-native-web";

const RankRow = (props: {
  place: number;
  teamNameorNumber: number;
  correct: number;
  attempts: number;
  msg?: string;
}) => {
  const { place, teamNameorNumber, correct, attempts, msg } = props;

  return (
    <>
      {msg ? <Text>{msg}</Text> : ""}
      <View style={styles.rankRowTextContainer}>
        <Text style={styles.rankRowText}>
          <Text>{place}</Text>
        </Text>
        <Text style={styles.rankRowText}>
          <Text>Team {teamNameorNumber} </Text>
        </Text>
        <Text style={styles.rankRowText}>
          <Text>
            {correct} / {attempts}
          </Text>
        </Text>
      </View>
    </>
  );
};

export default RankRow;

const styles = StyleSheet.create({
  rankRowTextContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rankRowText: {
    // border: "solid green",
    flex: 0.25,
    justifyContent: "center",
    textAlign: "center",
    color: "#a193d9",
  },
});
