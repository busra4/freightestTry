import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './TabBar';
import MainPage from '../../pages/Main/MainPage';
import LoginPage from '../../pages/LoginSign/LoginPage/LoginPage';
import SignPageConst from '../../pages/LoginSign/SignPage/SignPageConst';
import denemePage from '../../pages/denemePage/denemePage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return React.createElement(
    View,
    {style: {flex: 1, position: 'relative'}},
    React.createElement(
      Tab.Navigator,
      {tabBar: props => React.createElement(TabBar, Object.assign({}, props))},
      React.createElement(Tab.Screen, {name: 'MainPage', component: MainPage}),
      React.createElement(Tab.Screen, {
        name: 'LoginPage',
        component: LoginPage,
        options:{
            tabBarStyle: {display: 'none'},
            headerShown: false,
          }
      }),
      React.createElement(Tab.Screen, {
        name: 'SignPageConst',
        component: SignPageConst,
      }),
      React.createElement(Tab.Screen, {
        name: 'denemePage',
        component: denemePage,
      }),
    ),
  );
};
