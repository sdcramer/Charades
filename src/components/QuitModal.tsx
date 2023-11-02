import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native-web";
import { useState, useEffect } from "react";
import GenericBtn from "./GenericBtn";

const QuitModal = (props: { setGamePhase: Function; gamePhase: string }) => {
  const { setGamePhase, gamePhase } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (gamePhase === "start") {
      setIsModalVisible(false);
    }
  }, [gamePhase]);

  return (
    <>
      <GenericBtn
        setStateFunction={setIsModalVisible}
        option={!isModalVisible}
        title={"Quit"}
      ></GenericBtn>
      <Modal
        animationType={"fade"}
        visible={isModalVisible}
        presentationStyle={"formSheet"}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View style={styles.quitModalMainWrapper}>
          <View style={styles.quitModalMainContainer}>
            <View style={styles.quitTextWrapper}>
              <View style={styles.quitTextCard}>
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
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  quitModalMainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  quitModalMainContainer: {
    height: 932,
    width: 430,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#140029",
    border: "solid #a193d945 8px",
    borderRadius: "15px",
  },

  quitTextWrapper: {
    // backgroundColor: "blue",
    flex: 0.35,
    width: 300,
    alignItems: "center",
    alignContent: "space-evenly",
    justifyContent: "center",
    border: ".25rem solid #a193d945",
    borderRadius: 25,
  },

  quitTextCard: {
    flex: 0.7,
    // backgroundColor: 'yellow',
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  quitTextContainer: {
    flex: 0.4,
    width: "100%",
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  quitText: {
    fontFamily: "HennyPenny-Regular",
    color: "#a193d9",
    fontSize: 35,
  },

  noYesBtnContainer: {
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "23%",
  },

  noBtn: {
    // backgroundColor: "#5E3AC7",
    height: "95%",
    width: 80,
    alignItems: "center",
    borderRadius: 10,
    textColor: "white",
  },

  yesBtn: {
    // backgroundColor: "#5E3AC7",
    height: "95%",
    width: 80,
    alignItems: "center",
    borderRadius: 10,
    textColor: "white",
  },
});

export default QuitModal;
