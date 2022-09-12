import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({

container:{
    
    marginTop:deviceSize.height / 20
}
});
