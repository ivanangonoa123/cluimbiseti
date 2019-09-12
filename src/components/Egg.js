import React from 'react';
import { Alert, Text } from 'react-native';
import EggSvg from './svg/EggSvg';
import Cluimbiseti from './Cluimbiseti';

const CRACKS_LIMIT = 15
class Egg extends React.Component {
  state = {
    hatched: false,
    cracks: 0
  }

  constructor() {
    super();
  }

  handlePress = () => {
    if (Math.random() > 0.5) {
      this.setState({cracks: this.state.cracks + 1})
    }

    if (this.state.cracks >= CRACKS_LIMIT) {
      this.setState({hatched: true}) // @TODO redux store
    }
  }

  render() {
    return(
      !this.state.hatched ?
      <EggSvg
        cracks={this.state.cracks}
        onPress={this.handlePress}
      /> :
      <Cluimbiseti />
    )
  }
}

export default Egg;
