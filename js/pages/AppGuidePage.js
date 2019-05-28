
"use strict";

import React from "react";
import { connect } from "react-redux";
import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

class AppGuidePage extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Text</Text>
      </View>
    );
  }
}

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

/* Export
============================================================================= */
module.exports = connect()(AppGuidePage);
