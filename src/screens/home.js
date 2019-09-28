import { Animated, Easing, StyleSheet, Text, View, TouchableWithoutFeedback, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { APP_CONSTANTS } from '../constants';
import Sound from 'react-native-sound';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
  };

  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
    this.springValue = new Animated.Value(0.3)
  }

  componentDidMount() {
    // @TODO extract to sound player
    this.closeSound = new Sound('close_pop.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      }
    })
    this.animateTitle()
  }

  animateTitle() {
    this.animatedValue.setValue(0)
    this.springValue.setValue(0.3)
    Animated.parallel([
      // after decay, in parallel:
      Animated.spring(this.springValue, {
          toValue: 1,
          friction: 1,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.easeOut,
          useNativeDriver: true
        }
      )
    ]).start(() => this.animateTitle())
  }

  goToUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
      } else {
        console.log('problem opening url: ' + url)
      }
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    // @TODO 一_一 back and fort osc, any better way to do this?
    const rotate = this.animatedValue.interpolate({
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
          style={styles.gradient}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              this.closeSound.play()
              navigate('Main')
            }}
          >
            <View style={styles.touchableView}>
              <Animated.Text
                key="title"
                style={[
                  styles.title,
                  {
                    transform: [{rotate}],
                  }
                ]}>
                CLUIMBISETI­™
              </Animated.Text>
              <Text key="cta"
                style={[styles.cta]}>
                TAP TO START
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Text
            style={[
              styles.cta,
              { fontSize: 14, marginBottom: 20 }
            ]}
            onPress={() => this.goToUrl('https://github.com/ivanangonoa123')}>
            github.com/ivanangonoa123
          </Text>
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
  touchableView: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Sniglet',
    fontSize: 50,
    textShadowColor: APP_CONSTANTS.mainBgColorDark,
    textShadowOffset: {
      width: 0,
      height: 5,
    },
    textShadowRadius:5,
    elevation: 3,
    color: 'white'
  },
  cta: {
    fontFamily: 'Sniglet',
    fontSize: 24,
    textShadowColor: APP_CONSTANTS.mainBgColorDark,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius:5,
    elevation: 1,
    color: 'white'
  }
});
export default HomeScreen;
