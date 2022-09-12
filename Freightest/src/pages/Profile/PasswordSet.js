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
const PasswordSet = ({navigation}) => {
  /* EEEEEE içi , 7E8085 yazı, buton iç F3F3F3 , buton yazı 2C2D30, buton ok 1C7BDB,
          logout  fill FFF2F2 , FF5050 border ,*/
  const [textInputOldPassword, setTextInputOldPassword] = useState('');
  const [textInputRePassword, setTextInputRePassword] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');

  const [passwordOldVisible, setPasswordOldVisible] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordReVisible, setPasswordReVisible] = useState(true);

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

              borderRadius: 8,
              padding: 10,
              marginVertical: 1,
              width: deviceSize.width / 1.09,
            }}></View>

          <View style={{}}>
            <View>
              <Text>Current Password</Text>
              <TextInput
                onChangeText={value => setTextInputOldPassword(value)}
                placeholder="Enter existing password"
                style={styles.textinput_edit}
                label="Current Password"
                secureTextEntry={passwordOldVisible}
                right={
                  <TextInput.Icon
                    name={passwordOldVisible ? 'eye-off' : 'eye'}
                    onPress={() => setPasswordOldVisible(!passwordOldVisible)}
                  />
                }
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
              <Text>New Password</Text>
              <TextInput
                onChangeText={value => setTextInputPassword(value)}
                placeholder="Enter new password"
                style={styles.textinput_edit}
                label="New Password"
                secureTextEntry={passwordVisible}
                right={
                  <TextInput.Icon
                    name={passwordVisible ? 'eye-off' : 'eye'}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
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
              <Text>New Password (Again)</Text>
              <TextInput
                onChangeText={value => setTextInputRePassword(value)}
                placeholder="Enter new password"
                style={styles.textinput_edit}
                label="New Password (Again)"
                secureTextEntry={passwordReVisible}
                right={
                  <TextInput.Icon
                    name={passwordReVisible ? 'eye-off' : 'eye'}
                    onPress={() => setPasswordReVisible(!passwordReVisible)}
                  />
                }
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

export default PasswordSet;
