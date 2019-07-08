import React, { Component } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import { Container, Header, Content, Accordion, Title } from "native-base";

import Markdown from "react-native-easy-markdown";

export default class StatusCodesList extends Component {
  renderContent = item => {
    return (
      <Markdown style={{ padding: 10 }}>
        {item.content.toString().replace(/["\\"]+/g, "")}
      </Markdown>
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
