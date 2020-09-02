import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constant/Color";
const DateComponent = ({ date, title }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.TextContainer}>
        Last Update:
        <Text style={styles.text}>{new Date().toDateString()}</Text>
      </Text>
    </View>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  TextContainer: {
    color: "gray",
    padding: 2,
    letterSpacing: 0.5,
    fontSize: 10,
  },
  text: {
    color: Colors.ancent,
    fontWeight: "bold",
  },
});
