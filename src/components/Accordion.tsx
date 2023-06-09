import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";

const Accordion = (props: {
  accordionName: string;
  children: JSX.Element[] | JSX.Element;
}) => {
  const { accordionName } = props;
  const [showContent, setShowContent] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setShowContent(!showContent)}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{accordionName}</Text>
        </View>
      </TouchableOpacity>
      {showContent && (
        <View style={styles.dropDownContainer}>{props.children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // accordianContainer: {
  //   backgroundColor: 'red',
  //   justifyContent: 'center',
  //   // flex: 1,
  //   // justifyContent: 'center',
  //   // alignContent: 'center',
  // },

  textContainer: {
    border: 'solid magenta',
  },


  dropDownContainer: {
    border: "solid #a193d945",
    borderRadius: 8,
    flex: 1,
  },

  textStyle: {
    color: "white",
    fontSize: 30,
    backgroundColor: "#5E3AC7",
    width: 180,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Accordion;
