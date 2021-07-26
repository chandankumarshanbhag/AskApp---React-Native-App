import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import Chip from '../components/Chip';
import AskCard from '../components/AskCard';
import Post from '../components/Post';

export default function Home() {
  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.main}>
        <View style={styles.topics}>
          <ScrollView
            horizontal
            style={{paddingHorizontal: 10}}
            showsHorizontalScrollIndicator={false}>
            <Chip title="🧠 Conspiration" />
            <Chip title="💎 Motivation" />
            <Chip title="🎉 Party" />
            <Chip title="♥️ Dating" />
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{height: 280}}>
              <AskCard />
            </View>
            <View style={{height: 280}}>
              <View
                style={{
                  height: 60,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  Popular Questions
                </Text>
                <Text
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  View all
                </Text>
              </View>

              <View style={{flex: 1}}>
                <ScrollView horizontal style={{paddingHorizontal: 20}}>
                  <Post desc="UFO is not real. do you agree with that?" />
                  <Post desc="What do you think about illuminati" />
                  <Post desc="Who is binod" />
                  <Post desc="UFO is not real. do you agree with that?" />
                  <Post desc="UFO is not real. do you agree with that?" />
                </ScrollView>
              </View>
            </View>
            <View style={{height: 80}} />
          </ScrollView>
        </View>
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#121418',
    // padding: 10,
    flex: 1,
    color: '#fff',
    width: '100%',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  },
  topics: {
    height: 60,
    width: '100%',
  },
});
