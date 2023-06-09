import { View, Text, TouchableOpacity, Pressable, StyleSheet } from "react-native-web";

const GenericBtn = (props: {
  setStateFunction: Function;
  title: string;
  option: string | boolean;

  
  
}) => {
  const { setStateFunction, title, option } = props;

  return (
    <View>
      <TouchableOpacity onPress={() => setStateFunction(option)}>
        <Text style={[styles.textColor, styles.textSize]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

 const styles = StyleSheet.create({
   textColor: {
     color: "white",
   },

   textSize: {
     fontSize: 30,
   },
  
 });

export default GenericBtn;