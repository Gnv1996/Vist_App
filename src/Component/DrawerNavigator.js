import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {StyleSheet, Text, View, Image} from 'react-native';
import HomeScreen from '../Screen/HomeScreen';
import man from '../Assest/man.png';
import LoginScreen from '../Screen/SignUpScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HotelScreen from '../Screen/HotelScreen';
import ContactScreen from '../Screen/ContactScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import AboutScreen from '../Screen/AboutScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={props => {
        return (
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View
                style={{
                  marginTop: 50,
                  marginLeft: 5,
                }}>
                <Image source={man} style={styles.avatar} />
                <View>
                  <Text style={styles.drawerTexts}>John Doe</Text>
                  <Text style={styles.drawerText}>john.doe@example.com</Text>
                </View>
              </View>
            </View>
            <DrawerItemList {...props} />
          </View>
        );
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0E86D4',
        },
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Home"
        component={AboutScreen}
        options={{
          title: 'Welcome Trip',
          drawerLabel: 'Home',
          drawerIcon: ({color, size}) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Hotel"
        component={HotelScreen}
        options={{
          drawerLabel: 'Hotel',
          drawerIcon: ({color, size}) => (
            <Icon name="bed-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerLabel: 'Contact',
          drawerIcon: ({color, size}) => (
            <Icon name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({color, size}) => (
            <Icon name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Signup"
        component={LoginScreen}
        options={{
          drawerLabel: 'Login',
          drawerIcon: ({color, size}) => (
            <Icon name="log-out-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginBottom: 20,
    backgroundColor: '#0E86D4',
    padding: 20,
  },
  drawerText: {
    fontSize: 16,
    marginTop: 3,
    color: '#fff',
  },
  drawerTexts: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 3,
    color: '#fff',
  },
  avatar: {
    width: 74,
    height: 74,
    borderRadius: 32,
  },
});

export default MyDrawer;
