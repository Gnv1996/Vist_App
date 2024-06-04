import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FooterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>
        © {new Date().getFullYear()} Gnv Private Limited. All rights reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default FooterScreen;
