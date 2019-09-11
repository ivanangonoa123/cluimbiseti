import React from 'react';
import { Alert, Text } from 'react-native';
import EggSvg from './svg/EggSvg';

class Egg extends React.Component {
  constructor() {
    super();
    this.eggSvgElement = React.createRef();
  }

  handlePress = () => {
    this.eggSvgElement.current.crack();
  }

  render() {
    return(
      <EggSvg
        ref={this.eggSvgElement}
        onPress={this.handlePress}
      />
    )
  }
}

export default Egg;
