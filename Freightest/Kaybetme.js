import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from './src/pages/LoginSign/LoginPage';
import MainPage from './src/pages/Main/MainPage';
import Categories from './src/pages/Categories/Categories';
import Icon from 'react-native-vector-icons/Ionicons';
import SignPageConst from './src/pages/LoginSign/SignPage/SignPageConst';
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
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
function Kaybetme() {
  return (
    <NavigationContainer>
    
      <HomeStack.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarStyle: {display: 'none'},
        }}
        screenOptions={{headerShown: false}}
      />

      <HomeStack.Screen
        name={'AddCardPage'}
        component={AddCardPage}
        options={{
          tabBarStyle: {display: 'none'},
        }}
        screenOptions={{headerShown: false}}
      />

      <HomeStack.Screen
        name={'Pofile'}
        component={Profile}
        options={{
          tabBarStyle: {display: 'none'},
        }}
        screenOptions={{headerShown: false}}
      />

      <HomeStack.Screen
        name={'CompletePayment'}
        component={CompletePayment}
        options={{
          tabBarStyle: {display: 'none'},
        }}
        screenOptions={{headerShown: false}}
      />

      <HomeStack.Screen
        screenOptions={{headerShown: false}}
        name={'PaymentPage'}
        component={PaymentPage}
        options={{
          headerShown: false,

          tabBarStyle: {display: 'none'},
        }}
      />

      <HomeStack.Screen
        screenOptions={{headerShown: false}}
        name={'LoginPage'}
        component={LoginPage}
        options={{
          headerShown: false,

          tabBarStyle: {display: 'none'},
        }}
      />
      <HomeStack.Screen
        screenOptions={{headerShown: false}}
        name={'SignPageConst'}
        component={SignPageConst}
        options={{
          headerShown: false,

          tabBarStyle: {display: 'none'},
        }}
      />
      <HomeStack.Screen
        theme={MyTheme}
        name={'MainPage'}
        component={MainPage}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        theme={MyTheme}
        name={'Shipping'}
        component={Shipping}
        options={{
          headerShown: false,
        }}
      />







<HomeStack.Screen
        theme={MyTheme}
        name={'Shipments'}
        component={Shipments}
        options={{
          headerShown: false,
        }}
      />






      <Tab.Navigator
        theme={MyTheme}
        screenOptions={{
          headerShown: false,
          style: {
            backgroundColor: 'yellow',

            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            elevation: 0,
          },
          tabBarStyle: {
            style: {
              backgroundColor: '#000',
            },
          },
          header: () => null,
        }}>
        <HomeStack.Screen
          style={styles.denemee}
          name="Home"
          component={Categories}
          options={{
            showLabel: false,
            tabBarActiveTintColor: 'blue',
            tabBarStyle: {display: 'none'},
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Home.png')} />
            ),
          }}
          screenOptions={{headerShown: false}}
        />
        <Tab.Screen
          style={styles.denemee}
          name="MainPage"
          component={MainPage}
          options={{
            tabBarActiveTintColor: 'blue',
            // hide the bottom tab bar on Product Screen
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Home.png')} />
            ),
          }}
        />

        <Tab.Screen
          style={styles.denemee}
          name="AddCardPage"
          component={AddCardPage}
          options={{
            tabBarActiveTintColor: 'blue',
            // hide the bottom tab bar on Product Screen
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Home.png')} />
            ),
          }}
        />

        <Tab.Screen
          style={styles.denemee}
          name="CompletePayment"
          component={CompletePayment}
          options={{
            tabBarActiveTintColor: 'blue',
            // hide the bottom tab bar on Product Screen
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Home.png')} />
            ),
          }}
        />

        <Tab.Screen
          screenOptions={{headerShown: false}}
          name="SignPageConst"
          component={SignPageConst}
          options={{
            tabBarActiveTintColor: 'blue',
            tabBarShowLabel: false,
            tabBarStyle: {display: 'none'},
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Profile.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="Shipping"
          component={Shipping}
          options={{
            tabBarActiveTintColor: 'blue',
            // hide the bottom tab bar on Product Screen
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Vector.png')} />
            ),
          }}
        />

        <Tab.Screen
          name="PaymentPage"
          component={PaymentPage}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
            tabBarActiveTintColor: 'blue',
            // hide the bottom tab bar on Product Screen
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Vector.png')} />
            ),
          }}
        />

        <Tab.Screen
          screenOptions={{headerShown: false}}
          name="LoginPage"
          component={LoginPage}
          options={{
            tabBarActiveTintColor: 'blue',
            tabBarShowLabel: false,
            tabBarStyle: {display: 'none'},
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Profile.png')} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarActiveTintColor: 'blue',
            tabBarShowLabel: false,
            tabBarStyle: {display: 'none'},
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Profile.png')} />
            ),
          }}
        />








<Tab.Screen
          name="Shipments"
          component={Shipments}
          options={{
            tabBarActiveTintColor: 'blue',
            tabBarShowLabel: false,
            tabBarStyle: {display: 'none'},
            tabBarIcon: () => (
              <Image source={require('../Freightest/src/assets/Profile.png')} />
            ),
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Just some styles
// https://www.kindacode.com/cat/mobile/react-native/
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenName: {
    fontSize: 40,
  },
  denemee: {
    backgroundColor: 'yellow',
  },
});

export default Kaybetme;
