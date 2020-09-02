import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from "react-native";

export const LoadingComp = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color="#7B6FFF" />
    </View>
  );
};
export const ErrorComp = ({ loadAsync }) => {
  return (
    <View style={styles.screen}>
      <Text style={{ fontWeight: "700", fontSize: 16 }}>Network Error</Text>
      <Button title="Try again" color="#7B6FFF" onPress={loadAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
