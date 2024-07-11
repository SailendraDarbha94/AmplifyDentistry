import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const TestCard = ({ imageUrl, text }:any) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', // Aligns text vertically
    alignItems: 'center', // Aligns text horizontally
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TestCard;
