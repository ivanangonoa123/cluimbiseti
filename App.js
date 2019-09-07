import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Press Start 2P': require('./assets/fonts/PressStart2P-Regular.ttf'),
    });
    
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#7ad4d6', '#388b8f']}
          style={styles.gradient}>
        {
          this.state.fontLoaded ? (<Text style={styles.title}>CLUIMBISETI</Text>) : null
        }
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1
  },
  title: {
    fontFamily: 'Press Start 2P',
    fontSize: 30,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius:10,
    elevation: 5,
    color: '#fff'
  }
});
