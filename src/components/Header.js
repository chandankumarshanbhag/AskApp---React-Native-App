import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from './Avatar';
import DottedMenu from './DottedMenu';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
export default function Header() {
  return (
    <View style={styles.root}>
      <DottedMenu />
      <View style={styles.title}>
        <Text style={styles.text1}>Current location</Text>
        <View style={{flexDirection: 'row', margin: 8}}>
          <IconOutline name="environment" size={20} color="#4caf50" />
          <Text style={styles.text2}>&nbsp;&nbsp; Kundapur, Udupi</Text>
        </View>
      </View>
      <Avatar />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#fff',
    fontFamily: 'OpenSans-Light',
    fontSize: 12,
    textAlign: 'center',
  },
  text2: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
});
