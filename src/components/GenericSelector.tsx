import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";

const GenericSelector = (props: { options: string[]; stateFunction: Function; }) => {
  const { options, stateFunction } = props;

  return (
  <View>
    {options.map((option) => (
        <TouchableOpacity onPress={() => stateFunction(option)}>
          <Text style={styles.text}>{option}</Text>
        </TouchableOpacity>
        )
      )
    }
  </View>)
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

export default GenericSelector;
