import React from 'react';
import { Alert, Text } from 'react-native';
import CluimbisetiSvg from './svg/CluimbisetiSvg';

class Cluimbiseti extends React.Component {
  state = {
  }

  constructor() {
    super();
    this.cluimbisetiSvgElement = React.createRef();
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

export default Cluimbiseti;
