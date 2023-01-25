import { View, Text, TouchableOpacity, Pressable, StyleSheet } from "react-native-web";

const GenericBtn = (props: {
  setStateFunction: Function;
  title: string;
  option: string | boolean;

  
  
}) => {
  const { setStateFunction, title, option } = props;

  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={() => setStateFunction(option)}>
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