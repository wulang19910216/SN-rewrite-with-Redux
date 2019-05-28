
"use strict";

import React from "react";
import { AppState, StyleSheet, StatusBar, View } from "react-native";
// import LoginScreen from "./login/LoginScreen";
// import PushNotificationsController from "./PushNotificationsController";
import AppPageRegister from "./AppPageRegister";
// import {
//   loadConfig,
//   loadMaps,
//   loadNotifications,
//   loadSessions,
//   loadFAQs,
//   loadPages,
//   loadFriendsSchedules,
//   loadSurveys,
//   loadVideos,
//   loadPolicies,
//   restoreSchedule
// } from "./actions";
// import { updateInstallation } from "./actions/installation";
import { connect } from "react-redux";
// import { version } from "./env.js";

class Currier extends React.Component {
  
  componentDidMount() {
    // AppState.addEventListener("change", this.handleAppStateChange);
    //
    // // TODO: Make this list smaller, we basically download the whole internet
    // this.props.dispatch(loadSessions());
    // this.props.dispatch(loadConfig());
    // this.props.dispatch(loadNotifications());
    // this.props.dispatch(loadVideos());
    // this.props.dispatch(loadMaps());
    // this.props.dispatch(loadFAQs());
    // this.props.dispatch(loadPages());
    // this.props.dispatch(loadPolicies());
    //
    // if (this.props.isLoggedIn) {
    //   this.props.dispatch(restoreSchedule());
    //   this.props.dispatch(loadSurveys());
    //   this.props.dispatch(loadFriendsSchedules());
    // }
    //
    // updateInstallation({ version });
  }

  componentWillUnmount() {
    // AppState.removeEventListener("change", this.handleAppStateChange);
  }

  // handleAppStateChange = appState => {
  //   if (appState === "active") {
  //     this.props.dispatch(loadSessions());
  //     this.props.dispatch(loadVideos());
  //     this.props.dispatch(loadNotifications());
  //
  //     if (this.props.isLoggedIn) {
  //       this.props.dispatch(restoreSchedule());
  //       this.props.dispatch(loadSurveys());
  //     }
  //   }
  // };

  render() {
    // if (!this.props.skipWelcomeScreen) {
    //   return <LoginScreen />;
    // }
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
        />
        <AppPageRegister />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = connect()(Currier);
