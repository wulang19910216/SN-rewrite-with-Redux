import React from 'react';
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation'; // 第三方包
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import AppGuidePage from './pages/AppGuidePage.js';
// 这是项目的路由注册页面
export default class AppPageRegister extends React.Component {
    getPageName() {
        return 'AppPageRegister';
    }

    state = {
        isFirstIn: true,
    };


    render() {
      if (this.state.isFirstIn) {
          return (// return后默认会自动导航到第一个screen
              <MyStackNavigator />
          );
      }
    }
}
const RouteConfigs = {// 新页面在这里注册，注册完毕后使用this.props.navigation.navigate('Test04Page');跳转
    AppGuidePage: { screen: AppGuidePage },
};

const NavigationConfig = {// 属性设置https://github.com/react-community/react-navigation/blob/be1da2c4c97a97aefc81c7e7497913e440423bdb/docs/api/navigators/StackNavigator.md
    headerMode: 'none', // 不使用组件中的header。有bug：1.0.0-beta.11版本中,通过header来自定义不同头部view时在tab页中切换底部tab有时不移动
    transitionConfig: () => ({// 页面换场属性
        screenInterpolator: CardStackStyleInterpolator.forHorizontal// 自定义换场动画 https://github.com/react-community/react-navigation/issues/1400
    }),
    // navigationOptions: {
    //     gesturesEnabled: false// 页面手势返回功能，iOS默认打开，android默认关闭，这里全部打开
    // },
};
const MyStackNavigatorRoutes = createStackNavigator(
    RouteConfigs,
    {
        initialRouteName: 'AppGuidePage', //AppGuidePage
        ...NavigationConfig
    },
);

const MyStackNavigator = createAppContainer(MyStackNavigatorRoutes);
