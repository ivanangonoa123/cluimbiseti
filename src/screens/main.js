import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusSquare, faCookieBite, faCloud } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import * as Progress from 'react-native-progress';

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
          </LinearGradient>
          {/* extract clouds, randomize and animate */}
          <View 
            style={[styles.cloud, {
              right: 20,
              top: 110}
            ]}>
            <FontAwesomeIcon
              icon={faCloud}
              size={100}
              color={'#d9f5fc'}/>
          </View>
          <View style={[styles.cloud, {
              left: 20,
              top: 90
          }]}>
          <FontAwesomeIcon
            icon={faCloud}
            size={100}
            color={'#d9f5fc'}/>
          </View>
          <View style={styles.topMenu}>
            <View style={styles.barWrapper}>
              <FontAwesomeIcon
                icon={faCookieBite}
                style={styles.icon}
                size={32}
                color={'#e88a43'}/>
              <Progress.Bar
                style={styles.bar}
                borderWidth={2}
                borderColor={rgb(83, 137, 24)}
                progress={0.3}
                color={'#74c122'}
                width={200}
                height={20}/>
            </View>
            <View style={styles.barWrapper}>
              <FontAwesomeIcon
                icon={faPlusSquare}
                style={styles.icon}
                size={32}
                color={'#d11b1b'}/>
              <Progress.Bar
                style={styles.bar}
                borderWidth={2}
                borderColor={rgb(147, 19, 19)}
                progress={0.8}
                color={'#d11b1b'}
                width={200}
                height={20}/>
            </View>
          </View>
            <LinearGradient
              colors={['#49842f', '#243f18']}
              style={styles.floor}>
            </LinearGradient>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex: 1,
    },
    cloud: {
      position: 'absolute',
      right: 0,
      top: 120
    },
    topMenu: {
      position: 'absolute',
      width: '100%',
      left: 0,
      top: 0,
      paddingTop: 30,
      alignItems: 'center',
    },
    barWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
    },
    icon: {
      marginRight: 10
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
  });
  export default MainScreen;
