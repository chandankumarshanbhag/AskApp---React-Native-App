import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AvatarImage from './../assets/images/avatar.png';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';
import Button from './Button';

export default function Post({desc}) {
  return (
    <View style={styles.root}>
      <View style={styles.avatarContainer}>
        <Image
          source={AvatarImage}
          style={styles.avatar}
          resizeMode={ImageResizeMode.cover}
        />
      </View>
      <View style={styles.card}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text style={styles.placeholderText}>{desc}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    paddingHorizontal: 10,
    flex: 1,
  },
  card: {
    width: 260,
    height: 100,
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 22,
    borderWidth: 5,
    borderColor: '#eee',
  },
  avatarContainer: {
    backgroundColor: '#fff',
    width: 60,
    borderRadius: 30,
    height: 60,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    zIndex: 999,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#fff',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#111',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
  },
});
