import React from 'react';
import { Alert, Text } from 'react-native';
import EggSvg from './svg/EggSvg';
import { connect } from 'react-redux';
import { incrementCracks, setHatched } from 'cluimbiseti/src/store/actions/EggActions'
import Cluimbiseti from './Cluimbiseti';

const CRACKS_LIMIT = 15
class Egg extends React.Component {
  handlePress = () => {
    if (Math.random() > 0.5) {
      this.props.crack()
    }

    if (this.props.cracks >= CRACKS_LIMIT) {
      this.props.hatch(true)
    }
  }

  render() {
    return(
      !this.props.hatched ?
      <EggSvg
        cracks={this.props.cracks}
        onPress={this.handlePress}
      /> :
      <Cluimbiseti />
    )
  }
}

const mapStateToProps = (state) => {
const { cracks, hatched } = state.egg
  return { cracks, hatched }
}

const mapDispatchToProps = dispatch => ({
  crack: () => dispatch(incrementCracks()),
  hatch: hatched => dispatch(setHatched(hatched))
})

export default connect(mapStateToProps, mapDispatchToProps)(Egg);
