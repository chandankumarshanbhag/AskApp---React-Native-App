import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function BottomNav() {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <IconOutline name="home" size={26} color="#eee" />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconOutline name="appstore" size={26} color="#eee" />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconOutline name="message" size={26} color="#eee" />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconOutline name="setting" size={26} color="#eee" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(21,21,21,0.95)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
