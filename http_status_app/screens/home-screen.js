import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Button, Icon, Text } from "native-base";

export default class HomeScreen extends Component {
  navigate = id => {
    this.props.navigation.navigate("Details", {
      id
    });
  };
  render() {
    return (
      <Container>
        <Header>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            HTTP Status Codes
          </Text>
        </Header>
        <Content padder>
          <Button
            iconLeft
            block
            light
            onPress={() => this.navigate(1)}
            style={{ marginBottom: 10, borderColor: "black", borderWidth: 1 }}
          >
            <Icon
              name="ios-information-circle-outline"
              style={{ color: "blue" }}
            />
            <Text>1xx Codes</Text>
          </Button>
          <Button
            iconLeft
            block
            light
            onPress={() => this.navigate(2)}
            style={{ marginBottom: 10, borderColor: "black", borderWidth: 1 }}
          >
            <Icon
              name="ios-checkmark-circle-outline"
              style={{ color: "green" }}
            />
            <Text>2xx Codes</Text>
          </Button>
          <Button
            iconLeft
            block
            light
            onPress={() => this.navigate(3)}
            style={{ marginBottom: 10, borderColor: "black", borderWidth: 1 }}
          >
            <Icon type="SimpleLineIcons" name="directions" />
            <Text>3xx Codes</Text>
          </Button>
          <Button
            iconLeft
            block
            light
            onPress={() => this.navigate(4)}
            style={{ marginBottom: 10, borderColor: "black", borderWidth: 1 }}
          >
            <Icon
              type="SimpleLineIcons"
              name="question"
              style={{ color: "orange" }}
            />
            <Text>4xx Codes</Text>
          </Button>
          <Button
            iconLeft
            block
            light
            onPress={() => this.navigate(5)}
            style={{ marginBottom: 10, borderColor: "black", borderWidth: 1 }}
          >
            <Icon
              type="Feather"
              name="alert-triangle"
              style={{ color: "red" }}
            />
            <Text>5xx Codes</Text>
          </Button>
        </Content>
      </Container>
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
  }
});
