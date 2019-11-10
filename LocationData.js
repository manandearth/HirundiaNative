import React, { useState, Component } from 'react';
import {
  Platform, Text, View, StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export const LocationData = () => {
  const [location, setLocation] = useState({ state: 'waiting...' });

  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setLocation({
        errorMessage: 'Permission to access location was denied',
      });
    }
    const reading = await Location.getCurrentPositionAsync({});
    setLocation({ reading });
  };
  getLocationAsync();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      color: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>
        {location.errorMessage ? location.errorMessage
          : location.state ? location.state : JSON.stringify(location)}
      </Text>
    </View>
  );
};
