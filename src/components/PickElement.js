// learned from https://snack.expo.io/@yoobidev/draggable-component
import React from 'react'
import { StyleSheet, View, PanResponder, Animated } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

class PickElement extends React.Component {
  state = {
    pan: new Animated.ValueXY(),
    opacity: new Animated.Value(1)
  };

  constructor() {
    super()
    this.val = { x: 0, y: 0 }
    this.collided = false;
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
      onPanResponderMove: (e, gesture) => {
        // console.log(gesture)
        // console.log("TCL: PickElement -> constructor -> this.state.pan", this.state.pan)
        this.state.pan.setValue({ x: gesture.dx, y: gesture.dy })

        // @TODO remove this hardcoding
        if (gesture.moveX > 160 - 64 &&
          gesture.moveX < 160 + 64 &&
          gesture.moveY > 556 - 64 &&
          gesture.moveY < 556 + 64) {
          this.collided = true;
          this.props.setCollision(this.collided)
        } else {
          this.collided = false;
          this.props.setCollision(this.collided)
        }
        Animated.event([
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ])
      },
      onPanResponderRelease: (e, gesture) => {
        if (this.collided) {
          this.props.itemReleased(true);
          this.state.pan.setValue({ x:0, y:0})
          this.state.opacity.setValue(0)
        } else {
          Animated.parallel([
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: -40 },
              tension: 0.2,
              friction: 6,
            }),
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 200
            }),
          ]).start(()=> {
            // fade animation end
            this.state.pan.setValue({ x:0, y:0})
            this.state.opacity.setValue(1)
            this.props.itemReleased(false);
          })
        }
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
