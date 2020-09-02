import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Picker,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import NewCaseIndicator from "../component/NewCaseIndicator";
import Axios from "axios";
const SearchComponent = ({ data, backgroundColor, textColor }) => {
  const [selectedValue, setSelectedValue] = useState(69);
  const [index, setIndex] = useState(69);
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isErr, setErr] = useState(false);
  const [cases, setCases] = useState({
    active: 0,
    recovered: 0,
    deaths: 0,
    cases: 0,
    district: 0,
  });
  const searchHandler = async () => {
    try {
      setLoading(true);
      const { data } = await Axios.get(
        "https://data.nepalcorona.info/api/v1/covid/summary"
      );
      if (data.status) {
        setErr(true);
        setVisible(false);
        setLoading(false);
        return;
      }
      const { district } = data;
      const cases = district.cases.find((e) => e.district === selectedValue);
      const deaths = district.deaths.find((e) => e.district === selectedValue);
      const recovered = district.recovered.find(
        (e) => e.district === selectedValue
      );
      const active = district.active.find((e) => e.district === selectedValue);
      setCases({
        active: active.count,
        recovered: recovered.count,
        deaths: deaths.count,
        cases: cases.count,
        district: cases.district,
      });
      setVisible(true);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
    setLoading(false);
  };
  let Dialog;
  if (isLoading) {
    Dialog = (
      <View style={styles.secContainer}>
        <ActivityIndicator color="#7B6FFF" size="large" />
      </View>
    );
  } else if (!isLoading && isVisible) {
    Dialog = (
      <View style={styles.secContainer}>
        <Text style={styles.text}>
          District:
          <Text style={{ color: "brown", fontWeight: "700" }}>
            {data.find((e) => e.value === cases.district).label}
          </Text>
        </Text>
        <View style={styles.caseContainer}>
          <NewCaseIndicator
            number={cases.recovered}
            title="Recovered"
            icon="user"
            color="#6AB04A"
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
          <NewCaseIndicator
            number={cases.cases}
            title="Cases"
            icon="bells"
            color="#F4C724"
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
          <NewCaseIndicator
            number={cases.active}
            title="Active"
            icon="medicinebox"
            color="#3498DB"
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
          <NewCaseIndicator
            number={cases.deaths}
            title="Deaths"
            icon="deleteuser"
            color="#B83227"
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
        </View>
      </View>
    );
  } else if (!isLoading && isErr) {
    Dialog = (
      <View style={styles.SearchComponent}>
        <Text style={{ fontWeight: "600", fontSize: 16, paddingBottom: 5 }}>
          Something went wrong
        </Text>
        <Button title="Try Again" color="#7B6FFF" onPress={searchHandler} />
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>COVID-19 Info by District Name</Text>
      <View style={styles.boxContainer}>
        <View style={styles.inputBox}>
          <Picker
            selectedValue={selectedValue}
            style={{ width: "100%", height: "100%" }}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
              setIndex(itemIndex);
            }}
          >
            {data.map((e) => (
              <Picker.Item key={e.id} label={e.label} value={e.value} />
            ))}
          </Picker>
        </View>
        <View style={styles.searchIcon}>
          <TouchableOpacity style={{ padding: 10 }} onPress={searchHandler}>
            <FontAwesome name="search" size={24} color={textColor} />
          </TouchableOpacity>
        </View>
      </View>
      {Dialog}
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  inputBox: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 5,
  },
  searchIcon: {
    width: "15%",
    elevation: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    letterSpacing: 0.1,
    fontWeight: "500",
    marginVertical: 5,
    color: "gray",
  },
  caseContainer: {
    justifyContent: "space-between",
  },
  secContainer: {
    elevation: 2,
    backgroundColor: "#ccc",
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: "gray",
    fontSize: 16,
    paddingVertical: 5,
    letterSpacing: 1,
  },
  SearchComponent: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 5,
    elevation: 2,
    borderRadius: 5,
    padding: 5,
  },
});
