import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

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
        'Press Start 2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
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
            duration: 2000,
            easing: Easing.easeOut
          }
        )
      ]).start(() => this.animateTitle())
    }
  
    render() {
      // 一_一 back and fort osc, any better way to do this?
      const rotateZ = this.animatedValue.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: ['0deg', '-5deg', '0deg', '5deg', '0deg']
      })
      const springFontSize = this.springValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [30, 25, 30]
      })
      return (
        <View style={styles.container}>
          <LinearGradient
            colors={['#b9e0f7', '#68b3f9']}
            style={styles.gradient}>
            {
              this.state.fontLoaded ? [
              <Text key="cta"
                style={[styles.cta]}>
                  Main
              </Text>
              ] :
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
      color: 'white'
    },
    cta: {
      fontFamily: 'Press Start 2P',
      fontSize: 15,
      color: 'white'
    }
  });
  export default MainScreen;
