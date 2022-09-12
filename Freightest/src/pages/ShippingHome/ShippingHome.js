import {View, Button, FlatList, Text,Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Shipping.style';

import Config from 'react-native-config';
import ShippingCard from '../../components/ShippingCard';
import useFetch from '../../hooks/useFetch/useFetch';

import { useDispatch, useSelector } from 'react-redux';
import SearchFilter from '../../components/SearchFilter';

const ShippingHome = ({navigation,route}) => {
    
      const {data} = useFetch(Config.API_PRODUCT_URL)
     
      const handleProductSelect= (id) => {
          navigation.navigate("LoginPage",{id})
    
      } 
      //direkt item'ı geçirip de yapabilirdik...
      const renderProduct = ({item}) => <ShippingCard product={item}  />;
    
      console.log(data.title)
     
      return (
    
        <View style={styles.container}>
          
          <Text>Hellooo</Text>
          <View style={styles.body_container}>
          <Image 
          style={styles.image} 
          source={require('../../assets/Vector.png')}
        
          />
          <View >
              <Text style={styles.title}>123</Text>
              <Text style={styles.price}>safasf $</Text>
          </View>
          </View>

          <View style={styles.body_container}>
          <Image 
          style={styles.image} 
          source={require('../../assets/Vector.png')}
        
          />
          <View >
              <Text style={styles.title}>123</Text>
              <Text style={styles.price}>safasf $</Text>
          </View>
          </View>


          <View style={styles.body_container}>
          <Image 
          style={styles.image} 
          source={require('../../assets/Vector.png')}
        
          />
          <View >
              <Text style={styles.title}>123</Text>
              <Text style={styles.price}>safasf $</Text>
          </View>
          </View>
          <FlatList style={{backgroundColor:'black'}} renderItem={renderProduct}  />
        </View>
  
        
      );
    };
    
    export default ShippingHome;