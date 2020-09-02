import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>
        Copyright © 2020 Bibek Shrestha. All Rights Reserved.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
  text: {
    color: "gray",
    alignItems: "center",
    fontSize: 10,
  },
});
