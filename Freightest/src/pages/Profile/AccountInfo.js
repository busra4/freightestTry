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
const AccountInfo = ({navigation}) => {
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
                marginHorizontal: deviceSize.width / 6,
                fontWeight: 'bold',
              }}>
              Account Info
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
              backgroundColor: '#EDFAFF',
              borderRadius: 8,
              padding: 10,
              marginVertical: 1,
              width: deviceSize.width / 1.09,
            }}>
            <Icon
              name="information-circle-outline"
              size={20}
              color={'#1C7BDB'}
            />
            <Text
              style={{
                flexWrap: 'wrap',
                width: deviceSize.width / 2,
                paddingLeft: 6,
                color: '#1C7BDB',
              }}>
              You need to verify your e-mail address.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#1C7BDB',
                padding: 12,
                borderRadius: 8,
                left: deviceSize.width / 9,
                width: deviceSize.width / 5,
              }}>
              <Text style={{alignSelf: 'center', color: 'white'}}>Verify</Text>
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
              <Text>E-mail</Text>
              <TextInput
                onChangeText={value => setTextInputCardNumber(value)}
                placeholder="etc:hello@frederickwilson.co.usa"
                style={styles.textinput_edit}
                label="E-mail"
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
              <Text>Phone Number</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={value => setTextInputCardNumber(value)}
                placeholder="etc: +1 123 456 78 90"
                style={styles.textinput_edit}
                label="Phone Number"
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

export default AccountInfo;
