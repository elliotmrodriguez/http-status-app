/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Button,
  SectionList,
  Text
} from "react-native";
import axiosInstance from "./config/axios-instance";
import Markdown from "react-native-easy-markdown";

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();

    this.state = {
      statusCodes: []
    };
  }

  getCodes = () => {
    axiosInstance
      .get("/status-codes/codes/2")
      .then(response => this.generateList(response.data));
  };

  generateList = result => {
    const currentState = this.state.statusCodes;

    result.forEach(item => {
      const data = [];

      data.push(JSON.stringify(item.description));

      currentState.push({
        title: item.code,
        data
      });
    });

    this.setState({
      statusCodes: currentState
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="View All Status Codes" onPress={this.getCodes} />

        <SectionList
          sections={this.state.statusCodes}
          renderSectionHeader={({ section }) => (
            <Text style={styles.SectionHeader}> {section.title} </Text>
          )}
          renderItem={({ item }) => (
            <Markdown>{item.replace(/["\\"]+/g, "")}</Markdown>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 50
  },
  SectionHeader: {
    backgroundColor: "#64B5F6",
    fontSize: 20,
    padding: 5,
    color: "#fff",
    fontWeight: "bold"
  },
  SectionListItemS: {
    fontSize: 16,
    padding: 6,
    color: "#000",
    backgroundColor: "#F5F5F5"
  }
});
