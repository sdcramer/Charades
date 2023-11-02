import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native-web";

const GenericBtn = (props: {
  setStateFunction: Function;
  title: string;
  option: string | boolean;
 
}) => {
  const { setStateFunction, title, option } = props;

  return (
    <TouchableOpacity
      style={styles.genericBtnContainer}
      onPress={() => {
        setStateFunction(option);      
      }}
    >
      <Text style={styles.genericBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genericBtnContainer: {
    backgroundColor: "#5E3AC7",
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  genericBtnText: {
    fontSize: 18,
    color: "white",
  },
});

export default GenericBtn;
