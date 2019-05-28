"use strict";

// Depdencies
import React,{PureComponent} from "react";
// import FacebookSDK from "./FacebookSDK";
// import Parse from "parse/react-native";
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";

// Components
import { Text, AsyncStorage } from "react-native";
import Currier from "./Currier";
import LaunchScreen from "./components/LaunchScreen";

// Config
// import { serverURL, parseAppID } from "./env";

  // console.disableYellowBox = true;
  // Parse.setAsyncStorage(AsyncStorage);
  // Parse.initialize(parseAppID);
  // Parse.serverURL = `${serverURL}/parse`;

  // FacebookSDK.init();
  // Parse.FacebookUtils.init();

  // Text.defaultProps.allowFontScaling = false;

  export default class Root extends PureComponent {
    state: {
      isLoading: boolean,
      store: any
    };

    constructor() {
      super();
      this.state = {
        storeCreated: false,
        storeRehydrated: false,
        store: null
      };
    }

    componentDidMount() {
      configureStore(
        // rehydration callback (after async compatibility and persistStore)
        _ => this.setState({ storeRehydrated: true })
      ).then(
        // creation callback (after async compatibility)
        store => this.setState({ store, storeCreated: true })
      );
    }

    render() {
      return <LaunchScreen />;
      // if (!this.state.storeCreated || !this.state.storeRehydrated) {
      //   return <LaunchScreen />;
      // }
      // return (
      //   <Provider store={this.state.store}>
      //     <Currier />
      //   </Provider>
      // );
    }
  }
