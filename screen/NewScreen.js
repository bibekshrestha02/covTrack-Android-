import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import SettingModel from "../component/SettingModel";
import RenderItem from "../component/NewsContainer";
import Footer from "../component/Footer";

const FqaScreen = () => {
  const { news } = useSelector((state) => state.NewsData);
  const { primaryColor, textColor, secondaryColor } = useSelector(
    (state) => state.Colors
  );

  return (
    <ScrollView
      style={{ ...styles.screen, backgroundColor: primaryColor }}
      stickyHeaderIndices={[0]}
    >
      <View
        style={{
          position: "absolute",
          top: Dimensions.get("screen").height / 4,
          alignSelf: "flex-end",
        }}
      >
        <SettingModel />
      </View>
      <Text style={{ ...styles.title, color: textColor }}>
        COVID-19 latest News
      </Text>
      {news.map((item) => {
        return (
          <RenderItem
            key={item._id}
            title={item.title}
            date={item.date}
            image={item.image}
            summary={item.summary}
            url={item.url}
            backgroundColor={secondaryColor}
            textColor={textColor}
          />
        );
      })}

      <Footer />
    </ScrollView>
  );
};

export default FqaScreen;

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
