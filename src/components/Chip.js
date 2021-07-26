import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Chip({title}) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 10,
    marginHorizontal: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(200,200,200,0.2)',
  },
  text: {
    color: '#fff',
    fontFamily: 'OpenSans-Light',
    fontSize: 14,
    textAlign: 'center',
  },
});
