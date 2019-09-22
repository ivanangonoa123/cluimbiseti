import React from 'react';
import { View, Alert, Text, PanResponder } from 'react-native';
import CluimbisetiSvg from './svg/CluimbisetiSvg';
import { updateState } from '../store/actions/CluimbisetiActions';
import { connect } from 'react-redux';

class Cluimbiseti extends React.Component {
  state = {
    collision: false,
    hitTest: false
  }

  constructor(props) {
    super(props)
    this.cluimbisetiSvgElement = React.createRef()
    setInterval(this.cluimbisetiTick, 5000)
    setInterval(this.cluimbisetiHitTest, 50)

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.setState({collision: true})
      },
      onPanResponderStart: () => {
        this.setState({collision: true})
      },
      onPanResponderMove: () => {
        this.setState({collision: true})
      },
      onPanResponderEnd: () => {
        this.setState({collision: false})
      }
    })
  }

  eat = () => {
    const newState = { ...this.props.cluimbiseti }
    newState.hunger += 1

    this.props.updateState(newState)
  }

  cluimbisetiHitTest = () => {

  }

  cluimbisetiTick = () => {
    const newState = { ...this.props.cluimbiseti }
    // @TODO more complex logic
    // substract current time and previous time
    newState.hunger -= 0.2
    newState.health -= 0.2
    newState.sleep -= 0.2

    this.props.updateState(newState)
  }

  render() {
    const bgColor = this.state.collision ? 'red' : 'white'
    return(
      <View
        {...this.panResponder.panHandlers}
        style={{backgroundColor: bgColor}}>
        <CluimbisetiSvg
          ref={this.cluimbisetiSvgElement}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { cluimbiseti } = state
  return { cluimbiseti }
}

const mapDispatchToProps = dispatch => ({
  updateState: newState => dispatch(updateState(newState))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cluimbiseti)
