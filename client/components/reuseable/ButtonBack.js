import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "../../components/reuseable/allStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function ButtonBack({onPress}) {
  return (
    <View style={{ position: "absolute" }}>
      <TouchableWithoutFeedback onPress={onPress}>
        {/* <Text style={styles.h2}>Back</Text> */}
        <Ionicons name={"arrow-back-outline"} size={30} color={"black"}/>
      </TouchableWithoutFeedback>
    </View>
  );
}
