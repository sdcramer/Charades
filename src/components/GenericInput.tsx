import { View, Text, TextInput, Switch, FlatList } from "react-native-web";

const GenericInput = (props: { options: string[] }) => {
  const { options } = props;

  return (
    <View>
      {options.map((option) => (
        <View>
          <Text>{option}</Text>
          <TextInput textContentType={"Min " + option}></TextInput>
          <TextInput textContentType={"Max " + option}></TextInput>
        </View>
      ))};
    </View>
  );
};

export default GenericInput;
