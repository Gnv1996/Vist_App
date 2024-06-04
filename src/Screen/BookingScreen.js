import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookingScreen = ({route, navigation}) => {
  const {hotel} = route.params;

  if (!hotel || !hotel.image) {
    Toast.show({
      type: 'error',
      text1: 'Hotel Data Error',
      text2: 'Unable to load hotel image. Please try again.',
    });
    return null; // Prevent rendering if hotel or image data is missing
  }

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);

  const handleCheckInDateChange = (event, selectedDate) => {
    setShowCheckInPicker(false);
    if (selectedDate) {
      setCheckInDate(selectedDate);
      if (selectedDate >= checkOutDate) {
        setCheckOutDate(selectedDate);
      }
    }
  };

  const handleCheckOutDateChange = (event, selectedDate) => {
    setShowCheckOutPicker(false);
    if (selectedDate) {
      if (selectedDate > checkInDate) {
        setCheckOutDate(selectedDate);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Invalid Date Selection',
          text2: 'Checkout date must be after the check-in date.',
        });
      }
    }
  };

  const formatDate = date => {
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    return `${day}/${month}/${date.getFullYear()}`;
  };

  const calculatePrice = () => {
    const timeDiff = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return hotel.price * diffDays;
  };

  const handleBookingHotel = () => {
    if (checkOutDate > checkInDate) {
      const totalPrice = calculatePrice();
      navigation.navigate('Payment', {
        hotel,
        checkInDate: formatDate(checkInDate),
        checkOutDate: formatDate(checkOutDate),
        totalPrice,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Invalid Date Selection',
        text2: 'Checkout date must be after the check-in date.',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          typeof hotel.image === 'string' ? {uri: hotel.image} : hotel.image
        }
        style={styles.image}
      />
      <Text style={styles.name}>{hotel.name}</Text>
      <Text style={styles.description}>{hotel.description}</Text>
      <View style={styles.datePickerContainer}>
        <Text style={styles.dateLabel}>Check-in Date:</Text>
        <TouchableOpacity onPress={() => setShowCheckInPicker(true)}>
          <TextInput
            style={styles.dateInput}
            value={formatDate(checkInDate)}
            editable={false}
          />
        </TouchableOpacity>
        {showCheckInPicker && (
          <DateTimePicker
            value={checkInDate}
            mode="date"
            display="default"
            onChange={handleCheckInDateChange}
          />
        )}
      </View>
      <View style={styles.datePickerContainer}>
        <Text style={styles.dateLabel}>Check-out Date:</Text>
        <TouchableOpacity onPress={() => setShowCheckOutPicker(true)}>
          <TextInput
            style={styles.dateInput}
            value={formatDate(checkOutDate)}
            editable={false}
          />
        </TouchableOpacity>
        {showCheckOutPicker && (
          <DateTimePicker
            value={checkOutDate}
            mode="date"
            display="default"
            minimumDate={checkInDate}
            onChange={handleCheckOutDateChange}
          />
        )}
      </View>
      <Text style={styles.price}>Total Price: ₹{calculatePrice()}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleBookingHotel}>
        <Text style={styles.btn_Text}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  datePickerContainer: {
    marginBottom: 20,
  },
  dateLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: 'gray',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default BookingScreen;
