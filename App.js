import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Valores from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: "bold" }} >APP para calcular o consumo de combustivel pelo valor.</Text>
      <Text/>
      <Valores/>  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ECCFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
