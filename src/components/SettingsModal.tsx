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


const SettingsModal = (props: {
  settingsBtnName: string;
  mainWrapper: Object;
  modalWrapper: Object;
  modalContainer: Object;
  modalEmptyViewContainer: Object;
  modalPressableWrapper: Object;
  modalDoneBtnWrapper: Object;
  children: JSX.Element[] | JSX.Element;
}) => {
  const { settingsBtnName, mainWrapper, modalWrapper, modalContainer, modalEmptyViewContainer, modalPressableWrapper, modalDoneBtnWrapper } = props;
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
        <View style={mainWrapper}>
          <View style={modalWrapper}>
            {/* <TouchableOpacity
                  onPress={() => setIsModalVisible(!isModalVisible)}
                  >
                  <Text style={styles.modalToggle}>X</Text>
                </TouchableOpacity> */}
            <View style={modalEmptyViewContainer}></View>
            <View style={modalPressableWrapper}>
              <Pressable style={modalContainer}>{props.children}</Pressable>
            </View>
            <View style={modalDoneBtnWrapper}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(!isModalVisible)}
                style={styles.doneBtnContainer}
              >
                <Text style={styles.doneBtnText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SettingsModal;

const styles = StyleSheet.create({


  settingsBtnContainer: {
    backgroundColor: "#5E3AC7",
    height: 40,
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

  doneBtnWrapper: {
    flex: .5,
    // backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  doneBtnContainer: {
    backgroundColor: "#5E3AC7",
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  doneBtnText: {
    fontSize: 18,
    color: "white",
  },
});
