import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ButtonBack() {
  return (
    <View style={{ position: "absolute" }}>
      <TouchableWithoutFeedback>
        <Text style={styles.h2}>Back</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
