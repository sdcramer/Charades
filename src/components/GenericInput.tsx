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
      <View style={styles.sectionWrapper}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        </View>
        <View style={styles.inputWrapper}>
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
            />
          </View>
          <View>
            <Text style={styles.minMax}>-</Text>
          </View>

          <View style={styles.inputContainer}>
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
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    // backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionWrapper: {
    flex: 0.6,
    width: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionContainer: {
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: "35%",
    width: "100%",
  },

  sectionTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "HennyPenny-Regular",
  },

  inputWrapper: {
    width: "90%",
    height: "42%",
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputContainer: {
    // backgroundColor: 'green',
    height: "100%",
  },

  input: {
    width: 70,
    height: "100%",
    border: ".18rem solid #a193d945",
    borderRadius: 8,
    color: "magenta",
    textAlign: "center",
    fontSize: 12,
  },

  // minMaxContainer: {
  //   backgroundColor: 'magenta',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100%',
  // },

  minMax: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 18,
  },
});

export default GenericInput;
