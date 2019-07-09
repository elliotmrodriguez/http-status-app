import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Container,
  Header,
  Content,
  Accordion,
  Title,
  Button
} from "native-base";

import Markdown from "react-native-easy-markdown";

export default class StatusCodesList extends Component {
  handleReadMorePress = e => {
    this.props.onReadMorePress(e);
  };

  renderContent = item => {
    const { title, content } = item;
    const arrayOfContent = content.toString().split(" ");
    const statusCode = title.toString().split(" ")[0];
    const hackTruncation = arrayOfContent.slice(0, 10).join(" ") + "...";

    return (
      <View style={{ padding: 10 }}>
        <Markdown>{hackTruncation.replace(/["\\"]+/g, "")}</Markdown>
        <Button
          transparent
          onPress={() => this.handleReadMorePress(statusCode)}
        >
          <Text style={{ color: "blue" }}>Read More...</Text>
        </Button>
      </View>
    );
  };

  render() {
    const { codesToRender, headerItem, headerStyle } = this.props;

    // HACK
    const hackArray = codesToRender.slice(1);
    return (
      <Container>
        <Header>
          <Title
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: headerStyle
            }}
          >
            {headerItem}
          </Title>
        </Header>
        <Content padder>
          <Accordion
            dataArray={hackArray}
            expanded={0}
            renderContent={this.renderContent}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
