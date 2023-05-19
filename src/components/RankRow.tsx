import { View, Text, StyleSheet } from 'react-native-web';

const RankRow = (props: { place: number; teamNameorNumber: number; correct: number; attempts: number; msg: string}) => {
  const { place, teamNameorNumber, correct, attempts, msg } = props;

  return (
    <>
      <View>
        <Text>{msg}</Text>
        <Text>{place}</Text>  
        <Text>Team {teamNameorNumber}</Text>
        <Text>{correct} / {attempts}</Text>
      </View>
    
    
    </>
  )

};

export default RankRow;