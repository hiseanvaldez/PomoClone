import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Timer from "./Timer";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [isWorking, setIsWorking] = useState(true);
  const defaultWorkMinute = 25;
  const defaultRestMinute = 1;
  const defaultSecond = 0;
  const [currentMinute, setCurrentMinute] = useState(
    isWorking ? defaultWorkMinute : defaultRestMinute
  );
  const [currentSecond, setcurrentSecond] = useState(defaultSecond);
  const play = require("./assets/outline_play.png");
  const pause = require("./assets/outline_pause.png");

  const runTimer = () => {
    setIsRunning(!isRunning);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    isWorking
      ? setCurrentMinute(defaultWorkMinute)
      : setCurrentMinute(defaultRestMinute);
    setcurrentSecond(defaultSecond);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.timerView}>
        <Timer
          initialMinute={currentMinute}
          initialSeconds={currentSecond}
          isRunning={isRunning}
          stopTimer={stopTimer}
        />
        <Text style={styles.subText}>
          {isWorking ? "Werk werk werk!" : "Rest play rest!"}
        </Text>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity onPress={runTimer} onLongPress={resetTimer}>
          <Image style={styles.mainButton} source={isRunning ? pause : play} />
        </TouchableOpacity>
        <TouchableOpacity onPress={resetTimer}>
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
    alignItems: "center",
    flexDirection: "column",
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontSize: 60,
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
