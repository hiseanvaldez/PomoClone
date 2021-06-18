import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Timer from "./timer";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const play = require("./assets/outline_play.png");
  const pause = require("./assets/outline_pause.png");

  const runTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.timerView}>
        <Timer
          style={styles}
          initialMinute={15}
          initialSeconds={15}
          isRunning={isRunning}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity>
          <Image
            style={styles.secondaryButton}
            source={require("./assets/outline_stop.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={runTimer}>
          <Image style={styles.mainButton} source={isRunning ? pause : play} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.secondaryButton}
            source={require("./assets/outline_replay.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE2939",
    alignItems: "center",
  },
  timerView: {
    flex: 3,
    justifyContent: "center",
  },
  buttonView: { flex: 1, flexDirection: "row" },
  timer: {
    fontSize: 120,
    color: "#fff",
  },
  mainButton: { height: 150, width: 150 },
  secondaryButton: { height: 50, width: 50 },
});
