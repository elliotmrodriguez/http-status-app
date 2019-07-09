import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home-screen";
import DetailScreen from "./screens/detail-screen";
import CodeDetailsScreen from "./screens/code-detail-screen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
    CodeDetail: CodeDetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
