// learned from https://snack.expo.io/@yoobidev/draggable-component
import React from 'react'
import { StyleSheet, View, PanResponder, Animated, Dimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

class PickElement extends React.Component {
  state = {
    pan: new Animated.ValueXY(),
    opacity: new Animated.Value(1)
  };

  constructor() {
    super()
  }

  componentWillMount() {
    this.val = { x: 0, y: 0 }
    this.state.pan.addListener(value => this.val = value);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.val.x,
          y: this.val.y
        })
        this.state.pan.setValue({ x:0, y:0})
        this.state.opacity.setValue(1)
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        Animated.parallel([
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: -40 },
            tension: 0.2,
            friction: 6,
          }),
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 400
          }),
        ]).start(()=> {
          this.state.pan.setValue({ x:0, y:0})
          this.state.opacity.setValue(1)
          this.props.itemReleased();
        })
      }
    })
 }

 render() {
   const panStyle = {
      transform: this.state.pan.getTranslateTransform()
   }
   return(
    <Animated.View
      {...this.panResponder.panHandlers}
      style={[
        styles.circle,
        panStyle,
        { opacity: this.state.opacity }
      ]}
    >
      <View>
        <FontAwesomeIcon
          icon={this.props.item.icon}
          size={80}
          color={this.props.item.color}
        />
      </View>
    </Animated.View>
   )
 }
}

styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    transform: [{
      rotateZ: '-30deg'
    }]
  }
})

export default PickElement
