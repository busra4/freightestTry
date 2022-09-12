import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategorieCard.style';
const ProductCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.all_container}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: category.strCategoryThumb}}
          />
          <View style={styles.body_container}>
            <Text style={styles.text}>{category.strCategory}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
