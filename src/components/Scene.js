import { View, Animated, Text, Easing, Dimensions, Alert } from 'react-native';
import React from 'react';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import AnimatedGradient from './AnimatedGradient';

const AnimatedGradientView = Animated.createAnimatedComponent(AnimatedGradient);
class Scene extends React.Component {
  screenWidth = Dimensions.get('screen').width
  screenHeight = Dimensions.get('screen').height
  cloudsAnimValue = [new Animated.Value(1), new Animated.Value(1)]
  dayCycleAnimValue = new Animated.Value(0)

  constructor() {
    currentDate = new Date()
    super()
  }

  componentDidMount() {
    this.animateDayCycle()
    this.animateClouds()
  }

  animateDayCycle() {
    const currentMinutes = moment(new Date()).format("H") * 60; // kinda current time in minutes
    this.dayCycleAnimValue.setValue(currentMinutes)

    Animated.timing(
      this.dayCycleAnimValue, {
        toValue: currentMinutes + 10,
        duration: 600000 // 10 minutes
      }
    ).start(() => this.animateDayCycle())
  }

  animateClouds() {
    this.cloudsAnimValue[0].setValue(1),
    this.cloudsAnimValue[1].setValue(1)

    Animated.parallel([
      Animated.timing(
        this.cloudsAnimValue[0], {
          toValue: 0,
          duration: Math.random() * 5000 + 12000,
          easing: Easing.linear,
          delay: Math.random() * 2000
        }
      ),
      Animated.timing(
        this.cloudsAnimValue[1], {
          toValue: 0,
          duration: Math.random() * 5000 + 12000,
          easing: Easing.linear,
          delay: Math.random() * 2000
        }
      )
    ]).start(() => this.animateClouds());
  }

  isNight() {
    // @TODO make realtime
    const date = moment(currentDate).format("H");
    return date < 6 || date > 20
  }

  render() {
    const dayGradient = this.dayCycleAnimValue.interpolate({
      inputRange: [0, 12*60, 24*60],
      outputRange: ['rgb(20, 21, 24)', 'rgb(104, 195, 235)', 'rgb(20, 21, 24)'],
    })
    const dayGradientDark = this.dayCycleAnimValue.interpolate({
      inputRange: [0, 12*60, 24*60],
      outputRange: ['rgb(7, 69, 94)', 'rgb(247, 254, 197)', 'rgb(7, 69, 94)'],
    })
    const cloudPosX = this.cloudsAnimValue[0].interpolate({
      inputRange: [0, 1],
      outputRange: [-100, this.screenWidth + 100],
      extrapolate: "clamp"
    })
    const cloudPosX2 = this.cloudsAnimValue[1].interpolate({
      inputRange: [0, 1],
      outputRange: [-100, this.screenWidth + 100],
      extrapolate: "clamp"
    })
    return(
      <View style={styles.container}>
        <AnimatedGradientView
          color1={dayGradient}
          color2={dayGradientDark}
          style={styles.gradient}>
        </AnimatedGradientView>
        {
          !this.isNight() && ([
            <Animated.View
              key={"cloud1"}
              style={[styles.cloud, {
                transform: [{translateX: cloudPosX}],
                top: 140,
              }]}
            >
            <FontAwesomeIcon
              icon={faCloud}
              size={100}
              color={"#d9f5fc"}
            />
            </Animated.View>,
            <Animated.View
              key={"cloud2"}
              style={[styles.cloud, {
                transform: [{translateX: cloudPosX2}],
                top: 80}
              ]}
            >
            <FontAwesomeIcon
              icon={faCloud}
              size={100}
              color={"#d9f5fc"}
            />
            </Animated.View>
          ])
        }
        <LinearGradient
          colors={["#49842f", "#243f18"]}
          style={styles.floor}>
        </LinearGradient>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    height: this.screenHeight
  },
  gradient: {
    flex: 1,
  },
  cloud: {
    position: 'absolute',
    top: 120
  },
  floor: {
    // @TODO 一_一 some un-hardcoded way of doing it here for landscape responsiveness
    position: 'absolute',
    width: 300,
    height: 250,
    borderRadius: 300,
    bottom: -25,
    transform: [
      { scaleX: 3,}
    ],
    backgroundColor: '#49842f',
  }
}

export default Scene
