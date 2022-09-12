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
const Profile = ({navigation}) => {
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
        <View style={{flexDirection: 'row', margin: 20, alignSelf: 'center'}}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              marginHorizontal: deviceSize.width / 6,
              fontWeight: 'bold',
            }}>
            Profile
          </Text>
        </View>

        <View>
          <Image
            style={{width: null}}
            source={require('../../assets/wallpaper.png')}></Image>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 8,
              bottom: deviceSize.height / 16,
              backgroundColor: '#EEEEEE',
              padding: 12,
              marginHorizontal: 20,
            }}>
            <Image source={require('../../assets/profilePhoto.png')} />
            <View
              style={{
                paddingLeft: deviceSize.width / 16,
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Frederick Winslow Taylor
              </Text>
              <Text style={{fontWeight: '600', color: '#7E8085'}}>
                hello@frederickWilson.co.usa
              </Text>

              <Icon name="location" color={'#1C7BDB'} size={14}>
                <Text style={{fontWeight: '800', color: '#1C7BDB'}}>
                  ABD Arizona
                </Text>
              </Icon>
            </View>
          </View>
        </View>

        <View style={{bottom: deviceSize.height / 20}}>
          <TouchableOpacity style={styles.button_list}>
            <Text>My Offers</Text>
            <Image
              source={require('../../assets/arrow_vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('Shipments')}>
            <Text>Shipments</Text>
            <Image
              source={require('../../assets/arrow_vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('AccountInfo')}>
            <Text>Account info</Text>
            <Image
              source={require('../../assets/arrow_vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('PaymentInfo')}>
            <Text>Payment info</Text>
            <Image
              source={require('../../assets/arrow_vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('AnnounPrefer')}>
            <Text>Announcement Preferences</Text>
            <Image
              source={require('../../assets/arrow_vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('PasswordSet')}>
            <Text>Password settings</Text>
            <Image
              source={require('../../assets/arrow_vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('LocationSet')}>
            <Text>Location settings</Text>
            <Image
              source={require('../../assets/arrow_vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_list}
            onPress={() => navigation.navigate('LanguageSet')}>
            <Text>Language settings</Text>
            <Image
              source={require('../../assets/arrow_vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logout}
            onPress={() => navigation.navigate('Categories')}>
            <Text style={{color: '#FF5050', alignSelf: 'center', fontSize: 14}}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
