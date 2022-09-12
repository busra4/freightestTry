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
  ImageBackground,
  Animated,
} from 'react-native';
import {TextInput, Checkbox} from 'react-native-paper';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
const deviceSize = Dimensions.get('window');

import SliderNotf from '../../components/SliderNotf';
import {useNavigation} from '@react-navigation/native';
import styles from './Profile.style';
const AnnounPrefer = ({navigation}) => {
  /* EEEEEE içi , 7E8085 yazı, buton iç F3F3F3 , buton yazı 2C2D30, buton ok 1C7BDB,
          logout  fill FFF2F2 , FF5050 border ,*/

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: deviceSize.height / 1,

        flex: 1,
      }}>
      <View style={{marginTop: 20, alignSelf: 'center'}}>
        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              marginHorizontal: deviceSize.width / 3,
              fontWeight: 'bold',
            }}>
            AnnounPrefer
          </Text>
          <TouchableOpacity
            style={{bottom: deviceSize.height / 24}}
            onPress={() => navigation.navigate('Profile')}>
            <Icon name="arrow-back" size={30} />
          </TouchableOpacity>
        </View>

        <View style={{margin: deviceSize.height / 14}}></View>
      </View>

      <SliderNotf />
      <SliderNotf />
      <SliderNotf />
    </View>
  );
};

export default AnnounPrefer;
