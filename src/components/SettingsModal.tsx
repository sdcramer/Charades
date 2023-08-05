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
  modalWrapper: Object;
  modalContainer: Object;
  children: JSX.Element[] | JSX.Element;
}) => {
  const { settingsBtnName, modalWrapper, modalContainer } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
        <View style={styles.settingsBtn}>
          <Text style={styles.settingsBtnText}>{settingsBtnName}</Text>
        </View>
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
          <View style={modalWrapper}>
            {/* Option to add explicit button to close modal */}
            {/* <TouchableOpacity
                  onPress={() => setIsModalVisible(!isModalVisible)}
                  >
                  <Text style={styles.modalToggle}>X</Text>
                </TouchableOpacity> */}

            <Pressable style={modalContainer}>{props.children}</Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default SettingsModal;

const styles = StyleSheet.create({
 
  settingsBtn: {
    backgroundColor: "#5E3AC7",
    width: 135,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  settingsBtnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
