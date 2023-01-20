import { View, Image } from "react-native-web";
import Placeholder from "./assets/placeholder.png";

const CardView = () => {
  return (
    <View>
      <Image source={Placeholder}></Image>
    </View>
  );
};

export default CardView;
