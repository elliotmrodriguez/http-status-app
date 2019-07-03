import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/home-screen";
import DetailScreen from "../screens/detail-screen";
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
