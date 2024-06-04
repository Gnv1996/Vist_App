// src/components/HotelCard.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HotelCard = ({id, name, rating, description, image, price, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)} style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.names}>{description}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.rate}>
            <Icon name="star" size={20} style={{color: 'yellow'}} />
            {rating}
          </Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
        <TouchableOpacity onPress={() => onPress(id)} style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  names: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  rate: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  price: {
    fontSize: 30,
    marginBottom: 10,
    marginLeft: 170,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0E86D4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HotelCard;
