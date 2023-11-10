import { View, Text, StyleSheet } from "react-native-web";

const GameSettings = (props: { children: JSX.Element[] | JSX.Element }) => {

  return <>{props.children}</>;
};

export default GameSettings;

const styles = StyleSheet.create({

//   childrenWrapper: {
//     backgroundColor: 'pink',
//     width: '50%',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
// }

})