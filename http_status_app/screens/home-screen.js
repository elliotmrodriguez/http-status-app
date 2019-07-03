import React from "react";
import { View, Text, Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#ffcc00", justifyContent: "center" }}>
        <Text>HOME</Text>
        <Button
          title="Details"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "details" })]
              })
            );
          }}
        />
      </View>
    );
  }
}
