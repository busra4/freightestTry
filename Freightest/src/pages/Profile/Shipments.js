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
import React, {useState, useEffect, useRef, PureComponent} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
const deviceSize = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import styles from './Profile.style';
import ShipmentsProfile from '../../components/ShipmentsProfile';

const Shipments = ({navigation}) => {
  /* EEEEEE içi , 7E8085 yazı, buton iç F3F3F3 , buton yazı 2C2D30, buton ok 1C7BDB,
          logout  fill FFF2F2 , FF5050 border ,*/
  const [selectedCountry, setSelectedCountry] = useState();

  const [selectedCity, setSelectedCity] = useState();

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
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
                marginHorizontal: deviceSize.width / 6,
                fontWeight: 'bold',
              }}>
              Shipments
            </Text>
            <TouchableOpacity
              style={{bottom: deviceSize.height / 24}}
              onPress={() => navigation.navigate('Profile')}>
              <Icon name="arrow-back" size={30} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',

              borderRadius: 8,
              padding: 10,
              marginVertical: 1,
              width: deviceSize.width / 1.09,
            }}></View>

          <ShipmentsProfile />
          <ShipmentsProfile />
          <ShipmentsProfile />
          <ShipmentsProfile />
        </View>
      </ScrollView>
    </View>
  );
};

export default Shipments;
