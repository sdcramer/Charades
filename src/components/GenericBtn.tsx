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
      <TouchableOpacity onPress={() => {
        setStateFunction(option) 
      }}>
    <View style={styles.genericBtn}>
        <Text style={[styles.textColor, styles.textSize]}>{title}</Text>
    </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "white",
  },

  textSize: {
    fontSize: 18,
  },

  genericBtn: {
    backgroundColor: "#5E3AC7",
    width: 90,
    height: 25,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default GenericBtn;
