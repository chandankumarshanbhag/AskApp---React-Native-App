import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AvatarImage from './../assets/images/avatar.png';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';

export default function Avatar() {
  return (
    <View style={styles.root}>
      <Image
        source={AvatarImage}
        style={{height: '100%', width: '100%'}}
        resizeMode={ImageResizeMode.cover}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
});
