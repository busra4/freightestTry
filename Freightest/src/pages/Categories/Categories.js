import {
  FlatList,
  ActivityIndicator,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {withNavigation} from 'react-navigation';
import styles from './Categories.style';
import {StyleSheet, Dimensions} from 'react-native';
import CircleProgress from './CircleProgress';
const deviceSize = Dimensions.get('window');

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {BottomMenu} from '../../components/BottomMenu/BottomMenu';

import {NavigationContainer} from '@react-navigation/native';

const nextButton1 = require('../../assets/nextButton1.png');
const nextButton2 = require('../../assets/nextButton2.png');
const nextButton3 = require('../../assets/nextButton3.png');

const infoPage1 = require('../../assets/infoPage1.png');
const infoPage2 = require('../../assets/infoPage2.png');
const infoPage3 = require('../../assets/infoPage3.png');

import {useNavigation} from '@react-navigation/native';

const Categories = ({navigation, props}) => {
  const [text, setText] = useState('yazi1');
  const [header_text, setHeaderText] = useState('header1');
  const [count, setCount] = useState(1);

  const nextButton = {nextButton1, nextButton2, nextButton3};
  const infoPage = {infoPage1, infoPage2, infoPage3};

  const [choice, setSelected] = useState(nextButton.nextButton1);
  const [choicePage, setPage] = useState(infoPage.infoPage1);

  const think = count => {
    if (count === 1) {
      setText('yazi2');
      setHeaderText('header2');
      setSelected(nextButton2);
      setPage(infoPage2);
    } else if (count === 2) {
      setHeaderText('header3');
      setText(' yazi3');
      setSelected(nextButton3);
      setPage(infoPage3);
    } else if (count > 2) {
      navigation.navigate('LoginPage');
    }
  };
  console.log(count);
  return (
    <View>
      <View style={styles.vector_time}>
        <ImageBackground
          style={{
            width: deviceSize.width,
            height: deviceSize.height,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          source={choicePage}>
          <TouchableOpacity
            style={styles.skip_button}
            onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.button_text}>skip</Text>
          </TouchableOpacity>
          <Text style={styles.header}>{header_text}</Text>
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity
            style={styles.next_button}
            onPress={() => {
              setCount(count + 1);
              think(count);
            }}>
            <Image source={choice}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default withNavigation(Categories);
