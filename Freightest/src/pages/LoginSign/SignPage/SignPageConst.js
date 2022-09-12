import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState, useEffect, useRef} from 'react';
import styles from './SignPage.style';
import {TextInput, Checkbox, Menu, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const deviceSize = Dimensions.get('window');
const SignPageConst = ({navigation}) => {
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const [textInputCName, setTextInputCName] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');
  const [textInputTax, setTextInputTax] = useState('');
  const [textInputName, setTextInputName] = useState('');
  const [textInputSurname, setTextInputSurname] = useState('');
  const [textInputRePassword, setTextInputRePassword] = useState('');

  const checkTextInput = text => {
    //Check for the Email TextInput
    if (!textInputPassword.trim()) {
      alert('Please Enter Password');
      return;
    }
    if (!textInputCName.trim()) {
      alert('Please Enter Company e-mail');
      return;
    }
    //Check for the Email TextInput
    if (!textInputTax.trim()) {
      alert('Please Enter Tax Number');
      return;
    }
    if (!textInputSurname.trim()) {
      alert('Please Enter Surname');
      return;
    }
    //Check for the Email TextInput
    if (!textInputRePassword.trim()) {
      alert('Please RePassword');
      return;
    }
    //Check for the Email TextInput
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }

    //Check for the Name TextInput

    //Checked Successfully
    //Do whatever you want
    alert('Success');

    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (textInputPassword.trim() && textInputPassword.match(check)) {
      alert('Your password is strong.');
      return;
    } else {
      alert('Meh, not so much.');
      return;
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* logo + company name*/}
        <View style={styles.logo_text}>
          <Image source={require('../../../assets/logoCompName.png')} />
          {/* description text*/}
          <Text style={{margin: 14}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eleifend malesuada ornare.
          </Text>
        </View>

        <Text style={styles.login_text}>Sign Up</Text>
        <View style={styles.input_info}>
          <TextInput
            type="Email"
            style={styles.textinput_edit}
            label="Company E-mail"
            mode="outlined"
            raised
            theme={{
              roundness: 16,
              colors: {
                primary: '#6c757d',
                placeholder: '#6c757d',
                underlineColor: 'transparent',
              },
            }}
          />

          {/* Login Text*/}
          <TextInput
            style={styles.textinput_edit}
            label="Company Name"
            mode="outlined"
            raised
            theme={{
              roundness: 16,
              colors: {
                primary: '#6c757d',
                placeholder: '#6c757d',
                underlineColor: 'transparent',
              },
            }}
          />

          <View
            style={{
              borderWidth: 1,
              borderColor: '#6c757d',
              borderRadius: 16,
              justifyContent: 'center',
              margin: deviceSize.width / 55,
              height: deviceSize.height / 11.5,
            }}>
            <Picker
              mode="dropdown"
              ref={pickerRef}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Select User Type" value="" />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <TextInput
            style={styles.textinput_edit}
            label="Tax Number"
            mode="outlined"
            raised
            theme={{
              roundness: 16,
              colors: {
                primary: '#6c757d',
                placeholder: '#6c757d',
                underlineColor: 'transparent',
              },
            }}
          />

          {/* Login Text*/}
          <TextInput
            style={styles.textinput_edit}
            label="Name"
            mode="outlined"
            raised
            theme={{
              roundness: 16,
              colors: {
                primary: '#6c757d',
                placeholder: '#6c757d',
                underlineColor: 'transparent',
              },
            }}
          />
          <TextInput
            style={styles.textinput_edit}
            label="Surname"
            mode="outlined"
            raised
            theme={{
              roundness: 16,
              colors: {
                primary: '#6c757d',
                placeholder: '#6c757d',
                underlineColor: 'transparent',
              },
            }}
          />
          <TextInput
            style={styles.textinput_edit}
            label="Password"
            mode="outlined"
            raised
            theme={{
              roundness: 16,
              colors: {
                primary: '#6c757d',
                placeholder: '#6c757d',
                underlineColor: 'transparent',
              },
            }}
          />
          <TextInput
            style={styles.textinput_edit}
            label="Re-Password"
            mode="outlined"
            raised
            theme={{
              roundness: 16,
              colors: {
                primary: '#6c757d',
                placeholder: '#6c757d',
                underlineColor: 'transparent',
              },
            }}
          />
        </View>

        <View style={{marginVertical: deviceSize.height / 40}}>
          <TouchableOpacity
            onPress={checkTextInput}
            style={{
              backgroundColor: '#1C7BDB',
              /* width: deviceSize.width / 1.1,
              height: deviceSize.height / 14, */
              display: 'flex',
              justifyContent: 'center',
              marginHorizontal: 15,
              borderRadius: 12,
              alignItems: 'center',
              height: deviceSize.height / 14,
            }}>
            <Text style={{color: 'white'}}>Start 7-Day Free Trial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MainPage')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 40,
              alignSelf: 'center',
            }}>
            <Text>Already have an account? </Text>
            <Text style={{color: '#1C7BDB', fontWeight: 'bold'}}>Log in</Text>
          </TouchableOpacity>
        </View>
        {/* new to freightest? Register (button) */}
      </ScrollView>
    </View>
  );
};

export default SignPageConst;
