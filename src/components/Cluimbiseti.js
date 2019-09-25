import React from 'react';
import { View, AppState, StyleSheet, Alert, Text, PanResponder } from 'react-native';
import CluimbisetiSvg from './svg/CluimbisetiSvg';
import { updateState } from '../store/actions/CluimbisetiActions';
import { connect } from 'react-redux';
import moment from 'moment';
import SleepHatSvg from './svg/SleephatSvg';

const TICK_TIME = 5000

class Cluimbiseti extends React.Component {
  state = {
    // collision: false
    appState: AppState.currentState
  }

  constructor(props) {
    super(props)
    this.cluimbisetiSvgElement = React.createRef()
    setInterval(this.cluimbisetiTick, TICK_TIME)
    this.cluimbisetiTick(this.props.cluimbiseti.lastTime)

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
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  eat = () => {
    const newState = { ...this.props.cluimbiseti }
    newState.hunger += 1

    this.props.updateState(newState)
  }

  cluimbisetiTick = (lastTime) => {
    // @TODO more complex logic
    const newState = { ...this.props.cluimbiseti }

    const elapsedTime = !lastTime ?
      1 : Math.floor(moment().diff(lastTime, 'ms') / TICK_TIME)
    console.log("TCL: Cluimbiseti -> cluimbisetiTick -> elapsedTime", elapsedTime)
    newState.hunger -= 0.2 * elapsedTime
    newState.health -= 0.2 * elapsedTime
    newState.sleep -= 0.2 * elapsedTime

    this.props.updateState(newState)
  }

  handleAppStateChange = nextAppState => {
    // coming back
    if (this.state.appState.match(/active/) &&
      nextAppState.match(/inactive|background/)) {
      console.log("app going to background")
      // setting the last time the app used
      this.props.updateState({ ...this.props.cluimbiseti, lastTime: moment().format() })
    } else if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this.cluimbisetiTick(this.props.cluimbiseti.lastTime)
      console.log("app going to foreground")
      // const newState = { ...this.props.cluimbiseti }
    }

    this.setState({appState: nextAppState})
  }

  render() {
    const bgColor = this.props.collision ? 'red' : 'white'
    return(
      <View style={styles.container}
        // {...this.panResponder.panHandlers}
        // style={{backgroundColor: bgColor}}
      >
        <CluimbisetiSvg style={styles.cluimbiseti}
          ref={this.cluimbisetiSvgElement}
        />
        <SleepHatSvg style={styles.sleepHat}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  sleepHat: {
    position: 'absolute',
    alignSelf: 'center',
    transform: [{
      scale: 0.6
    }],
    top: -80
  },
  cluimbiseti: {

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
