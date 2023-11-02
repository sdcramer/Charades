import { View, Text, Pressable, StyleSheet } from "react-native-web";

const GenericSelector = (props: {
  sectionTitle?: string;
  options: string[] | number[];
  stateFunction: Function;
  stateVariable: string | number;
  optionSelected: Object;
  optionNotSelected: Object;
  pressableWrapperStyle: Object;
  sectionTitleStyle: Object;
  sectionTitleTextStyle: Object;
}) => {
  const {
    sectionTitle,
    options,
    stateFunction,
    stateVariable,
    optionSelected,
    optionNotSelected,
    pressableWrapperStyle,
    sectionTitleStyle,
    sectionTitleTextStyle,
  } = props;

  return (
    <Pressable style={pressableWrapperStyle}>
        <View style={sectionTitleStyle}>
      <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionTitleCard}>
            <Text style={sectionTitleTextStyle}>{sectionTitle}</Text>
          </View>
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
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  
 
  sectionTitleContainer: {
    height: "35%",
    width: "100%",
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: "center",
  },

  sectionTitleCard: {
    // backgroundColor: "purple",
    width: '70%',
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
   
  },

  optionsContainer: {
    // backgroundColor: "pink",
    height: "35%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

});

export default GenericSelector;
