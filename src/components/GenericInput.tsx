import {
  View,
  Pressable,
  Text,
  TextInput,
  Switch,
  FlatList,
  StyleSheet,
} from "react-native-web";

const GenericInput = (props: {
  sectionTitle: string;
  setMinYear: Function;
  setMaxYear: Function;
  minYear: number;
  maxYear: number;
}) => {
  const { sectionTitle, setMinYear, setMaxYear, minYear, maxYear } = props;

  return (
    

    <Pressable style={styles.pressable}>
      <View style={styles.yearSectionContainer}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={minYear}
            textContentType={"Min"}
            inputMode={"numeric"}
            keyboardType={"numeric"}
            maxLength={4}
            placeholder={"Min"}
            placeholderTextColor={"#a193d9"}
            onChange={(e) => setMinYear(e.target.value)}
          ></TextInput>
          <Text style={styles.minMax}>-</Text>
          <TextInput
            style={styles.input}
            value={maxYear}
            textContentType={"Max"}
            inputMode={"numeric"}
            keyboardType={"numeric"}
            maxLength={4}
            placeholder={"Max"}
            placeholderTextColor={"#a193d9"}
            onChange={(e) => setMaxYear(e.target.value)}
          ></TextInput>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    // backgroundColor: 'orange',
    flex: 1,
    justifyContent: "center",
  },

  // yearSectionContainer: {
  //   backgroundColor: 'blue',
  //   flex: 1,
  // },

  sectionTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "HennyPenny-Regular",
    // paddingTop: 10,
  },

  inputContainer: {
    flexDirection: "row",
    // marginLeft: 5,
    // marginRight: 5,
    flex: 1,
    padding: 8,
  },

  input: {
    flex: 1,
    width: 5,
    height: 30,
    border: "solid #a193d945",
    borderRadius: 8,
    color: "magenta",
    textAlign: "center",
    fontSize: 16,
  },

  minMax: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
});

export default GenericInput;
