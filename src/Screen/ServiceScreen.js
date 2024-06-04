import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ServiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, World! Service Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ServiceScreen;
