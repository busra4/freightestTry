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

import {useNavigation} from '@react-navigation/native';

const SliderNotf = ({navigation}) => {
  /* EEEEEE içi , 7E8085 yazı, buton iç F3F3F3 , buton yazı 2C2D30, buton ok 1C7BDB,
          logout  fill FFF2F2 , FF5050 border ,*/
  const [active, setActive] = useState(false);
  let transformX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (active) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [active]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [10, Dimensions.get('screen').width / 11],
  });

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: deviceSize.height / 1,

        flex: 1,
      }}>
      <View style={{marginHorizontal: deviceSize.width / 18}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: '#EEEEEE',
              padding: 10,
              borderRadius: 6,
              bottom: deviceSize.height / 10,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{flexWrap: 'wrap', fontWeight: 'bold'}}>E-Mail</Text>
              <Text style={{flexWrap: 'wrap', width: deviceSize.width / 2}}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
                tempor.
              </Text>
            </View>

            <SafeAreaView
              style={{
                flex: 1,
                alignContent: 'flex-end',
                paddingVertical: deviceSize.height / 30,
                flexWrap: 'wrap',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'relative',
                  height: deviceSize.height / 25,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                  backgroundColor: 'white',
                  marginHorizontal: 5,
                  width: deviceSize.width / 7,
                }}>
                <Animated.View
                  style={{
                    position: 'absolute',
                    height: 20 - 2 * 2,
                    top: 6,
                    bottom: 4,
                    borderRadius: 10,
                    width: deviceSize.width / 26,
                    transform: [
                      {
                        translateX: rotationX,
                      },
                    ],
                    backgroundColor: '#1C7BDB',
                  }}></Animated.View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setActive(false)}></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setActive(true)}></TouchableOpacity>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SliderNotf;
