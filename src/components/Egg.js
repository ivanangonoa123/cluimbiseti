import React from 'react';
import EggSvg from './svg/EggSvg';
import { connect } from 'react-redux';
import { incrementCracks, setHatched } from 'cluimbiseti/src/store/actions/EggActions'

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
      <EggSvg
        cracks={this.props.cracks}
        onPress={this.handlePress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { cracks } = state.egg
  return { cracks }
}

const mapDispatchToProps = dispatch => ({
  crack: () => dispatch(incrementCracks()),
  hatch: hatched => dispatch(setHatched(hatched))
})

export default connect(mapStateToProps, mapDispatchToProps)(Egg);
