import { View, Text, TextInput, Switch, FlatList } from "react-native-web";

const GenericInput = (props: { sectionTitle: string; setMinYear: Function; setMaxYear: Function; minYear: number; maxYear: number; }) => {
  const { sectionTitle, setMinYear, setMaxYear, minYear, maxYear } = props;

  return (
    <View>
      <Text>{sectionTitle}</Text>
      <TextInput value={minYear} textContentType={"Min"} inputMode={"numeric"} maxLength={4} placeholder={"Min"} placeholderTextColor={"gray"} onChange={(e) => setMinYear(e.target.value)}></TextInput>
      <Text>To</Text>
      <TextInput value={maxYear} textContentType={"Max"} inputMode={"numeric"} maxLength={4} placeholder={"Max"} placeholderTextColor={"gray"} onChange={(e) => setMaxYear(e.target.value)}></TextInput>
    </View>
  );
};

export default GenericInput;
