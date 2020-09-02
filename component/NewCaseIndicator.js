import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name={icon} size={30} color="white" />
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
    minWidth: Dimensions.get("screen").width / 2.4,
  },
  IconContainer: {
    flexDirection: "row",
    paddingVertical: 7,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textContainer: {
    paddingLeft: 10,
  },
  headerTag: {
    fontSize: 12,
    color: "gray",
    fontWeight: "800",
  },
  text: {
    fontSize: 15,
    fontWeight: "900",
  },
  icon: {
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: "center",
  },
});
