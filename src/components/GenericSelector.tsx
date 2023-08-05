import { View, Text, Pressable, StyleSheet } from "react-native-web";

const GenericSelector = (props: {
  sectionTitle?: string;
  options: string[] | number[];
  stateFunction: Function;
  stateVariable: string | number;
  optionSelected: Object;
  optionNotSelected: Object;
  sectionTitleTextStyle: Object;
}) => {
  const {
    sectionTitle,
    options,
    stateFunction,
    stateVariable,
    optionSelected,
    optionNotSelected,
    sectionTitleTextStyle,
  } = props;

  return (
    <Pressable style={styles.pressableWrapper}>
      <View style={styles.sectionTitleContainer}>
        <Text style={sectionTitleTextStyle}>{sectionTitle}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <Pressable
            onPress={() => stateFunction(option)}
            // style={stateVariable === option ? <Text style={styles.selectedText}>{option}</Text> : {}}
          >
            <Text
              style={
                stateVariable === option ? optionSelected : optionNotSelected
              }
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableWrapper: {
    flex: 1,
    // backgroundColor: "pink",
    width: '100%',
    justifyContent: 'center',
  },

  sectionTitleContainer: {
    // backgroundColor: 'red',
  },

  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: '100%',
  },
});

export default GenericSelector;
