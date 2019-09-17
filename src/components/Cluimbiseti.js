import React from 'react';
import { Alert, Text } from 'react-native';
import CluimbisetiSvg from './svg/CluimbisetiSvg';
import { updateState } from '../store/actions/CluimbisetiActions';
import { connect } from 'react-redux';

class Cluimbiseti extends React.Component {
  state = {
  }

  constructor() {
    super();
    this.cluimbisetiSvgElement = React.createRef();
  }

  componentDidMount() {
    setInterval(this.cluimbisetiTick, 1000)
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

  handlePress = () => {
  }

  render() {
    return(
      <CluimbisetiSvg
        ref={this.cluimbisetiSvgElement}
        onPress={this.handlePress}
      />
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
