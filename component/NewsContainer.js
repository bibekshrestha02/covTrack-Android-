import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import Linking from "expo-linking";
import Color from "../constant/Color";
const NewsContainer = ({
  image,
  title,
  date,
  summary,
  url,
  backgroundColor,
  textColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => {
    return setIsOpen((e) => !e);
  };
  return (
    <View style={styles.textContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ ...styles.container, backgroundColor: backgroundColor }}
        onPress={modalHandler}
      >
        <View style={{ width: "20%" }}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={{ width: "70%" }}>
          <Text
            numberOfLines={3}
            style={{ ...styles.titleSumery, color: textColor }}
          >
            {title}
          </Text>
          <Text style={styles.date}>{new Date(date).toDateString()}</Text>
        </View>
        <TouchableOpacity
          style={{ width: "10%", alignItems: "center" }}
          onPress={modalHandler}
        >
          <AntDesign name="caretdown" size={16} color={Color.ancent} />
        </TouchableOpacity>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.summary}>
          <Text style={styles.summaryText} numberOfLines={10}>
            {summary}
          </Text>
          <View style={{ flexDirection: "row", overflow: "hidden" }}>
            <Text style={{ color: "gray" }}>More:</Text>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Text style={styles.linkUrl} numberOfLines={1}>
                {url}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default NewsContainer;
const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  image: {
    width: "95%",
    height: 50,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 2,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  summary: {
    backgroundColor: "#CCC",
    borderBottomEndRadius: 5,
    padding: 5,
  },
  summaryText: {
    fontSize: 14,
    fontWeight: "100",
    letterSpacing: 0.4,
  },
  titleSumery: {
    fontWeight: "600",
    fontSize: 16,
  },
  date: {
    color: "gray",
    fontSize: 10,
  },
  linkUrl: {
    color: "blue",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
