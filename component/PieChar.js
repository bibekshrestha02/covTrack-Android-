import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
const PieChar = ({ active, death, recverd }) => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = [
    {
      name: "Recovered",
      value: recverd,
      color: "#20C997",
      legendFontColor: "#20C997",
      legendFontSize: 15,
    },
    {
      name: "Death",
      value: death,
      color: "#E71C23",
      legendFontColor: "#E71C23",
      legendFontSize: 15,
    },
    {
      name: "Active",
      value: active,
      color: "#7B6FFF",
      legendFontColor: "#7B6FFF",
      legendFontSize: 15,
    },
  ];
  return (
    <PieChart
      data={data}
      width={Dimensions.get("screen").width}
      height={220}
      chartConfig={chartConfig}
      accessor="value"
      backgroundColor="transparent"
      hasLegend={true}
      absolute={false}
    />
  );
};

export default PieChar;

const styles = StyleSheet.create({});
