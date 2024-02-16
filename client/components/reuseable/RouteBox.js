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
  routeName,
  Sector,
  levelOfDificulty,
  color,
  lineNumber,
}) {
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
        <View style={expanded ? styles.borderBoxExtended : styles.borderBox}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3, justifyContent: "center" }}>
              <Text style={styles.h3}>{routeName}</Text>
              <Text style={styles.text}>
                Sektor {Sector}, Line {lineNumber}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={[
                  {
                    color: color,
                    textAlign: "left",
                    fontSize: 50,
                    fontWeight: "bold",
                    paddingLeft: 10,
                  },
                ]}
              >
                {levelOfDificulty}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {expanded && (
        <View style={styles.routeExtension}>
          <View style={{ flexDirection: "row" }}>
            <View style={[{ flex: 1 }]}>
              <ButtonMedium text={"Made it."} />
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
