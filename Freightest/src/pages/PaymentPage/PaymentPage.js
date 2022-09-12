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
import {Checkbox} from 'react-native-paper';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
const deviceSize = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

const PaymentPage = ({navigation}) => {

  const [checked, setChecked] = React.useState('first');
  const pickerRef = useRef();
 
  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={{backgroundColor: 'white', height: deviceSize.height / 1}}>
      <View style={{flexDirection: 'row', margin: 20}}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={30} />
        </TouchableOpacity>

        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            marginHorizontal: deviceSize.width / 6,
            fontWeight:'bold'
          }}>
          Complete the Payment
        </Text>
      </View>
      <View
        style={{
          margin: 20,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 18}}>
          Card Information
        </Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('AddCardPage')}
          style={{
            backgroundColor: '#1C7BDB',
            width: deviceSize.width / 5,
            height: deviceSize.height / 18,
            borderRadius: 10,
          }}>
          <Text
            style={{color: 'white', margin: 5, marginLeft: 25, fontSize: 17}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 5,
          height: deviceSize.height / 9,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F3F3F3',
            flexDirection: 'row',
            borderRadius: 12,
          }}>
          <Icon
            name="card"
            size={40}
            style={{alignSelf: 'center', margin: 10}}
          />
          <View style={{alignSelf: 'center', marginRight: 10}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Lorem ipsum
            </Text>
            <Text style={{color: '#7E8085', marginTop: 10, fontSize: 10}}>
              4345 **** ***** **** 8056
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#F3F3F3',
            flexDirection: 'row',
            borderRadius: 12,
          }}>
          <Icon
            name="card"
            size={40}
            style={{alignSelf: 'center', margin: 10}}
          />
          <View style={{alignSelf: 'center', marginRight: 10}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Lorem ipsum
            </Text>
            <Text style={{color: '#7E8085', marginTop: 10, fontSize: 10}}>
              4345 **** ***** **** 8056
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{margin: 10, flexDirection: 'row', marginTop: 20}}>
        <Checkbox
          style={{width: 10}}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}></Checkbox>

        <Text>
          I have read and approved the Preliminary Information Conditions and
          the Distance Sales Agreement.
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
        }}
      />
      <View
        style={{
          fontSize: 10,
          width: deviceSize.width / 1.16,
          justifyContent: 'flex-start',
          margin: 8,
          height: deviceSize.height / 11.5,
        }}>
        <Picker
          dropdownIconColor="#1C7BDB"
          mode="dropdown"
          ref={pickerRef}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Contract and Forms" value="" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      <TouchableOpacity
        style={{
          color: 'white',
          alignItems: 'center',
          backgroundColor: '#1C7BDB',
          borderRadius: 16,
          height: deviceSize.height / 12,
          margin: 20,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Confirm and Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentPage;
