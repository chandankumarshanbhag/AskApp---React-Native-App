import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DottedMenu() {
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.row}>
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    margin: 4,
    height: 6,
    width: 6,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
});
