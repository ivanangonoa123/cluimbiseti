import { Modal, Animated, Alert, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusSquare, faCookieBite, faCloud, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import * as Progress from 'react-native-progress';
import { APP_CONSTANTS } from '../constants';
import { Audio } from 'expo';
import EggSvg from '../components/svg/egg';

const source = require('app/assets/sounds/close_pop.mp3');
class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    modalText = 'HEY! Es hora de criar tu Cluimbiseti™';

    state = {
      fontLoaded: false,
      modalVisible: false
    };
  
    constructor() {
      super()
      this.animatedValue = new Animated.Value(0)
      this.springValue = new Animated.Value(0.3)
    }

    // not working on expo, need to check
    async playSound() {
      const soundObject = new Audio.Sound();
      try {
        Audio.setIsEnabledAsync(true);
        await soundObject.loadAsync(require('app/assets/sounds/close_pop.mp3'));
        await soundObject.playAsync();
      } catch (error) {
        Alert.alert('error',
          'error loading sound'
        )
      }
    }

    async componentDidMount() {
      setTimeout(() => {
        this.setModalVisible(true);
      }, 1000)

      await Font.loadAsync({
        'Press Start 2P': require('app/assets/fonts/PressStart2P-Regular.ttf'),
      });
  
      this.setState({ fontLoaded: true })
      this.animateTitle()
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible})
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}>
              <View style={styles.modalOuter}>
                <View style={styles.modalInner}>
                  <Text style={styles.modalText}>
                    {this.modalText}
                  </Text>
                  <View style={styles.modalClose}>
                    <TouchableOpacity
                      underlayColor={APP_CONSTANTS.mainBgColorDark}
                      onPress={() => {
                        this.playSound()
                        this.setModalVisible(!this.state.modalVisible)
                      }}>
                      <FontAwesomeIcon
                        icon={faTimes}
                        size={50}
                        color={APP_CONSTANTS.mainBgColorDark}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </Modal>
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
          <EggSvg style={styles.egg}/>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0
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
    },
    modalOuter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.25)'
    },
    modalInner: {
      backgroundColor: APP_CONSTANTS.mainBgColor,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      padding: 20,
      minHeight: 300,
      maxWidth: 400,
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.50,
      shadowRadius: 10,
      elevation: 5,
    },
    egg: {
      position: 'absolute',
      alignSelf: 'center',
      transform: [
        {
          scale: 2
        }
      ],
      bottom: 0
    },
    modalText: {
      textAlign: 'center',
      fontSize: 30,
      textShadowColor: APP_CONSTANTS.mainBgColorDark,
      textShadowOffset: {
        width: 1,
        height: 1,
      },
      textShadowRadius: 2,
      color: 'white'
    },
    modalClose: {
      position: 'absolute',
      top: 0,
      right: 0
    }
  });
  export default MainScreen;
