import React from 'react';
import { Alert, Text } from 'react-native';
import EggSvg from './svg/EggSvg';
import Cluimbiseti from './Cluimbiseti';

const CRACKS_LIMIT = 15
class Egg extends React.Component {
  cracks = 0;

  state = {
    hatched: false
  }

  constructor() {
    super();
    this.eggSvgElement = React.createRef();
  }

  handlePress = () => {
    if (Math.random() > 0.5) {
      this.cracks++;
      this.eggSvgElement.current.crack();
    }

    if (this.cracks >= CRACKS_LIMIT) {
      this.setState({hatched: true}) // @TODO redux store
    }
  }

  render() {
    return(
      !this.state.hatched ?
      <EggSvg
        ref={this.eggSvgElement}
        onPress={this.handlePress}
      /> :
      <Cluimbiseti />
    )
  }
}

export default Egg;
