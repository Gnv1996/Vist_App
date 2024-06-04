import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {MyContext} from '../Context/MyContext';

const PaymentScreen = ({route, navigation}) => {
  const {hotel, checkInDate, checkOutDate, totalPrice} = route.params;

  const {setHotelName, setPrices} = useContext(MyContext);
  const handlePaymentSuccess = () => {
    setHotelName(hotel.name);
    setPrices(totalPrice);
    navigation.navigate('Pay');
  };

  return (
    <View style={styles.container}>
      <Image source={hotel.image} style={styles.image} />
      <Text style={styles.title}>Payment Gateway</Text>
      <Text style={styles.details}>
        <Text style={styles.subHeading}>Hotel-:</Text> {hotel.name}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.subHeading}>Check-in Date-:</Text> {checkInDate}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.subHeading}>Check-out Date-: </Text>
        {checkOutDate}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.subHeading}>Total Price-: ₹ </Text>
        {totalPrice}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={handlePaymentSuccess}>
        <Text style={styles.btn_Text}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 5,
    color: 'black',
  },
  details: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 7,
  },
  btn_Text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentScreen;
