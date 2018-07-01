import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {
    renderList() {
      const names = [
        'Jorge',
        'João de Deus',
        'Zezé',
        'Outros'
      ];

      const textElements = names.map(name => {
        return <Text key={name}>{ name }</Text>
      });

      return textElements;
    }

  render() {
    return (
      <View>
        <Header title="Horários" />
        { this.renderList() }
      </View>
    );
  }
}
