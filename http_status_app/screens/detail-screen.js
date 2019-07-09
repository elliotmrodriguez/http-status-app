import React from "react";
import axiosInstance from "../config/axios-instance";
import StatusCodesList from "../components/status-codes-list";
export default class DetailScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      statusCodes: [],
      headerItem: null,
      headerStyle: null
    };
  }

  getStatusCodeDetails = code => {
    this.props.navigation.navigate("CodeDetail", {
      code
    });
  };

  generateList = result => {
    const currentState = this.state.statusCodes;

    result.forEach(item => {
      const data = [];

      data.push(JSON.stringify(item.description));

      currentState.push({
        title: item.code + " " + item.phrase,
        content: data
      });
    });

    this.setState({
      statusCodes: currentState,
      headerItem: currentState[0].title,
      headerStyle: this.getHeaderStyle(currentState[0].title.split(" ")[0])
    });
  };

  getCodes = id => {
    axiosInstance
      .get(`/status-codes/codes/${id}`)
      .then(response => this.generateList(response.data));
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const id = navigation.getParam("id", 4);
    this.getCodes(id);
  };

  getHeaderStyle = code => {
    let style = "";
    switch (code) {
      case "1xx":
        style = "blue";
        break;
      case "2xx":
        style = "green";
        break;
      case "3xx":
        style = "grey";
        break;
      case "4xx":
        style = "orange";
        break;
      case "5xx":
        style = "red";
        break;
      default:
        style = "black";
    }

    return style;
  };

  render() {
    const { statusCodes, headerItem, headerStyle } = this.state;

    return (
      <StatusCodesList
        codesToRender={statusCodes}
        headerItem={headerItem}
        headerStyle={headerStyle}
        onReadMorePress={this.getStatusCodeDetails}
      />
    );
  }
}
