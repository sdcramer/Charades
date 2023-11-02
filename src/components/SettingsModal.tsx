import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  StyleSheet,
} from "react-native-web";
import { useState } from "react";
import GenericBtn from "./GenericBtn";

const SettingsModal = (props: {
  settingsBtnName: string;
  mainWrapper: Object;
  modalWrapper: Object;
  modalContainer: Object;
  children: JSX.Element[] | JSX.Element;
}) => {
  const { settingsBtnName, mainWrapper, modalWrapper, modalContainer } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.settingsBtnContainer}
        onPress={() => setIsModalVisible(!isModalVisible)}
      >
        <Text style={styles.settingsBtnText}>{settingsBtnName}</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
        transparent={false}
        statusBarTranslucent={true}
        animationType={"fade"}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          <View style={mainWrapper}>
            <View style={modalWrapper}>
              {/* Option to add explicit button to close modal */}
              {/* <TouchableOpacity
                  onPress={() => setIsModalVisible(!isModalVisible)}
                  >
                  <Text style={styles.modalToggle}>X</Text>
                </TouchableOpacity> */}

              <Pressable style={modalContainer}>{props.children}</Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default SettingsModal;

const styles = StyleSheet.create({
  settingsBtnContainer: {
    backgroundColor: "#5E3AC7",
    height: "85%",
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    // alignItems: "center",
  },

  settingsBtnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
