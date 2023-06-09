import { View, Text, Pressable, StyleSheet } from "react-native-web";

const GenericSelector = (props: {
  sectionTitle?: string;
  options: string[] | number[];
  stateFunction: Function;
  stateVariable: string | number;
}) => {
  const { sectionTitle, options, stateFunction, stateVariable } = props;

  return (
    <>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <Pressable
            onPress={() => stateFunction(option)}
            // style={stateVariable === option ? <Text style={styles.selectedText}>{option}</Text> : {}}
          >
            <Text
              style={
                stateVariable === option ? styles.selectedOptionText : styles.optionText
              }
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  // dropDownContainer: {
  //  flex: 1,
  //   marginTop: 5,
  //   marginBottom: 5,
  //   backgroundColor: 'green',
  // },

  optionsContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    
  },

  optionText: {
    color: "#a193d9",
    fontSize: 16,
  },

  selectedOptionText: {
    color: "magenta",
    fontSize: 16,
  },

  sectionTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontFamily: 'italics',
    marginBottom: 0,
    marginTop: 0,
  },
});

export default GenericSelector;
