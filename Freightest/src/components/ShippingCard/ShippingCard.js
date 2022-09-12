import { View, Text,Image, TouchableWithoutFeedback,ActivityIndicator } from 'react-native'
import React from 'react'
import styles from "../ShippingCard/Shipping.style"
import Loading from '../Loading/Loading'
const ShippingCard = ({product,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
          
      <View style={styles.container}>
      <ActivityIndicator size="large" />
          <Image 
          style={styles.image} 
          source={require('../../assets/Vector.png')}
        
          />
          <View style={styles.body_container}>
              <Text style={styles.title}>123</Text>
              <Text style={styles.price}>safasf $</Text>
          </View>
          <Image 
          style={styles.image} 
          source={require('../../assets/Vector.png')}
        
          />
          <View style={styles.body_container}>
              <Text style={styles.title}>123</Text>
              <Text style={styles.price}>safasf $</Text>
          </View>
      </View>
      <Image 
          style={styles.image} 
          source={require('../../assets/Vector.png')}
        
          />
          <View style={styles.body_container}>
              <Text style={styles.title}>123</Text>
              <Text style={styles.price}>safasf $</Text>
          </View>
    </TouchableWithoutFeedback>
  )
}

export default ShippingCard;