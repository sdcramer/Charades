import {
  View,
  TextInput,
  Keyboard,
  Button,
  FlatList,
  Text,
} from "react-native-web";

const SearchBar = (props: { charadeCards: {id: number, category: string, photo: boolean, title: string, age: number}[] }) => {
  const { charadeCards } = props;

  return (
    <View>
      <TextInput></TextInput>
    </View>
  );
};

export default SearchBar;
