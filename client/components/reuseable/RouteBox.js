
import React, {useState} from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../components/reuseable/Button.js"

export default function Route({ routename, sector, levelofdifficulty, color, linenumber }) {
    const [expanded, setExpanded] = useState(false);
    return (
      <>
        <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
          <View style={expanded ? styles.borderBoxExtended : styles.borderBox}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 3, justifyContent: "center" }}>
                <Text style={styles.h3}>{routename}</Text>
                <Text style={styles.text}>
                  Sektor {sector}, Line {linenumber}
                </Text>
              </View>
  
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.numberbig,
                    { color: color, textAlign: "center" },
                  ]}
                >
                  {levelofdifficulty}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
  
        {expanded && (
          <View style={[styles.routeExtension, {flexDirection: "row", justifyContent: "center"}]}>
              <View style={{ flex: 1 }}>
              <Button text={"Made it."}/>
              </View>
              <View style={{ flex: 1 }}>
              <Button text={"Made it."}/>
              </View>
              <View style={{ flex: 1 }}>
              <Button text={"Made it."}/>
            </View>
          </View>
        )}
    </>
  );
}
