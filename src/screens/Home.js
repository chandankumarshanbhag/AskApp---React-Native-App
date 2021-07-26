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
            <View style={{width: 40}} />
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{height: 280}}>
              <AskCard />
            </View>
            <View style={{height: 240}}>
              <View style={styles.titleBar}>
                <Text style={styles.populatQuetions}>Popular Questions</Text>
                <Text style={styles.viewAll}>View all</Text>
              </View>

              <View style={{flex: 1, width: '100%'}}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  style={{paddingHorizontal: 20, paddingRight: 100}}>
                  <Post desc="UFO is not real. do you agree with that?" />
                  <Post desc="What do you think about illuminati" />
                  <Post desc="Who is binod" />
                  <Post desc="UFO is not real. do you agree with that?" />
                  <Post desc="UFO is not real. do you agree with that?" />
                  <View style={{width: 40}} />
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
  titleBar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  populatQuetions: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
  },
  viewAll: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
});
