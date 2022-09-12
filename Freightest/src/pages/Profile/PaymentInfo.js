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
const PaymentInfo = ({navigation}) => {
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
                marginHorizontal: deviceSize.width / 3,
                fontWeight: 'bold',
              }}>
              Payment Info
            </Text>
            <TouchableOpacity
              style={{bottom: deviceSize.height / 24}}
              onPress={() => navigation.navigate('Profile')}>
              <Icon name="arrow-back" size={30} />
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <View>
              <Text>Name</Text>
              <TextInput
                onChangeText={value => setTextInputCardNumber(value)}
                placeholder="etc: Frederick Winslow"
                style={styles.textinput_edit}
                label="Name"
                mode="outlined"
                raised
                theme={{
                  roundness: 16,
                  colors: {
                    primary: '#BABDC2',
                    placeholder: '#BABDC2',
                    underlineColor: 'transparent',
                  },
                }}
              />
            </View>

            <View style={{paddingTop: deviceSize.height / 30}}>
              <Text>Surname</Text>
              <TextInput
                onChangeText={value => setTextInputCardNumber(value)}
                placeholder="etc:Taylor"
                style={styles.textinput_edit}
                label="Surname"
                mode="outlined"
                raised
                theme={{
                  roundness: 16,
                  colors: {
                    primary: '#BABDC2',
                    placeholder: '#BABDC2',
                    underlineColor: 'transparent',
                  },
                }}
              />
            </View>

            <View style={{paddingTop: deviceSize.height / 30}}>
              <Text>Account Number</Text>
              <TextInput
                onChangeText={value => setTextInputCardNumber(value)}
                placeholder="1234567890"
                style={styles.textinput_edit}
                label="Account Number"
                mode="outlined"
                raised
                theme={{
                  roundness: 16,
                  colors: {
                    primary: '#BABDC2',
                    placeholder: '#BABDC2',
                    underlineColor: 'transparent',
                  },
                }}
              />
            </View>

            <View style={{paddingTop: deviceSize.height / 30}}>
              <Text>IBAN</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={value => setTextInputCardNumber(value)}
                placeholder="etc: TR 1234 5678 9012 1234"
                style={styles.textinput_edit}
                label="IBAN"
                mode="outlined"
                raised
                theme={{
                  roundness: 16,
                  colors: {
                    primary: '#BABDC2',
                    placeholder: '#BABDC2',
                    underlineColor: 'transparent',
                  },
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#1C7BDB',
                padding: 18,
                marginVertical: deviceSize.height / 20,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentInfo;
