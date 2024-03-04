import { View, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function ButtonBack({ onPress }) {
  return (
    <View style={{ position: "absolute", marginTop: 20 }}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={"arrow-back-outline"} size={30} color={"black"} />
      </TouchableOpacity>
    </View>
  );
}
