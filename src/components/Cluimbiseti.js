import React from 'react';
import { View, AppState, StyleSheet, Animated, Easing, Alert, Text, PanResponder } from 'react-native';
import { updateState } from '../store/actions/CluimbisetiActions';
import { connect } from 'react-redux';
import moment from 'moment';
import BodySvg from './svg/BodySvg';
import EyesSvg from './svg/EyesSvg';
import SleepHatSvg from './svg/SleephatSvg';

const TICK_TIME = 5000

class Cluimbiseti extends React.Component {
  state = {
    // collision: false
    appState: AppState.currentState,
    blinking: false
  }

  constructor(props) {
    super(props)
    this.cluimbisetiSvgElement = React.createRef()
    this.cluimbisetiTick(this.props.cluimbiseti.lastTime)
    this.cluimbisetiTick = setInterval(this.cluimbisetiTick, TICK_TIME)
    this.blinkTick = setInterval(this.blink, 4000)
    // this.panResponder = PanResponder.create({
    //   onStartShouldSetPanResponder: (evt, gestureState) => true,
    //   onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    //   onMoveShouldSetPanResponder: (evt, gestureState) => true,
    //   onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    //   onPanResponderGrant: (e, gestureState) => {
    //     this.setState({collision: true})
    //   },
    //   onPanResponderStart: () => {
    //     this.setState({collision: true})
    //   },
    //   onPanResponderMove: () => {
    //     this.setState({collision: true})
    //   },
    //   onPanResponderEnd: () => {
    //     this.setState({collision: false})
    //   }
    // })
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
    clearInterval(this.cluimbisetiTick)
    clearInterval(this.blinkTick)
  }

  cluimbisetiTick = (lastTime) => {
    // @TODO more complex logic
    const newState = { ...this.props.cluimbiseti }

    const elapsedTime = !lastTime ? 1 : Math.floor(moment().diff(lastTime, 'ms') / TICK_TIME)
    // console.log("TCL: Cluimbiseti -> cluimbisetiTick -> elapsedTime", elapsedTime)
    newState.hunger = Math.max(newState.hunger - 0.05 * elapsedTime, 0)
    // newState.health = Math.max(newState.health - 0.05 * elapsedTime, 0)
    newState.sleep = !this.props.cluimbiseti.sleeping ?
      Math.max(newState.sleep - 0.05 * elapsedTime, 0) :
      newState.sleep + 0.15

    this.props.updateState(newState)
  }

  handleAppStateChange = nextAppState => {
    // coming back
    if (this.state.appState.match(/active/) &&
      nextAppState.match(/inactive|background/)) {
      console.log("app going to background")
      // setting the last time the app used
      this.props.updateState({ ...this.props.cluimbiseti, lastTime: moment().format() })
    } else if (this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active') {
      console.log("app going to foreground")
      this.cluimbisetiTick(this.props.cluimbiseti.lastTime)
    }

    this.setState({appState: nextAppState})
  }

  blink = () => {
    this.setState({blinking: true})
    setTimeout(() => this.setState({blinking: false}), 300);
  }

  render() {
    // const bgColor = this.props.collision ? 'red' : 'white'
    return(
      <View style={styles.container}
        // {...this.panResponder.panHandlers}
        // style={{backgroundColor: bgColor}}
      >
        <BodySvg
          style={styles.body}
          ref={this.cluimbisetiSvgElement}
        />
        {
          this.props.cluimbiseti.sleeping &&
          <SleepHatSvg
            style={styles.sleepHat}
          />
        }
        <EyesSvg
          eyelidL={
            this.props.cluimbiseti.sleeping ||
            this.state.blinking}
          eyelidR={
            this.props.cluimbiseti.sleeping ||
            this.state.blinking
          }
          style={styles.eyes}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  sleepHat: {
    position: 'absolute',
    top: -20,
    alignSelf: 'center',
    transform: [{
      scale: 0.7
    }]
  },
  body: {
    alignSelf: 'center',
    transform: [{
      scale: 0.6
    }]
  },
  eyes: {
    position: 'absolute',
    alignSelf: 'center',
    transform: [{
      scale: 1.2
    }],
    top: 50
  }
})

const mapStateToProps = state => {
  const { cluimbiseti } = state
  return { cluimbiseti }
}

const mapDispatchToProps = dispatch => ({
  updateState: newState => dispatch(updateState(newState))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cluimbiseti)
