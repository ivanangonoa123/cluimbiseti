import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { APP_CONSTANTS } from '../constants';

class HomeScreen extends React.Component {
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
      // import at app level
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
      const {navigate} = this.props.navigation;
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
              colors={[APP_CONSTANTS.mainBgColor, APP_CONSTANTS.mainBgColorDark]}
              style={styles.gradient}>
          <TouchableWithoutFeedback
            onPress={() => navigate('Main')}
              style={styles.touchable}>
              <View style={styles.touchableView}>
                {
                  this.state.fontLoaded ? [
                  <Animated.Text
                    key="title"
                    style={[
                      styles.title,
                      {
                        transform: [{rotateZ}],
                      }
                    ]}>
                    CLUIMBISETI
                  </Animated.Text>,
                  <Text key="cta"
                    style={[styles.cta]}>
                    TAP TO START
                  </Text>
                  ] :
                  null
                }
              </View>
          </TouchableWithoutFeedback>
          </LinearGradient>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    gradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    touchable: {
      width: '100%',
      height: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontFamily: 'Press Start 2P',
      fontSize: 30,
      textShadowColor: "#000",
      textShadowOffset: {
        width: 0,
        height: 5,
      },
      textShadowRadius:5,
      elevation: 3,
      color: 'white'
    },
    cta: {
      fontFamily: 'Press Start 2P',
      fontSize: 15,
      color: 'white'
    }
  });
  export default HomeScreen;
