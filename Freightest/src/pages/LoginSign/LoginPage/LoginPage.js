import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './LoginPage.style';
import {TextInput, Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

const deviceSize = Dimensions.get('window');
const LoginPage = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [textInputMail, setTextInputMail] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');

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

  return (
    <View style={{backgroundColor: 'white'}}>
      {/* logo + company name*/}
      <View style={styles.logo_text}>
        <Image source={require('../../../assets/logoCompName.png')} />
        {/* description text*/}
        <Text style={{margin: 14}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          eleifend malesuada ornare.
        </Text>
      </View>

      <Text style={styles.login_text}>Log In</Text>
      <View style={styles.input_info}>
        <TextInput
          onChangeText={value => setTextInputMail(value)}
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
          onChangeText={value => setTextInputPassword(value)}
          style={styles.textinput_edit}
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
          label="Password"
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />
      </View>

      {/* input company e-mail*/}
      {/* input password*/}
      {/* remeber me click  + forgot password?*/}
      <View
        style={{
          flexDirection: 'row',
          marginBottom: deviceSize.width / 60,
          marginHorizontal: 10,
        }}>
        <Checkbox
          style={{width: 10}}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}>
          {' '}
        </Checkbox>
        <Text style={{marginTop: 7}}>Remember me</Text>
        <TouchableOpacity
          style={{marginLeft: deviceSize.height / 20}}
          onPress={() => navigation.navigate('SignPageConst')}>
          <Text
            style={{
              color: '#5DBFFF',
              marginHorizontal: 80,
              marginVertical: 10,
            }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* login button*/}

      <TouchableOpacity
        onPress={checkTextInput}
        style={{
          backgroundColor: '#1C7BDB',
          width: deviceSize.width / 1.1,
          height: deviceSize.height / 14,
          borderRadius: 12,
          alignItems: 'center',
          margin: deviceSize.width / 50,
        }}>
        <Text style={{color: 'white', marginTop: 14}}>Log In</Text>
      </TouchableOpacity>
      {/* facebook google iphone button for login*/}
      <View style={styles.login_option}>
        <TouchableOpacity style={{flex: deviceSize.height / 2}}>
          <TextInput.Icon
            style={styles.login_option_button}
            name="facebook"
            color="#BABDC2"></TextInput.Icon>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: deviceSize.height / 2}}>
          <TextInput.Icon
            style={styles.login_option_button}
            name="google"
            color="#BABDC2"></TextInput.Icon>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: deviceSize.height / 2}}>
          <TextInput.Icon
            style={styles.login_option_button}
            name="apple"
            color="#BABDC2"></TextInput.Icon>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignPageConst')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 40,
          alignSelf: 'center',
        }}>
        <Text>New to Freightest? </Text>
        <Text style={{color: '#1C7BDB'}}>Register</Text>
      </TouchableOpacity>

      {/* new to freightest? Register (button) */}

      <TouchableOpacity
        style={styles.skip_button}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text>skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
