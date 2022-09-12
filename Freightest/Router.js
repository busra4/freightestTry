import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from './src/pages/LoginSign/LoginPage';
import MainPage from './src/pages/Main/MainPage';
import Categories from './src/pages/Categories/Categories';
import Icon from 'react-native-vector-icons/Ionicons';
import SignPageConst from './src/pages/LoginSign/SignPage/SignPageConst';
const deviceSize = Dimensions.get('window');
import {createStackNavigator} from '@react-navigation/stack';

import {
  BottomNavigation,
  DarkTheme,
  DefaultTheme,
  useTheme as usePaperTheme,
} from 'react-native-paper';
import Shipping from './src/pages/Shipping/Shipping';
import PaymentPage from './src/pages/PaymentPage/PaymentPage';
import AddCardPage from './src/pages/PaymentPage/AddCardPage/AddCardPage';
import CompletePayment from './src/pages/PaymentPage/CompletePayment/CompletePayment';
import Profile from './src/pages/Profile';
import AccountInfo from './src/pages/Profile/AccountInfo';

import {useRef} from 'react';

import AnnounPrefer from './src/pages/Profile/AnnounPrefer';
import PaymentInfo from './src/pages/Profile/PaymentInfo';
import LanguageSet from './src/pages/Profile/LanguageSet';
import PasswordSet from './src/pages/Profile/PasswordSet';
import LocationSet from './src/pages/Profile/LocationSet';
import Shipments from './src/pages/Profile/Shipments';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'purple',
    primary: 'blue',
    elevation: 0,
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      options={{
        title: 'LoginPage',
        headerShown: false,
        tabBarStyle: {display: 'none'},
      }}
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'Categories',
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          title: 'LoginPage',
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="SignPageConst"
        component={SignPageConst}
        options={{title: 'SignPage', headerShown: false}}
      />

      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{title: 'MainPage', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function TwoTabStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{
          title: 'MainPage',
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="PaymentPage"
        component={PaymentPage}
        options={{title: ' Payment Page', headerShown: false}}
      />
      <Stack.Screen
        name="AddCardPage"
        component={AddCardPage}
        options={{title: 'Add Card Page', headerShown: false}}
      />

      <Stack.Screen
        name="CompletePayment"
        component={CompletePayment}
        options={{title: 'Complete Payment Page', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ShipmentStack() {
  return (
    <Stack.Navigator
      initialRouteName="Shipping"
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Shipping"
        component={Shipping}
        options={{title: 'Shipping', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile', headerShown: false}}
      />
      <Stack.Screen
        name="Shipments"
        component={Shipments}
        options={{title: 'Shipments Page', headerShown: false}}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{title: 'AccountInfo', headerShown: false}}
      />

      <Stack.Screen
        name="PaymentInfo"
        component={PaymentInfo}
        options={{title: 'PaymentInfo', headerShown: false}}
      />
      <Stack.Screen
        name="AnnounPrefer"
        component={AnnounPrefer}
        options={{title: 'AnnounPrefer', headerShown: false}}
      />
      <Stack.Screen
        name="PasswordSet"
        component={PasswordSet}
        options={{title: 'PasswordSet', headerShown: false}}
      />
      <Stack.Screen
        name="LocationSet"
        component={LocationSet}
        options={{title: 'LocationSet', headerShown: false}}
      />
      <Stack.Screen
        name="LanguageSet"
        component={LanguageSet}
        options={{title: 'LanguageSet', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function Router() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          activeTintColor: '#42f44b',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: deviceSize.height / 8,
            style: {
              backgroundColor: '#000',
            },
          },
          header: () => null,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          screenOptions={{
            tabBarStyle: {
              height: deviceSize.height / 8,
              style: {
                backgroundColor: '#000',
              },
            },
          }}
          options={({route}) => ({
            tabBarShowLabel: false,
            tabBarLabel: 'HomeStack',
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Freightest/src/assets/HomeBlue.png')
                    : require('../Freightest/src/assets/Home.png')
                }
              />
            ),
            tabBarStyle: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              console.log(routeName);
              if (
                routeName === 'Categories' ||
                routeName === 'LoginPage' ||
                routeName === 'SignPageConst'
              ) {
                return {display: 'none', height: deviceSize.height / 8};
              }
              return {height: deviceSize.height / 8};
            })(route),
          })}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 2,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name="TwoTabStack"
          component={TwoTabStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Freightest/src/assets/deliveryBlue.png')
                    : require('../Freightest/src/assets/Vector.png')
                }
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.6,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name="ShipmentStack"
          component={ShipmentStack}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: 'ShipmentStack',
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Freightest/src/assets/dealBlue.png')
                    : require('../Freightest/src/assets/deal.png')
                }
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.2,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'ProfileStack',
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../Freightest/src/assets/ProfileBlue.png')
                    : require('../Freightest/src/assets/Profile.png')
                }
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4.8,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 3,
          backgroundColor: '#1C7BDB',
          position: 'absolute',
          bottom: 84,
          // Horizontal Padding = 20...
          left: 25,
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get('window').width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

export default Router;
