import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import DateComponent from "../component/DateComponent";
import CaseIndicator from "../component/CaseIndicator";
import NewCaseIndicator from "../component/NewCaseIndicator";
import PieChart from "../component/PieChar";
import { useSelector } from "react-redux";
import CountryDataCom from "../component/ByCountryData";
import Footer from "../component/Footer";
import SettingModel from "../component/SettingModel";
const Dashboard = () => {
  const {
    totalCase,
    totalDeath,
    totalRecovered,
    newCase,
    newDeath,
    critical,
    countryData,
    active,
  } = useSelector((state) => state.worldWideData);
  const Colors = useSelector((state) => state.Colors);

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ ...styles.screen, backgroundColor: Colors.primaryColor }}
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
      <View style={styles.container}>
        <DateComponent date="2075-6-5" title="world wide overview" />
        <CaseIndicator
          number={totalCase}
          title="Total Cases"
          icon="ios-people"
          color="#0A79DF"
          backgroundColor={Colors.secondaryColor}
          textColor={Colors.textColor}
        />
        <CaseIndicator
          number={totalDeath}
          title="Total Death"
          icon="md-bed"
          color="#E71C23"
          backgroundColor={Colors.secondaryColor}
          textColor={Colors.textColor}
        />
        <CaseIndicator
          number={totalRecovered}
          title="Total Recovered"
          icon="md-man"
          color="#6AB04A"
          backgroundColor={Colors.secondaryColor}
          textColor={Colors.textColor}
        />
        <View style={styles.todayContainer}>
          <NewCaseIndicator
            number={critical}
            title="Critical"
            icon="medicinebox"
            color="#3498DB"
            backgroundColor={Colors.secondaryColor}
            textColor={Colors.textColor}
          />
          <View>
            <NewCaseIndicator
              number={newCase}
              title="Today Cases"
              icon="bells"
              color="#F4C724"
              backgroundColor={Colors.secondaryColor}
              textColor={Colors.textColor}
            />
            <NewCaseIndicator
              number={newDeath}
              title="Today Deaths"
              icon="deleteuser"
              color="#B83227"
              backgroundColor={Colors.secondaryColor}
              textColor={Colors.textColor}
            />
          </View>
        </View>
        <PieChart active={active} death={totalDeath} recverd={totalRecovered} />

        <CountryDataCom
          title="TOP COVID-19 AFFECTED COUNTRIES"
          data={countryData}
          backgroundColor={Colors.secondaryColor}
          textColor={Colors.textColor}
        />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
  todayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
