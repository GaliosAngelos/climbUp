import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ButtonBack({onPress}) {
  return (
    <View style={{ position: "absolute" }}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.h2}>Back</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
