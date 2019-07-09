import React, { Component } from "react";
import axiosInstance from "../config/axios-instance";
import axios from "axios";
import Markdown from "react-native-easy-markdown";
import btoa from "btoa";
import { Image, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

global.Buffer = global.Buffer || require("buffer").Buffer;

if (typeof btoa === "undefined") {
  global.btoa = function(str) {
    return new Buffer(str, "binary").toString("base64");
  };
}

if (typeof atob === "undefined") {
  global.atob = function(b64Encoded) {
    return new Buffer(b64Encoded, "base64").toString("binary");
  };
}
export default class CodeDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeDetails: "",
      imageUri: ""
    };
  }

  displayContent = content => {
    this.setState({
      codeDetails: content[0]
    });
  };

  getStatusCodeDetails = code => {
    axiosInstance
      .get(`/status-codes/${code}`)
      .then(response => this.displayContent(response.data));
  };

  getCat = code => {
    axios
      .get(`https://community-http-status-cats.p.rapidapi.com/${code}`, {
        responseType: "arraybuffer",
        encoding: "binary",
        headers: {
          "X-RapidAPI-Host": "community-http-status-cats.p.rapidapi.com",
          "X-RAPIDAPI-KEY": ""
        }
      })
      .then(resp => {
        var img = new Buffer(resp.data, "binary").toString("base64");

        let mimetype = "image/jpeg";
        this.setState({
          imageUri: "data:" + mimetype + ";base64," + img
        });
      });
  };

  componentDidMount = async () => {
    const { navigation } = this.props;

    const code = navigation.getParam("code");
    this.getStatusCodeDetails(code);
    this.getCat(code);
  };

  render() {
    const { code, phrase, description } = this.state.codeDetails;
    const { imageUri } = this.state;

    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name="ios-information-circle-outline"
                style={{ fontSize: 40 }}
              />
              <Body style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 30 }}>{code}</Text>
                <Text note>{phrase}</Text>
              </Body>
            </CardItem>

            <CardItem cardBody>
              <Image
                source={{ uri: imageUri ? imageUri : null }}
                style={{
                  width: Dimensions.get("window").width,
                  flex: 1,
                  aspectRatio: 1.25
                }}
              />
            </CardItem>
            <CardItem>
              <Markdown style={{ marginTop: 10 }}>{description}</Markdown>
            </CardItem>
            <CardItem>
              <Button transparent>
                <Icon name="ios-bookmark" />
              </Button>
              <Button transparent>
                <Icon name="logo-twitter" />
              </Button>
              <Button transparent>
                <Icon name="ios-mail" />
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
