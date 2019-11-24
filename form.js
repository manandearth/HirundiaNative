import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { LocationData } from './LocationData.js';
import { styles } from './helper.js';
import { Picker } from 'react-native-picker-dropdown';

export const Form = () => {

    const StreetInput = () => {
  const [ street, setStreet ] = useState('');
      return(<View style={styles.view}>
               <Text style={styles.text}>{"Street : "}</Text>
             <TextInput
               style={styles.textInput}
               onChangeText={e => setStreet(e)}
               selectTextOnFocus={true}
               /* value={street} */
             />
           </View>);
  };

  const HouseNumberInput = () => {
  const [ houseNumber, setHouseNumber ] = useState('');
    return(<View style={styles.view}>
             <Text style={styles.text}>{"House number : "}</Text>
             <TextInput
               style={styles.textInput}
               onChangeText={e => setHouseNumber(e)}
               selectTextOnFocus={true}
               /* value={houseNumber} */
             />
           </View>);
  };

  const Height = () => {
    const [height, setHeight ] = useState('1');
    const heights = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];
    return(<View style={styles.view}>
             <Text style={styles.text}>Height: </Text>
             <Picker style={{width: 120}}
                     selectedValue={height}
                     onValueChange={(itemValue, itemIndex) => setHeight(itemValue)}
                     mode='dialog'>
               {heights.map(n => <Picker.Item key={'key-' + n} label={n} value={n}/>)}
             </Picker>
           </View>);
  };
   const Type = () => {
    const [type, setType ] = useState('window');
     const types= ['window', 'crack', 'gable', 'balcony', 'cornice', 'cables', ];
    return(<View style={styles.view}>
             <Text style={styles.text}>Type: </Text>
             <Picker style={{width: 120}}
                     selectedValue={type}
                     onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                     mode='dialog'>
               {types.map(n => <Picker.Item key={'key-' + n} label={n} value={n}/>)}
             </Picker>
           </View>);
   };
    const Species = () => {
    const [species, setSpecies ] = useState('Swallow');
      const specieses= ['Swallow', 'Swift', 'Martin' ];
    return(<View style={styles.view}>
             <Text style={styles.text}>Species: </Text>
             <Picker style={{width: 120}}
                     selectedValue={species}
                     onValueChange={(itemValue, itemIndex) => setSpecies(itemValue)}
                     mode='dialog'>
               {specieses.map(n => <Picker.Item key={'key-' + n} label={n} value={n}/>)}
             </Picker>
           </View>);
   };

  const Orientation = () => {
    const [ orientation, setOrientation ] = useState('N');
    const orientations = [ 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']; 
     return(<View style={styles.view}>
             <Text style={styles.text}>Orientation: </Text>
             <Picker style={{width: 120}}
                     selectedValue={orientation}
                     onValueChange={(itemValue, itemIndex) => setOrientation(itemValue)}
                     mode='dialog'>
               {orientations.map(n => <Picker.Item key={'key-' + n} label={n} value={n}/>)}
             </Picker>
           </View>);
  };

  const Quantity = () => {
    const [ quantity, setQuantity ] = useState('1');
    return(<View Style={{flex: 1}}>
             <Text style={{fontSize: 10}}>Each nest is represented by an entry/row in the database. In the case of multiple nests with the exact same specifications update this value:</Text>
             <View style={styles.view}>
               <Text style={styles.text}>Qty.: </Text>
               <TextInput style={styles.textInput}
                          selectedValue={quantity}
                          onChangeText={(e) => setQuantity(e)}
                          selectTextOnFocus={true}
                          value={quantity}>
               </TextInput>
             </View>
           </View>);
  };


  return(<View>
           <StreetInput />
           <HouseNumberInput />
           <LocationData />
           <Species/>
           <Height />
           <Orientation />
           <Type />
           <Quantity />
           
         </View>);
};

