import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
  Modal,
} from "react-native";
import styles from "../../components/reuseable/allStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonMedium from "../../components/reuseable/ButtonMedium";
import Button from "../../components/reuseable/Button";

export default function Route({
  routename,
  sector,
  levelofdifficulty,
  color,
  linenumber,
}) {
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);
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
        <View style={styles.routeExtension}>
          <View style={{ flexDirection: "row" }}>
            <View style={[{ flex: 1 }]}>
              <ButtonMedium text={"Made it."}/>
            </View>
            <View style={[{ flex: 1 }]}>
              <ButtonMedium text={"Failed."} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => count > 0 && setCount((c) => c - 1)}
            >
              <Text
                style={[styles.h1, { color: count > 0 ? "black" : "gray" }]}
              >
                -
              </Text>
            </TouchableOpacity>

            <Text style={[styles.h1, { paddingHorizontal: 50 }]}>{count}</Text>

            <TouchableOpacity onPress={() => setCount((c) => c + 1)}>
              <Text style={styles.h1}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center" }}>
            <ButtonMedium style={styles.buttonlarge} text="Commit" />
          </View>
        </View>
      )}
    </>
  );
}
