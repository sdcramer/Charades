import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";

const Accordion = (props: {
  accordionName: string;
  children: JSX.Element[] | JSX.Element;
}) => {
  const { accordionName } = props;
  const [showContent, setShowContent] = useState(false);

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <View>
          <TouchableOpacity onPress={() => setShowContent(!showContent)}>
            <View>
              <Text>{accordionName}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {showContent && <View>{props.children}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "red",
    width: "30%",
  },

  container2: {
    backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  container3: {},
});

export default Accordion;
