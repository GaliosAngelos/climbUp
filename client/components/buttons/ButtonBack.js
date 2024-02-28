import { View, TouchableWithoutFeedback } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function ButtonBack({ onPress }) {
  return (
    <View style={{ position: "absolute" }}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Ionicons name={"arrow-back-outline"} size={30} color={"black"} />
      </TouchableWithoutFeedback>
    </View>
  );
}
