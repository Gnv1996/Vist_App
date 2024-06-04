import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from '../Screen/HomeScreen';
import AboutScreen from '../Screen/AboutScreen';
import LoginScreen from '../Screen/Loginscreen';
import SignUpScreen from '../Screen/SignUpScreen';
import MyDrawer from './DrawerNavigator';
import BookingScreen from '../Screen/BookingScreen';
import PaymentGatewayScreen from '../Screen/PaymentGatewayScreen';
import HotelScreen from '../Screen/HotelScreen';
import PayBill from '../Screen/PayBill';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="hotel"
        component={HotelScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={AboutScreen}
        options={{title: 'Welcome Trip'}}
      />
      <Stack.Screen
        name="about"
        component={AboutScreen}
        options={{title: 'Tourist Place'}}
      />

      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={{title: 'Sign Up'}}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{title: 'Cart'}} // Change the title here
      />
      <Stack.Screen
        name="Payment"
        component={PaymentGatewayScreen}
        options={{title: 'Pay Now'}} // Change the title here
      />
      <Stack.Screen
        name="Pay"
        component={PayBill}
        options={{title: 'Pay'}} // Change the title here
      />
    </Stack.Navigator>
  );
}

export default MyStack;
