import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable
} from "react-native-web";
import { useState } from "react";
import GenericBtn from "./GenericBtn";

const QuitModal = (props: {
  setGamePhase: Function;
  nextGamePhase: string;
  title: string[];
  isModalVisible: boolean;
  setIsModalVisible: Function;
}) => {
  const { setGamePhase, nextGamePhase, title } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(isModalVisible);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible) }
      >
        <View style={styles.centeredView}>
          <Text>Hi I'm the Modal</Text>
          <View>
            <Pressable onPress={() => setIsModalVisible(false)}>
              <Text style={styles.modalText}>NO</Text>
            </Pressable>
          </View>
          <View>
            <Pressable onPress={() => setGamePhase(nextGamePhase)}>
              <Text style={styles.modalText}>YES</Text>
            </Pressable>
          </View>
          {/* <GenericBtn
            setStateFunction={setIsModalVisible}
            option={nextGamePhase}
            title={title[4]}
          ></GenericBtn>
          <GenericBtn
            setStateFunction={setGamePhase}
            option={false}
            title={title[5]}
          ></GenericBtn> */}
        </View>
      </Modal>
      <GenericBtn setStateFunction={setIsModalVisible} title={title[7]} option={true}>
      </GenericBtn>
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
    textAlign: 'center',
    textColor: 'black',
  }

});

export default QuitModal;
