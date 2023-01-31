import {
  View,
  Modal,
  Text,
  StyleSheet,
} from "react-native-web";
import { useState } from "react";
import GenericBtn from "./GenericBtn";

const QuitModal = (props: {
  setGamePhase: Function;
  nextGamePhase: string;
  genericBtnNames: string[];
  setStateFunction?: Function;
  option: string | boolean;
}) => {
  const { setGamePhase, nextGamePhase, genericBtnNames } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(isModalVisible);

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
              title={genericBtnNames[4]}
              option={false}
            ></GenericBtn>
          </View>
          <View>
            <GenericBtn
              setStateFunction={setGamePhase}
              title={genericBtnNames[5]}
              option={nextGamePhase}
            ></GenericBtn>
          </View>
        </View>
      </Modal>
      <GenericBtn
        setStateFunction={setIsModalVisible}
        title={genericBtnNames[6]}
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
