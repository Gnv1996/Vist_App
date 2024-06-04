import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {MyContext} from '../Context/MyContext';

const PayBill = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const {hotelName, price} = useContext(MyContext) || {
    hotelName: 'Hotel Name',
    price: 0,
  };

  const handlePayment = method => {
    setPaymentMethod(method);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setUpiId('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setError('');
  };

  const validateInputs = () => {
    if (paymentMethod === 'UPI' && upiId === '') {
      setError('UPI ID is required');
      return false;
    }
    if (
      paymentMethod === 'Card' &&
      (cardNumber === '' || expiryDate === '' || cvv === '')
    ) {
      setError('All card details are required');
      return false;
    }
    setError('');
    return true;
  };

  const handlePay = () => {
    if (validateInputs()) {
      // Handle payment logic here
      Alert.alert(
        'Payment Successful',
        `You have successfully paid ₹${price}`,
        [{text: 'OK', onPress: handleCloseModal}],
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Options</Text>
      <Text style={styles.title}>{hotelName}</Text>
      <Text style={styles.price}>Total Price: ₹{price}</Text>

      <View style={styles.payOptions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePayment('UPI')}>
          <Text style={styles.buttonText}>UPI Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePayment('Card')}>
          <Text style={styles.buttonText}>Card Payment</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>You have to pay: ₹{price}</Text>
            <Text style={styles.modalText}>Enter {paymentMethod} details</Text>
            {error !== '' && <Text style={styles.errorText}>{error}</Text>}
            {paymentMethod === 'UPI' && (
              <TextInput
                style={styles.input}
                placeholder="Enter UPI ID"
                keyboardType="default"
                value={upiId}
                onChangeText={setUpiId}
              />
            )}
            {paymentMethod === 'Card' && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Card Number"
                  keyboardType="numeric"
                  value={cardNumber}
                  onChangeText={setCardNumber}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Expiry Date (MM/YY)"
                  keyboardType="numeric"
                  value={expiryDate}
                  onChangeText={setExpiryDate}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter CVV"
                  keyboardType="numeric"
                  value={cvv}
                  onChangeText={setCvv}
                />
              </>
            )}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handlePay}>
                <Text style={styles.buttonText}>Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleCloseModal}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  price: {
    fontSize: 22,
    marginBottom: 20,
    color: '#495057',
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
    color: 'black',
    borderWidth: 2,
    borderColor: 'gray',
    padding: 15,
    borderRadius: 7,
  },
  payOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    color: '#495057',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    borderColor: '#ced4da',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
});

export default PayBill;
