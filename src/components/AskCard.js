import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AvatarImage from './../assets/images/avatar.png';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';
import Button from './Button';

export default function AskCard() {
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
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
            }}>
            <Text style={styles.placeholderText}>
              Ask & discuss everything here !
            </Text>
          </View>
          <Button style={{alignSelf: 'center'}}>Post</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: 10,
    padding: 30,
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    borderRadius: 22,
    marginTop: 10,
    borderWidth: 5,
    borderColor: '#eee',
  },
  avatarContainer: {
    backgroundColor: '#fff',
    width: 60,
    borderRadius: 30,
    height: 60,
    position: 'absolute',
    top: 10,
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
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontFamily: 'OpenSans-Light',
  },
});
