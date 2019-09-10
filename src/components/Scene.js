import { View, Animated, Easing, Dimensions } from 'react-native';
import React from 'react';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { LinearGradient } from 'expo-linear-gradient';

class Scene extends React.Component {
  screenWidth = Dimensions.get('screen').width
  cloudsAnimValue = [new Animated.Value(1), new Animated.Value(1)]

  constructor() {
    super()
  }

  async componentDidMount() {
    this.animateClouds()
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

  render() {
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
        <LinearGradient
          colors={['#b9e0f7', '#68b3f9']}
          style={styles.gradient}>
        </LinearGradient>
        <Animated.View
          style={[styles.cloud, {
          transform: [{translateX: cloudPosX}],
          top: 140,
        }]}
        >
        <FontAwesomeIcon
          icon={faCloud}
          size={100}
          color={'#d9f5fc'} />
        </Animated.View>
        <Animated.View 
          style={[styles.cloud, {
            transform: [{translateX: cloudPosX2}],
            top: 80}
          ]}
        >
        <FontAwesomeIcon
          icon={faCloud}
          size={100}
          color={'#d9f5fc'} />
        </Animated.View>
        <LinearGradient
          colors={['#49842f', '#243f18']}
          style={styles.floor}>
        </LinearGradient>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  cloud: {
    position: 'absolute',
    top: 120
  },
  floor: {
    // 一_一 some un-hardcoded way of doing it here for landscape responsiveness
    position: 'absolute',
    width: 300,
    height: 250,
    borderRadius: 200,
    bottom: -180,
    transform: [
      { scaleX: 3,}
    ],
    backgroundColor: '#49842f',
  }
}

export default Scene;
