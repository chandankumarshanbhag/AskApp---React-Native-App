import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Button from '../components/Button';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';
import IntroBackground from './../assets/images/intro_background.png';

export default function Intro({navigation}) {
  return (
    <View style={styles.root}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={IntroBackground}
          style={styles.bgImage}
          resizeMode={ImageResizeMode.contain}
        />
        <Text style={styles.title}>Find the answer just one tap!</Text>
        <Text style={styles.subTitle}>
          Have something to share with a question? Now you can play here.
        </Text>
      </View>
      <View style={{height: 80}}>
        <Button
          onClick={() => {
            navigation.navigate('Home');
          }}>
          Get started
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#121418',
    padding: 10,
    flex: 1,
    color: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {},
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
  subTitle: {
    margin: 10,
    fontSize: 16,
    color: '#eee',
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
  },
});
