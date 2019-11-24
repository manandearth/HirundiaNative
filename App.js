import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import GeneralText from './GeneralText.js';
import { Form } from './form.js';
export default function App() {
  // return (
  // <View style={styles.container}>
  // <Text>Robin is a NP (Ninkam-poop)</Text>
  // </View>
  // );

  const Photo = (uri) => <Image source={uri} style={{ width: 230, height: 140 }} />;

  
  return (<ScrollView>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                /* alignItems: 'center', */
                justifyContent: 'space-between',
                margin: 20,
              }}>
              <Text style={{fontSize: 30}}>Hirundia</Text>
              <Photo uri={'https://www.thehindu.com/sci-tech/energy-and-environment/article22245733.ece/ALTERNATES/FREE_960/24SMswallowjpg'} />
              <Form/>
            </View>
            <Photo uri={'https://facebook.github.io/react-native/img/favicon.png'} />
          </ScrollView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
