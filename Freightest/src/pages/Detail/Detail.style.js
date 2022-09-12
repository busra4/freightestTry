import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    position: absolute,

  },
  body_container: {
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 22,
  },
  desc: {
    fontStyle: 'italic',
    marginVertical: 25,
  
  },
});
