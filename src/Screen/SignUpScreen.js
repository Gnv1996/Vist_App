import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import bg from '../Assest/bg.webp';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const SignUpScreen = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Implement your signup logic here
    if (password === confirm_password) {
      // Signup success
      Toast.show({
        type: 'success',
        text1: 'Registration Successful',
        text2: 'Welcome aboard!',
      });
      // Redirect to Login screen after successful registration
      navigation.navigate('login');
    } else {
      // Passwords don't match
      Toast.show({
        type: 'error',
        text1: 'Registration Failed',
        text2: 'Passwords do not match',
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.topBackground}>
        <View style={styles.content}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={text => setFullname(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirm_password}
            onChangeText={text => setConfirm_password(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={{padding: 10}}>
            <Text style={styles.textHeading}>
              You have an Account?{' '}
              <Text
                style={{color: 'black', fontWeight: 'bold'}}
                onPress={() => navigation.navigate('login')}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#5DADE2',
    width: '80%',
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  textHeading: {
    fontSize: 14,
    color: 'white',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
});

export default SignUpScreen;
