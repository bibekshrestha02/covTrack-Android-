import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import DateComponent from "../component/DateComponent";
import CaseIndicator from "../component/CaseIndicator";
import NewCaseIndicator from "../component/NewCaseIndicator";
import PieChart from "../component/PieChar";
import { useSelector } from "react-redux";
import SeachComponent from "../component/searchComponent";
import SettingModel from "../component/SettingModel";

const NepalOverViewScreen = () => {
  const { district } = useSelector((state) => state.DistrictData);

  const Colors = useSelector((state) => state.Colors);
  const {
    totalTests,
    active,
    newDeath,
    newCase,
    totalRecovered,
    totalDeath,
    totalCase,
  } = useSelector((state) => state.Nation);
  return (
    <ScrollView
      style={{ ...styles.screen, backgroundColor: Colors.primaryColor }}
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
            number={active}
            title="Active"
            icon="medicinebox"
            color="#3498DB"
            backgroundColor={Colors.secondaryColor}
            textColor={Colors.textColor}
          />
          <View>
            <NewCaseIndicator
              number={newCase}
              title="New Cases"
              icon="bells"
              color="#F4C724"
              backgroundColor={Colors.secondaryColor}
              textColor={Colors.textColor}
            />
            <NewCaseIndicator
              number={newDeath}
              title="New Deaths"
              icon="deleteuser"
              color="#B83227"
              backgroundColor={Colors.secondaryColor}
              textColor={Colors.textColor}
            />
          </View>
        </View>

        <PieChart active={active} death={totalDeath} recverd={totalRecovered} />
        <SeachComponent
          data={district}
          backgroundColor={Colors.secondaryColor}
          textColor={Colors.textColor}
        />
      </View>
    </ScrollView>
  );
};

export default NepalOverViewScreen;

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
