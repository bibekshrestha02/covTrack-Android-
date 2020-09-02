import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import Colors from "../constant/Color";
import { color } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { color1, color2, color3, color4 } from "../store/action/ColorAction";
const SettingModel = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const modalHanlder = () => {
    return setOpen((e) => !e);
  };
  return (
    <View style={{}}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Ionicons
            name="md-settings"
            size={30}
            color="white"
            onPress={modalHanlder}
          />
        </View>
      </TouchableOpacity>
      <Modal visible={isOpen} animationType={"fade"} transparent={true}>
        <TouchableWithoutFeedback onPress={modalHanlder}>
          <View style={styles.modalContainer}>
            <View style={styles.modalText}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "700",
                    letterSpacing: 1,
                  }}
                >
                  Background Color
                </Text>
                <AntDesign
                  name="close"
                  size={24}
                  color="#CCC"
                  onPress={modalHanlder}
                />
              </View>
              <View style={styles.colorContainer}>
                <View style={styles.color1}>
                  <Entypo
                    name="circle"
                    size={30}
                    color="white"
                    onPress={() => dispatch(color1())}
                  />
                </View>
                <View style={styles.color2}>
                  <Entypo
                    name="circle"
                    size={30}
                    color="#32305F"
                    onPress={() => dispatch(color2())}
                  />
                </View>
                <View style={styles.color3}>
                  <Entypo
                    name="circle"
                    size={30}
                    color="#30243D"
                    onPress={() => dispatch(color3())}
                  />
                </View>
                <View style={styles.color4}>
                  <Entypo
                    name="circle"
                    size={30}
                    color="#193549"
                    onPress={() => dispatch(color4())}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default SettingModel;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.ancent,
    padding: 5,
    alignItems: "center",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  modalContainer: {
    height: 10,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    width: Dimensions.get("screen").width / 1.2,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  color: {
    width: 30,
    height: 30,
    elevation: 10,
  },
  color1: {
    ...color,
    borderRadius: 90,
    backgroundColor: "white",
  },
  color2: {
    ...color,
    borderRadius: 90,
    backgroundColor: "#32305F",
  },
  color3: {
    ...color,
    borderRadius: 90,
    backgroundColor: "#30243D",
  },
  color4: {
    ...color,
    borderRadius: 90,
    backgroundColor: "#193549",
  },
});
