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
import styles from './AddCardPage.style';
const AddCardPage = ({navigation}) => {



  const [textInputCardOwner, setTextInputCardOwner] = useState('');
  const [textInputCardNumber, setTextInputCardNumber] = useState('');
  const [textInputExpirationDate, setTextInputExpirationDate,] = useState('');
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
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 17}}>
          Card Owner
        </Text>
      </View>

      <TextInput
        onChangeText={value => setTextInputCardOwner(value)}
        placeholder="Enter the name and surname on the card"
        style={styles.textinput_edit}
        label="Card Owner"
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
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 17}}>
          Card Number
        </Text>
      </View>

      <TextInput
        keyboardType='numeric'
        onChangeText={value => setTextInputCardNumber(value)}
        placeholder="Enter your card number"
        style={styles.textinput_edit}
        label="Card Number"
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

      <View style={{margin: 20, flexDirection: 'row', marginTop: 20}}>
        <View
          style={{
            flexDirection: 'column',
        
            justifyContent: 'center',
          }}>


          <View
            style={{
              flexDirection: 'row',
             
              width: deviceSize.width / 1.06,
            }}>



            <View style={{flexDirection:'column',flex:2}}>
              <Text
                style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 17,alignSelf:'flex-start'}}>
                Expiration Date
              </Text>
              <TextInput
              keyboardType='numeric'
                onChangeText={value => setTextInputExpirationDate(value)}
                placeholder="MM/YY"
                style={{marginRight: 4,}}
                label="Expiration Date"
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






            <View style={{flexDirection:'column', flex:1}}>
              <Text
                style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 17,alignSelf:'flex-start'}}>
                CVV
              </Text>
              <TextInput
              keyboardType='numeric'
                onChangeText={value => setTextInputCVV(value)}
                placeholder="---"
                style={{margin: 4,}}
                label="CVV"
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
          </View>







          <View style={{flexDirection: 'row'}}>
            <Checkbox
              style={{width: 10}}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}></Checkbox>

            <Text style={{alignSelf: 'center'}}>
              Save for my next purchase.
            </Text>
          </View>
        </View>
      </View>
 

      <TouchableOpacity
      onPress={() => navigation.navigate('CompletePayment')}
        style={{
          color: 'white',
          alignItems: 'center',
          backgroundColor: '#1C7BDB',
          borderRadius: 16,
          height: deviceSize.height / 12,
          margin: 20,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Save and Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCardPage;
