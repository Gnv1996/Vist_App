// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/Component/StackNavigator';
import {StatusBar} from 'react-native';
import {MyProvider} from './src/Context/MyContext';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <MyProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#0E86D4" barStyle="light-content" />
        <MyStack />
        <Toast ref={ref => Toast.setRef(ref)} />
      </NavigationContainer>
    </MyProvider>
  );
};

export default App;
