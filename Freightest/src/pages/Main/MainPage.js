import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ConstraintLayout,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Clipboard from '@react-native-clipboard/clipboard';
import React, {useState, useEffect, useRef} from 'react';
import styles from './MainPage.style';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import Loading from '../../components/Loading/Loading';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {BottomMenu} from '../../components/BottomMenu/BottomMenu';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from '../LoginSign/LoginPage';
import SignPageConst from '../LoginSign/SignPage/SignPageConst';
import SearchFilter from '../../components/SearchFilter';

const deviceSize = Dimensions.get('window');
const MainPage = ({route, navigation}) => {
  const [notfVisible, setnotfVisible] = useState(true);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'white', marginTop: 20, margin: 2}}>
        <ScrollView horizontal={false}>
          <View
            style={{
              flexDirection: 'row',
              height: deviceSize.height / 14,
              margin: 10,
            }}>
            <Image source={require('../../assets/logoCompName.png')} />

            <TouchableOpacity
              style={{
                alignItems: 'center',
                height: deviceSize.height / 14,
                width: deviceSize.height / 14,
                backgroundColor: '#e9ecef',
                position: 'absolute',
                right: 6,
                borderColor: '#ced4da',
                borderWidth: 2,
                borderRadius: 10,
              }}>
              <View style={{marginTop: 4}}>
                <Icon
                  size={30}
                  name={
                    notfVisible
                      ? 'notifications-outline'
                      : 'notifications-off-outline'
                  }
                  onPress={() => setnotfVisible(!notfVisible)}></Icon>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <ScrollView horizontal={true} style={{width: '100%'}}>
              <SearchFilter />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MainPage;
