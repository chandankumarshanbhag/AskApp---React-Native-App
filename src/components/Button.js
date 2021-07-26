import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Button({children, onClick, style = null}) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#47b778',
    borderRadius: 12,
    color: '#fff',
    margin: 10,
    minWidth: 100,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
});
