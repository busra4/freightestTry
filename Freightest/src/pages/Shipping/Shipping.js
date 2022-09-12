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

import Icon from 'react-native-vector-icons/Ionicons';

import SearchFilter from '../../components/SearchFilter';
import AllShipment from '../../components/AllShipments';

const deviceSize = Dimensions.get('window');
const Shipping = ({navigation}) => {
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
              onPress={() => setnotfVisible(!notfVisible)}
              style={{
                alignItems: 'center',
                height: deviceSize.height / 14,
                width: deviceSize.height / 14,
                backgroundColor: '#F3F3F3',
                position: 'absolute',
                right: 6,
                borderColor: '#E5E5E5',
                borderWidth: 2,
                borderRadius: 10,
              }}>
              <View style={{justifyContent: 'center', margin: 8}}>
                <Image
                  source={
                    notfVisible
                      ? require('../../assets/notification.png')
                      : require('../../assets/notNotification.png')
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <ScrollView horizontal={true} style={{width: '100%'}}>
              <AllShipment />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Shipping;
