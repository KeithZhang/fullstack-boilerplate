import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';

import AuthLoading from './pages/auth-loading';
import Login from './pages/login';
import Home from './pages/home';
import Kanban from './pages/kanban';
import User from './pages/user';

// 所有登录前的页面都在这里定义
const AuthStack = createStackNavigator(
  {
    // LoginRegister,
    Login
    // ForgotPassword,
    // SmsCodeLogin,
    // RegisterInvite,
    // Register
  },
  {
    headerMode: 'none'
  }
);

const BootomTabNavigator = createBottomTabNavigator(
  {
    // 所有不需要隐藏tabbar的页面在这里定义
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <IconFill name="home" color={YouTheme.color.brand_primary} />
          ) : (
            <IconOutline name="home" color={YouTheme.color.brand_primary} />
          );
        }
      }
    },
    Kanban: {
      screen: Kanban,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <IconFill name="home" color={YouTheme.color.brand_primary} />
          ) : (
            <IconOutline name="home" color={YouTheme.color.brand_primary} />
          );
        }
      }
    },
    User: {
      screen: User,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return focused ? (
            <IconFill name="home" color={YouTheme.color.brand_primary} />
          ) : (
            <IconOutline name="home" color={YouTheme.color.brand_primary} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: YouTheme.color.brand_primary
    }
  }
);

BootomTabNavigator.navigationOptions = {
  header: null
};

const AppStack = createStackNavigator(
  {
    BootomTabs: BootomTabNavigator

    // 所有需要隐藏tabbar的页面都在这里定义
    // SummaryDetail,
    // UserSetting,
    // OrderList,
    // UserSummary,
    // UserSummaryMore,
    // UserFansList,
    // BindWechat
  },
  {
    headerMode: 'none'
  }
);

// 根导航
const AuthNavigator = createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default AuthNavigator;
