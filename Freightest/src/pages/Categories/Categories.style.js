import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
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
});
