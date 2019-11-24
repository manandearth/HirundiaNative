import React, { useState, Component } from 'react';
import {
  Platform, Text, TextInput, View, StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { styles } from './helper.js';
export const LocationData = () => {
  const [location, setLocation] = useState({ state: 'waiting...' });

  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setLocation({
        errorMessage: 'Permission to access location was denied',
      });
    }
    const reading = await Location.getCurrentPositionAsync();
    setLocation({ reading });
    
  }; 
  getLocationAsync();


  return (
    <View >
      <View style={styles.view}>
        <Text style={styles.text}>Longitude: </Text>
        <TextInput style={styles.textInput}
                   selectTextOnFocus={true}
                   value={location.errorMessage ? location.errorMessage
                     : location.state ? location.state : JSON.stringify(location.reading.coords.longitude)}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Latitude: </Text>
        <TextInput style={styles.textInput}
                   selectTextOnFocus={true}
                   value={location.errorMessage ? location.errorMessage
                     : location.state ? location.state : JSON.stringify(location.reading.coords.latitude)}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>Time stamp: </Text>
        <TextInput style={styles.textInput}
                   selectTextOnFocus={true}
                   value={location.errorMessage ? location.errorMessage
                     : location.state ? location.state : JSON.stringify(location.reading.timestamp)}
        />
      </View>
    </View>
  );
};
