import React from 'react';
import { StyleSheet, Text, View, Animated, Image, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
    this.springValue = new Animated.Value(0.3)
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'Press Start 2P': require('./assets/fonts/PressStart2P-Regular.ttf'),
    });

    this.setState({ fontLoaded: true })
    this.animateTitle()
  }

  animateTitle() {
    this.animatedValue.setValue(0)
    this.springValue.setValue(0.3)
    Animated.parallel([
      // after decay, in parallel:
      Animated.spring(this.springValue, {
          toValue: 1,
          friction: 1
        }
      ),

      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 4000,
          easing: Easing.easeOut
        }
      )
    ]).start(() => this.animateTitle())
  }

  render() {
    const rotateZ = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '10deg', '0deg']
    })
    const springFontSize = this.springValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [30, 25, 30]
    })
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#7ad4d6', '#296b6d']}
          style={styles.gradient}>
          {
            this.state.fontLoaded ? (
            <Animated.Text
              style={[
                styles.title,
                {
                  transform: [{rotateZ}],
                }
              ]}>
              CLUIMBISETI
            </Animated.Text>) :
            null
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
    flexWrap: "nowrap",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius:10,
    elevation: 5,
    color: '#fff'
  }
});
