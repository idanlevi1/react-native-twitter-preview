import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import TwitterPreview from 'react-native-twitter-preview';
// import TwitterPreview from 'react-native-twitter-preview';

export default function App() {
  React.useEffect(() => {
    console.log('react-native-twitter-preview Example 🚀');
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>react-native-twitter-preview 🚀</Text>
      <TwitterPreview
        url={'https://twitter.com/elonmusk/status/1636162726140493825'}
        backgroundColor={'#272A35'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272A35',
    paddingVertical: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#1DA1F2',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
