import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  button_list: {
    backgroundColor: '#F3F3F3',
    margin: 6,
    padding: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 8,
  },

  arrow: {
    alignSelf: 'center',
    position: 'absolute',
    right: deviceSize.width / 14,
    color: '#2C2D30',
  },

  logout: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FF5050',
    backgroundColor: '#FFF2F2',
    margin: 6,
    padding: 15,
    marginHorizontal: 15,
  },
});
