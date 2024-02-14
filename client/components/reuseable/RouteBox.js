import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function Route({
  routename,
  sector,
  levelofdifficulty,
  color,
  linenumber,
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {expanded && (
        <View style={styles.routeExtension}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text>success</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>naaaahh</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>fuck u bitch</Text>
            </View>
          </View>
        </View>
      )}
      <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
        <View style={expanded ? styles.borderBoxExtended : styles.borderBox}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
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
    </>
  );
}
