import React from "react";
import { Button, View } from "react-native";

class TabButton extends React.Component {
  render() {
    const { buttonTitle, codeId } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title={buttonTitle}
          onPress={() =>
            this.props.navigation.navigate("Details", { id: { codeId } })
          }
        />
      </View>
    );
  }
}

export default TabButton;
