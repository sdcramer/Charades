import {
  View,
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
  );
};

const styles = StyleSheet.create({
  
  yearSectionContainer: {
    marginTop: 20,
  },
  
  
  sectionTitle: {
    marginTop: 3,
    marginBottom: 3,
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontFamily: 'italics',
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
  },

   input: {
    flex: 2,
    width: 5,
    border: "solid #a193d945",
    borderRadius: 8,
    color: "magenta",
     textAlign: 'center',
     fontSize: 14,
    
  },

  minMax: {
    flex: 1,
    textAlign: "center",
    color: "white",
  },
});

export default GenericInput;
