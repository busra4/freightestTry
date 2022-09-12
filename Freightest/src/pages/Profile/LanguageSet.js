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
} from 'react-native';
import {TextInput, Checkbox} from 'react-native-paper';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
const deviceSize = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import styles from './Profile.style';
const LanguageSet = ({navigation}) => {
  /* EEEEEE içi , 7E8085 yazı, buton iç F3F3F3 , buton yazı 2C2D30, buton ok 1C7BDB,
          logout  fill FFF2F2 , FF5050 border ,*/

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: deviceSize.height / 1,

        flex: 1,
      }}>
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <View>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                marginHorizontal: deviceSize.width / 4,
                fontWeight: 'bold',
              }}>
              Language Settings
            </Text>
            <TouchableOpacity
              style={{bottom: deviceSize.height / 24}}
              onPress={() => navigation.navigate('Profile')}>
              <Icon name="arrow-back" size={30} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button_list}>
            <Image source={require('../../assets/Tr.png')} />
            <Text style={{marginHorizontal: 10}}>Turkish</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_list}>
            <Image source={require('../../assets/England.png')} />
            <Text style={{marginHorizontal: 10}}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('LanguageSet')}>
            <Image source={require('../../assets/Germany.png')} />
            <Text style={{marginHorizontal: 10}}>German</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_list}>
            <Image source={require('../../assets/Japan.png')} />
            <Text style={{marginHorizontal: 10}}>Japanese</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_list}>
            <Image source={require('../../assets/Italy.png')} />
            <Text style={{marginHorizontal: 10}}>Italian</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('LanguageSet')}>
            <Image source={require('../../assets/France.png')} />
            <Text style={{marginHorizontal: 10}}>French</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LanguageSet;
