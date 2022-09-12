import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
const CircleProgress = () => {
  return(
    <View style={styles.container}>
             
      
      
      <View style={styles.progressLayer}>
      <View>
    
          </View>
      </View>
    
      <View style={styles.offsetLayer}>
   
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'orange',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  progressLayer: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#3498db',
    borderTopColor: '#3498db',
    transform:[{rotateZ: '-45deg'}]
  },
  offsetLayer: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'grey',
    borderTopColor: 'grey',
    transform:[{rotateZ: '-135deg'}]
  }
});

export default CircleProgress;