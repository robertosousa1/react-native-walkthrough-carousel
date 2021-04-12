import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: '300',
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 25,
  },
  bannerImage: {
    resizeMode: 'contain',
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bold: { fontWeight: 'bold' },
});

export default [
  {
    key: 1,
    title: <Text style={styles.title}>Create native apps</Text>,
    text: (
      <Text style={styles.text}>
        React Native combines the best parts of native development with React,{' '}
        <Text style={styles.bold}>a best-in-class JavaScript,</Text> library for
        building user interfaces.
      </Text>
    ),
    banner: (
      <Image
        source={require('../../example/assets/1.png')}
        style={styles.bannerImage}
      />
    ),
  },
  {
    key: 2,
    title: <Text style={styles.title}>Written in JavaScript</Text>,
    text: (
      <Text style={styles.text}>
        React primitives render to native platform UI,{' '}
        <Text style={styles.bold}>
          meaning your app uses the same native platform
        </Text>{' '}
        APIs other apps do.
      </Text>
    ),
    banner: (
      <Image
        source={require('../../example/assets/2.png')}
        style={styles.bannerImage}
      />
    ),
  },
  {
    key: 3,
    title: <Text style={styles.title}>Seamless Cross-Platform</Text>,
    text: (
      <Text style={styles.text}>
        React components wrap{' '}
        <Text style={styles.bold}>
          existing native code and interact with native APIs
        </Text>{' '}
        via React’s declarative UI paradigm and JavaScript.
      </Text>
    ),
    banner: (
      <Image
        source={require('../../example/assets/3.jpeg')}
        style={styles.bannerImage}
      />
    ),
  },
];
