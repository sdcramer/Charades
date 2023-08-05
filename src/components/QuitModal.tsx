import { View, Modal, Text, StyleSheet, Pressable } from "react-native-web";
import { useState } from "react";
import GenericBtn from "./GenericBtn";

const QuitModal = (props: { setGamePhase: Function; isModalVisible: boolean; setIsModalVisible: Function;  }) => {
  const { setGamePhase, isModalVisible, setIsModalVisible } = props;



  return (
    <>
      <Modal
        animationType={"fade"}
        visible={isModalVisible}
        presentationStyle={"formSheet"}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View style={styles.quitModalWrapper}>
          <View style={styles.quitTextWrapper}>
            <View style={styles.quitTextContainer}>
              <Text style={styles.quitText}>Quit game?</Text>
            </View>
            <View style={styles.noYesBtnContainer}>
              <View style={styles.noBtn}>
                <GenericBtn
                  setStateFunction={setIsModalVisible}
                  title={"No"}
                  option={false}
                ></GenericBtn>
              </View>
              <View style={styles.yesBtn}>
                <GenericBtn
                  setStateFunction={setGamePhase}
                  title={"Yes"}
                  option={"start"}
                ></GenericBtn>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  quitModalWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#140029",
    padding: 40,
  },

  quitTextWrapper: {
    alignItems: "center",
    alignContent: "space-evenly",
    justifyContent: "center",
    border: "solid #a193d945",
    borderRadius: 25,
    padding: 40,
  },

  quitTextContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20,
  },

  quitText: {
    fontFamily: "HennyPenny-Regular",
    color: "#a193d9",
    fontSize: 35,
  },

  noYesBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },

  noBtn: {
    backgroundColor: "#5E3AC7",
    width: 80,
    alignItems: "center",
    borderRadius: 10,
    textColor: "white",
  },

  yesBtn: {
    backgroundColor: "#5E3AC7",
    width: 80,
    alignItems: "center",
    borderRadius: 10,
    textColor: "white",
  },
});

export default QuitModal;
