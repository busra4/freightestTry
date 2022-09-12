// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';

import {useNavigation} from '@react-navigation/native';

const deviceSize = Dimensions.get('window');
const ShipmentsProfile = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{margin: 4}}>
        <>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View>
              <View style={{flexDirection: 'column', marginHorizontal: 6}}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Image source={require('../assets/ShipmentIcon.png')} />
                  <Text style={{fontWeight: 'bold', marginHorizontal: 10}}>
                    FX-00341
                  </Text>
                  <Text style={{marginLeft: 10}}>PO 88975, PO 88976</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 4}}>
                  <View
                    style={{
                      borderWidth: 2,
                      marginLeft: 2,
                      padding: 4,
                      borderRadius: 6,
                      borderColor: '#BABDC2',
                    }}>
                    <Text style={{color: '#BABDC2'}}>Lorem ipsum</Text>
                  </View>

                  <View
                    style={{
                      borderWidth: 2,
                      marginLeft: 5,
                      borderRadius: 6,
                      padding: 4,
                      borderColor: '#BABDC2',
                    }}>
                    <Text style={{color: '#BABDC2'}}>+2</Text>
                  </View>
                </View>

                <View
                  style={{
                    marginLeft: deviceSize.width / 10,
                    marginRight: deviceSize.width / 100,
                    alignSelf: 'flex-end',
                    bottom: deviceSize.height / 20,
                  }}>
                  <Text style={{color: '#BABDC2'}}>Los Angelos Warehouse</Text>
                  <Text style={{alignSelf: 'flex-end', color: '#7E8085'}}>
                    June 20
                  </Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: '#F3F3F3',
                  borderRadius: 12,
                  width: deviceSize.width / 1.1,
                }}>
                <View style={{flexDirection: 'row', padding: 16}}>
                  <Image source={require('../assets/trolley.png')} />
                  <Text style={{marginStart: deviceSize.width / 1.8}}>
                    ETA Oct 24th
                  </Text>
                </View>

                <View style={{paddingBottom: 20}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'relative',
                      height: deviceSize.height / 85,
                      borderRadius: 10,

                      borderColor: 'grey',
                      backgroundColor: '#D5D7DB',
                      marginHorizontal: deviceSize.width / 50,
                      width: deviceSize.width / 1.2,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        position: 'relative',
                        height: deviceSize.height / 85,
                        borderRadius: 10,

                        borderColor: 'grey',
                        backgroundColor: '#FF8787',
                        marginHorizontal: deviceSize.width / 300,
                        width: deviceSize.width / 2,
                      }}>
                      <View
                        style={{
                          alignSelf: 'center',
                          flexDirection: 'row',
                          position: 'relative',
                          height: deviceSize.height / 50,
                          borderRadius: 10,
                          borderWidth: 0.5,
                          borderColor: '#FF8787',
                          backgroundColor: '#FF8787',
                          marginHorizontal: deviceSize.width / 2.1,
                          width: deviceSize.width / 30,
                        }}></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </>
      </View>
      <View
        style={{
          borderWidth: 0.2,
          margin: 20,
          backgroundColor: '#BABDC2',
        }}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default ShipmentsProfile;
