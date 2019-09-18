import React from 'react'
import { StyleSheet, View, PanResponder, Animated } from 'react-native'

class PickElement extends React.Component {
  state = {
    pan: new Animated.ValueXY()
  };

  constructor() {
    super()
  }

  componentWillMount() {
    this.val = { x:0, y:0 }
    this.state.pan.addListener((value) => this.val = value);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.val.x,
          y: this.val.y
        })
        this.state.pan.setValue({ x:0, y:0})
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ])
    })
 }

 render() {
   const panStyle = {
      transform: this.state.pan.getTranslateTransform()
   }
   return(
    <Animated.View
      {...this.panResponder.panHandlers}
      style={[ styles.circle, panStyle ]}
    />
   )
 }
}

styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    backgroundColor: 'red'
  }
})

export default PickElement
