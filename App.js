import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LocationData } from './LocationData';

export default function App() {
  // return (
  // <View style={styles.container}>
  // <Text>Robin is a NP (Ninkam-poop)</Text>
  // </View>
  // );

  return (
    <LocationData />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
