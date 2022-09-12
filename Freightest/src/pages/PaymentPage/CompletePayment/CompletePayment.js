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
import {TextInput, Checkbox} from 'react-native-paper';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
const deviceSize = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

const CompletePayment = ({navigation}) => {
  /* EDFAFF içi , 1C7BDB yazı */

  const [textInputCardOwner, setTextInputCardOwner] = useState('');
  const [textInputCardNumber, setTextInputCardNumber] = useState('');
  const [textInputExpirationDate, setTextInputExpirationDate] = useState('');
  const [textInputCVV, setTextInputCVV] = useState('');

  const checkTextInput = () => {
    if (!textInputMail.trim()) {
      alert('Please Enter Company e-mail');
      return;
    }
    //Check for the Email TextInput
    if (!textInputPassword.trim()) {
      alert('Please Enter Password');
      return;
    }

    //Check for the Name TextInput

    //Checked Successfully
    //Do whatever you want
    alert('Success');
  };

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
            fontWeight: 'bold',
          }}>
          Add Card
        </Text>
      </View>

      <View
        style={{
          margin: 2,
          borderBottomColor: '#BABDC2',
          borderBottomWidth: 0.58,
        }}
      />

      <View>
        <View style={{alignSelf: 'center', marginTop: deviceSize.height / 20}}>
          <Image source={require('../../../assets/completePay.png')} />
        </View>

        <View
          style={{
            backgroundColor:'#FCFCFC',
            borderWidth: 1,
            borderColor: '#F3F3F3',
            margin: deviceSize.width / 28,
            padding: 16,
            justifyContent: 'space-around',
            borderRadius: 8,
          }}>
          <Text
            style={{
              color: '#1C7BDB',
              fontWeight: 'bold',
              margin: 4,
              fontSize: 16,
            }}>
            Amount Paid
          </Text>
          <Text style={{margin: 4,fontWeight:'600'}}>Paid by card : 19.090,00 tl</Text>
          <Text style={{margin: 4, fontWeight:'600'}}>
            The overall total:{' '}
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              19.111,99 tl
            </Text>
          </Text>

          <View
            style={{backgroundColor: '#EDFAFF', marginTop: 6, borderRadius: 6}}>
            <Text style={{color: '#1C7BDB', fontSize: 12, padding: 12,fontWeight:'600'}}>
              The shopping amount will appear as 19.111,99 tl on your card
              statement.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor: '#1C7BDB', borderRadius:8,marginHorizontal:18,padding:16,margin:10}}>
          <Text style={{color: 'white',alignSelf:'center',fontWeight:'bold'}}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity        onPress={() => navigation.navigate('MainPage')}
        style={{borderRadius: 8,marginHorizontal:18,padding:16,borderColor:'#1C7BDB',borderWidth:2}}>
          <Text style={{color: '#1C7BDB',alignSelf:'center',fontWeight:'bold'}}>Main Page</Text>
   
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompletePayment;
