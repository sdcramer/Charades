import { View, Modal, Text, StyleSheet } from "react-native-web";
import { useState } from "react";
import GenericBtn from "./GenericBtn";

const QuitModal = (props: {
  setGamePhase: Function;
}) => {
  const { setGamePhase } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View style={styles.centeredView}>
          <Text>Hi I'm the Modal</Text>
          <View>
            <GenericBtn
              setStateFunction={setIsModalVisible}
              title={"No"}
              option={false}
            ></GenericBtn>
          </View>
          <View>
            <GenericBtn
              setStateFunction={setGamePhase}
              title={"Yes"}
              option={"start"}
            ></GenericBtn>
          </View>
        </View>
      </Modal>
      <GenericBtn
        setStateFunction={setIsModalVisible}
        title={"Back"}
        option={true}
      ></GenericBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "red",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    textColor: "black",
  },
});

export default QuitModal;
