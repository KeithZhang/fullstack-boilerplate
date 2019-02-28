// import React from 'react';
// import { Image } from 'react-native';

// import {
//   createBottomTabNavigator,
//   createStackNavigator,
//   createSwitchNavigator
// } from 'react-navigation';

// import AuthLoading from './auth-loading';
// import Category from './category';
// import Home from './home';
// import Login from './login';
// import Register from './register';
// import RegisterInvite from './register-invite';
// import LoginRegister from './login-register';
// import ForgotPassword from './forgot-password';
// import SmsCodeLogin from './sms-code-login';
// import SummaryDetail from './summary-detail';
// import OrderList from './order-list';
// import UserCenter from './user-center';
// import UserSetting from './user-setting';
// import UserSummary from './user-summary';
// import UserSummaryMore from './user-summary-more';
// import UserFansList from './user-fans-list';
// import BindWechat from './bind-wechat';
// import UserInvite from './user-invite';

// // 所有登录前的页面都在这里定义
// const AuthStack = createStackNavigator(
//   {
//     LoginRegister,
//     Login,
//     ForgotPassword,
//     SmsCodeLogin,
//     RegisterInvite,
//     Register
//   },
//   {
//     headerMode: 'none'
//   }
// );

// const BootomTabNavigator = createBottomTabNavigator(
//   {
//     // 所有不需要隐藏tabbar的页面在这里定义
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => {
//           return (
//             <Image
//               source={
//                 focused
//                   ? require(`assets/home-selected.png`)
//                   : require(`assets/home.png`)
//               }
//             />
//           );
//         }
//       }
//     },
//     Category: {
//       screen: Category,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => {
//           return (
//             <Image
//               source={
//                 focused
//                   ? require(`assets/category-selected.png`)
//                   : require(`assets/category.png`)
//               }
//             />
//           );
//         }
//       }
//     },
//     UserCenter: {
//       screen: UserCenter,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => {
//           return (
//             <Image
//               source={
//                 focused
//                   ? require(`assets/mine-selected.png`)
//                   : require(`assets/mine.png`)
//               }
//             />
//           );
//         }
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: YouTheme.color.brand_primary
//     }
//   }
// );

// BootomTabNavigator.navigationOptions = {
//   header: null
// };

// const AppStack = createStackNavigator(
//   {
//     BootomTabs: BootomTabNavigator,

//     // 所有需要隐藏tabbar的页面都在这里定义
//     SummaryDetail,
//     UserSetting,
//     OrderList,
//     UserSummary,
//     UserSummaryMore,
//     UserFansList,
//     BindWechat
//   },
//   {
//     headerMode: 'none'
//   }
// );

// // 根导航
// const AuthNavigator = createSwitchNavigator(
//   {
//     AuthLoading,
//     Auth: AuthStack,
//     App: AppStack
//   },
//   {
//     initialRouteName: 'AuthLoading'
//   }
// );

// export default AuthNavigator;
