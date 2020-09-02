import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ConvertComma } from "./CommaSeperator";
const CaseIndicator = ({
  number,
  title,
  icon,
  color,
  backgroundColor,
  textColor,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={{ ...styles.screen, backgroundColor: backgroundColor }}>
        <View style={styles.IconContainer}>
          <View
            style={{
              backgroundColor: color,
              borderRadius: 50,
              width: 50,
              height: 50,
              alignItems: "center",
            }}
          >
            <Ionicons name={icon} size={45} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headerTag}>{title}</Text>
            <Text style={{ ...styles.text, color: textColor }}>
              {ConvertComma(number)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CaseIndicator;

const styles = StyleSheet.create({
  screen: {
    elevation: 2,
    marginBottom: 10,
    borderRadius: 5,
  },
  IconContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  textContainer: {
    paddingLeft: 15,
  },
  headerTag: {
    fontSize: 14,
    color: "gray",
    fontWeight: "800",
  },
  text: {
    fontSize: 16,
    fontWeight: "900",
  },
  icon: {
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: "center",
  },
});
