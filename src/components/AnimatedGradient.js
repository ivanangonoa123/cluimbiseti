// Taken from https://github.com/dslounge/rn-animated-gradient-example/

import React, { Component } from "react";
import { LinearGradient } from 'expo-linear-gradient';

export class AnimatedGradient extends Component {
  render() {
    const {
      style,
      color1,
      color2,
      start = { x: 0, y: 0 },
      end = { x: 0, y: 1 }
    } = this.props;
    return (
      <LinearGradient
        colors={[color1, color2]}
        start={start}
        end={end}
        style={style}
      />
    );
  }
}
