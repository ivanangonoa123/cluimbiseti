import React from 'react';
import { Alert, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CluModal from '../components/CluModal';
import CluPickMenu from '../components/CluPickMenu';
import Egg from '../components/Egg';
import MenuTop from '../components/MenuTop';
import Scene from '../components/Scene';
import { openModal } from '../store/actions/CluModalActions';
import Cluimbiseti from '../components/Cluimbiseti';
import { persistor } from '../store/configureStore'
import { APP_CONSTANTS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PickElement from '../components/PickElement';
import { updateState, sleep } from '../store/actions/CluimbisetiActions';

class MainScreen extends React.Component {
  static navigationOptions = {
      header: null,
  }

  modalText = 'HEY! Es hora de criar tu Cluimbiseti™'

  state = {
    pickItem: null,
    collision: false
  }

  constructor() {
    super()
    this.cluPickMenuElement = React.createRef()
  }

  togglePickMenu = () => {
    this.cluPickMenuElement.current.toggleModal(true)
  }

  setPickItem = item => {
    this.setState({pickItem: item})
    // Alert.alert('item picked', item.name)
  }

  sleep = () => {
    this.props.sleep()
  }

  itemReleased = chomp => {
    if (chomp) {
      const newState = { ...this.props.cluimbiseti }
      newState.hunger += this.state.pickItem.energy
  
      this.props.updateState(newState)
    }

    this.setPickItem(null)
  }

  setCollision = isCollision => {
    this.setState({collision: isCollision})
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.props.openModal(this.modalText)
    // }, 1000)
  }

  purge = () => {
    persistor.purge()
  }

  render() {
    const sleeping = this.props.cluimbiseti.sleeping

    return (
      <View style={styles.container}>
        <View style={styles.scene}>
          <Scene />
        </View>
        <CluModal />
        {
          this.props.hatched && [
            <CluPickMenu
              key="cluPickMenu"
              pickItemCallback={this.setPickItem}
              ref={this.cluPickMenuElement}
            />,
            <MenuTop
              key="menuTop"
            />,
            <View
              key="rightMenu"
              style={styles.rightMenu}
            >
              <TouchableOpacity
                disabled={sleeping}
                style={[
                  styles.pickerBtn,
                  styles.foodBtn,
                  {
                    opacity: !sleeping ? 1 : 0.5
                  }
                ]}
                underlayColor={APP_CONSTANTS.mainBgColorDark}
                onPress={this.togglePickMenu}
              >
                <FontAwesomeIcon
                  icon="utensils"
                  size={50}
                  color={APP_CONSTANTS.mainBgColorDark}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.pickerBtn,
                  styles.sleepBtn
                ]}
                underlayColor={APP_CONSTANTS.sleepIconBgColorDark}
                onPress={this.sleep}
              >
                <FontAwesomeIcon
                  icon="bed"
                  size={50}
                  color={APP_CONSTANTS.sleepIconBgColorDark}
                />
              </TouchableOpacity>
            </View>
          ]
        }
        {
          this.props.hatched ?
          <View style={styles.cluimbiseti}>
            <Cluimbiseti collision={this.state.collision} />
          </View> :
          <View style={styles.egg}>
            <Egg />
          </View>
        }
        {
          this.state.pickItem &&
          <View style={styles.pickElement}>
            <PickElement
              setCollision={this.setCollision}
              itemReleased={this.itemReleased}
              item={this.state.pickItem}
            />
          </View>
        }
        <View style={styles.purgeBtn}>
          <Button
            title="P"
            onPress={this.purge}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },
  scene: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  egg: {
    position: 'absolute',
    alignSelf: 'center',
    transform: [
      {
        scale: 0.8
      }
    ],
    bottom: 0
  },
  cluimbiseti: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20
  },
  purgeBtn: {
    opacity: 0.5,
    fontSize: 10,
    borderRadius: 50,
    width: 50,
    height: 30,
    top: 0,
    left: 0
  },
  rightMenu: {
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'center',
    right: 10,
    bottom : 150
  },
  pickerBtn: {
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    marginTop: 5,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 5,
    },
    textShadowRadius:5,
    elevation: 5
  },
  foodBtn: {
    backgroundColor: APP_CONSTANTS.mainBgColor,
  },
  sleepBtn: {
    backgroundColor: APP_CONSTANTS.sleepIconBgColor,
  },
  pickElement: {
    position: 'absolute',
    alignSelf: 'center',
    top: '20%'
  }
});

const mapStateToProps = (state) => {
  const { hatched } = state.egg
  const { cluimbiseti } = state
  return { hatched, cluimbiseti }
}

const mapDispatchToProps = dispatch => ({
  openModal: text => dispatch(openModal(text)),
  updateState: newState => dispatch(updateState(newState)),
  sleep: () => dispatch(sleep()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
