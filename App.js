import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Timer from "./timer";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [isWorking, setIsWorking] = useState(true);
  const defaultWorkMinute = 25;
  const defaultRestMinute = 5;
  const defaultSecond = 0;
  const play = require("./assets/outline_play.png");
  const pause = require("./assets/outline_pause.png");

  const runTimer = () => {
    setIsRunning(!isRunning);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.timerView}>
        <Timer
          style={styles}
          initialMinute={isWorking ? defaultWorkMinute : defaultRestMinute}
          initialSeconds={defaultSecond}
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
  buttonView: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    fontSize: 120,
    color: "#fff",
  },
  mainButton: {
    height: 150,
    width: 150,
    flex: 1,
    resizeMode: "contain",
  },
  secondaryButton: {
    height: 50,
    width: 50,
    flex: 0.5,
    resizeMode: "contain",
  },
});
