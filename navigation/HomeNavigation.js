import React, { useState, useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constant/Color";
import HeaderButtonComponent from "../component/UI/HeaderButton";
import DashBoardScreen from "../screen/DashboardScreen";
import FqaScreen from "../screen/NewScreen";
import NepalOverViewScreen from "../screen/NepalOverViewScreen";
import { useDispatch } from "react-redux";
import { FetchApiNation } from "../store/action/NationAction";
import { FetchNews } from "../store/action/NewAction";
import { FetchApi } from "../store/action/WorldWideAction";
import { LoadingComp, ErrorComp } from "../component/FetchingComp";
import {
  MaterialIcons,
  FontAwesome,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
const Stack = createStackNavigator();
const Navigator = (props) => {
  const Color = useSelector((state) => state.Colors);

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        title: "CovTrack",
        headerLeft: () => {
          return (
            <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
              <Item
                title="Menu"
                iconName="md-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          );
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: Colors.ancent,
          fontWeight: "bold",
          letterSpacing: 1,
        },
        headerStyle: { backgroundColor: Color.secondaryColor },
      })}
    >
      {props.children}
    </Stack.Navigator>
  );
};

const DashBoard = () => {
  return (
    <Navigator>
      <Stack.Screen
        component={DashBoardScreen}
        name="DashBoard"
        options={{
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                <Item title="Globe" iconName="md-globe" />
              </HeaderButtons>
            );
          },
        }}
      />
    </Navigator>
  );
};
const NepalOverView = () => {
  return (
    <Navigator>
      <Stack.Screen
        component={NepalOverViewScreen}
        name="NepalOverview"
        options={{
          headerRight: () => {
            return (
              <Text
                style={{
                  color: "#CCC",
                  paddingRight: 10,
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                NP
              </Text>
            );
          },
        }}
      />
    </Navigator>
  );
};
const Fqa = () => {
  return (
    <Navigator>
      <Stack.Screen component={FqaScreen} name="FQA" />
    </Navigator>
  );
};
export function HomeNavigation() {
  const Drawer = createDrawerNavigator();
  const Color = useSelector((state) => state.Colors);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.ancent,
          activeBackgroundColor: Color.secondaryColor,
          labelStyle: { fontSize: 16, color: Color.textColor },
        }}
        drawerStyle={{ backgroundColor: Color.primaryColor }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashBoard}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="dashboard"
                size={24}
                color={focused ? Colors.ancent : "gray"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Nepal Over View"
          component={NepalOverView}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name="dashboard"
                size={24}
                color={focused ? Colors.ancent : "gray"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="News of COVID-19"
          component={Fqa}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Entypo
                name="news"
                size={24}
                color={focused ? Colors.ancent : "gray"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setErr] = useState(false);
  const dispatch = useDispatch();

  const loadAsync = useCallback(async () => {
    setIsLoading(true);
    setErr(false);
    try {
      await dispatch(FetchApi());
      await dispatch(FetchApiNation());
      await dispatch(FetchNews());
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErr(true);
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    loadAsync();
  }, [loadAsync]);
  if (isLoading) {
    return <LoadingComp />;
  }
  if (!isLoading && isErr) {
    return <ErrorComp loadAsync={loadAsync} />;
  }

  return <HomeNavigation />;
};
