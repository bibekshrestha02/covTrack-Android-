import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ConvertComma } from "./CommaSeperator";
const RenderItem = ({
  country,
  cases,
  backgroundColor,
  textColor,
  todayCases,
  recovered,
  active,
  deaths,
  todayDeaths,
  critical,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ ...styles.DataContainer, backgroundColor: backgroundColor }}
    >
      <Text style={{ ...styles.text1 }}>{country}</Text>

      <Text style={{ ...styles.text }}>
        Cases:
        <Text style={{ ...styles.number, color: textColor }}>
          {" "}
          {!cases ? 0 : cases}
        </Text>
      </Text>
      <Text style={{ ...styles.text }}>
        Today Cases:
        <Text style={{ ...styles.number, color: textColor }}>
          {" "}
          {!todayCases ? 0 : todayCases}
        </Text>
      </Text>
      <Text style={{ ...styles.text }}>
        Active:
        <Text style={{ ...styles.number, color: textColor }}>
          {" "}
          {!active ? 0 : active}
        </Text>
      </Text>
      <Text style={{ ...styles.text }}>
        Deaths:
        <Text style={{ ...styles.number, color: textColor }}> {deaths}</Text>
      </Text>
      <Text style={{ ...styles.text }}>
        Today Deaths:
        <Text style={{ ...styles.number, color: textColor }}>
          {" "}
          {!todayDeaths ? 0 : todayDeaths}
        </Text>
      </Text>
      <Text style={{ ...styles.text }}>
        Recovered:
        <Text style={{ ...styles.number, color: textColor }}> {recovered}</Text>
      </Text>
      <Text style={{ ...styles.text }}>
        Critical:
        <Text style={{ ...styles.number, color: textColor }}> {critical}</Text>
      </Text>
    </TouchableOpacity>
  );
};
const ByCountryData = ({ data, title, backgroundColor, textColor }) => {
  return (
    <View style={styles.screen}>
      <Text style={{ ...styles.title, color: "gray" }}>{title}</Text>
      {data.map((item) => {
        return (
          <RenderItem
            key={item.id}
            country={item.country}
            cases={ConvertComma(!item.cases ? 0 : ConvertComma(item.cases))}
            todayCases={!item.todayCases ? 0 : ConvertComma(item.todayCases)}
            deaths={!item.deaths ? 0 : ConvertComma(item.deaths)}
            todayDeaths={!item.todayDeaths ? 0 : ConvertComma(item.todayDeaths)}
            recovered={!item.recovered ? 0 : ConvertComma(item.recovered)}
            critical={!item.critical ? 0 : ConvertComma(item.critical)}
            active={!item.active ? 0 : ConvertComma(item.active)}
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
        );
      })}
    </View>
  );
};

export default ByCountryData;

const styles = StyleSheet.create({
  screen: {
    marginBottom: 20,
  },
  DataContainer: {
    marginVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  text: {
    color: "#616C6F",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 5,
    paddingVertical: 5,
  },
  text1: {
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 1,
    marginVertical: 2,
    color: "#616C6F",
  },
  number: {
    fontWeight: "500",
    letterSpacing: 1,
  },
});
