import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  logo_text: {
    width: deviceSize.width / 1,
    height: deviceSize.height / 8,
    alignItems: 'center',
    marginTop: deviceSize.height / 14,
  },
  login_text: {
    color: '#135CB7',
    marginTop: deviceSize.height / 20,
    margin: deviceSize.width / 15,
    fontSize: 20,
    fontWeight:'bold'
  },

  input_info: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal:15,
    /*width: deviceSize.width / 1.1,
    height: deviceSize.height / 4,
    margin: deviceSize.width / 60,
    marginTop: deviceSize.height / 3, */
    flexDirection: 'column',

    
  },

  textinput_edit: {
    margin: deviceSize.height / 99,
  },

  skip_button: {
    marginLeft: 'auto',
    margin: 15,
    width: deviceSize.width / 5,
    height: deviceSize.height / 25,
    alignItems: 'center',
  },
  button_text: {
    color: 'white',
  },
  vector_time: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  header: {
    marginTop: deviceSize.height / 1.95,
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginTop: deviceSize.height / 60,
    textAlign: 'center',
    margin: 20,
    fontSize: 17,
  },
  next_button: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  login_option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: deviceSize.height / 10,
    justifyContent: 'center',
    margin: deviceSize.height / 20,
  },
  login_option_button: {
    borderColor: '#E5E5E5',
    borderWidth: 2,
    borderRadius: 12,
    width: deviceSize.width / 5,
    height: deviceSize.height / 18,
    backgroundColor: '#F2F2F2',
  },
  container:{
    alignItems:'center',
    backgroundColor:'white'
  }
});
