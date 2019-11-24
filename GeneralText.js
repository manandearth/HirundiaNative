import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class GeneralText extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (<View>
              <Text>Street: </Text>
              <TextInput
                style={{ height: 40 }}
                placeholder="Street name here"
                onChangeText={text => this.setState({ text })}
              />
              <Text style={{ padding: 10, fontSize: 42 }}>
                {this.state.text
	          .split(' ')
	          .map(word => word && '🍕')
	          .join(' ')}
              </Text>
            </View>
    );
  }
}
