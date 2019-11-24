import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export const styles =  StyleSheet.create({
    view: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
      fontSize: 20
    },
    textInput: {
      height: 30,
      width: 100,
      borderRadius: 3,
      borderColor: 'gray',
      borderWidth: 1 }
  });

