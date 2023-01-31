import { View, Text, Pressable, StyleSheet } from "react-native-web";

const GenericSelector = (props: {
  sectionTitle?: string;
  options: string[] | number[];
  stateFunction: Function;
  stateVariable: string | number;
}) => {
  const { sectionTitle, options, stateFunction, stateVariable } = props;

  return (
    <View style={styles.container}>
      <Text>{sectionTitle}</Text>
      {options.map((option) => (
        <View style={styles.card}>
          <Pressable
            onPress={() => stateFunction(option)}
            style={stateVariable === option ? styles.optionPressed : {}}
          >
            <Text style={styles.text}>{option}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  
  optionPressed: {
    backgroundColor: "red",
  },

});

export default GenericSelector;
