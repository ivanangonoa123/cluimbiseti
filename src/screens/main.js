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
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { APP_CONSTANTS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PickElement from '../components/PickElement';
import { updateState } from '../store/actions/CluimbisetiActions';

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
    return (
      <View style={styles.container}>
        <View style={styles.scene}>
          <Scene />
        </View>
        <CluModal />
        <CluPickMenu
          pickItemCallback={this.setPickItem}
          ref={this.cluPickMenuElement}
        />
        {
          this.props.hatched && [
            <MenuTop key={"menuTop"}/>,
            <TouchableOpacity
              key={"pickButton"}
              style={styles.pickerButton}
              underlayColor={APP_CONSTANTS.mainBgColorDark}
              onPress={this.togglePickMenu}
            >
              <FontAwesomeIcon
                icon={faUtensils}
                size={50}
                color={APP_CONSTANTS.mainBgColorDark}
              />
            </TouchableOpacity>
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
    position: 'absolute',
    borderRadius: 50,
    width: 50,
    height: 30,
    top: 0,
    left: 0
  },
  pickerButton: {
    backgroundColor: APP_CONSTANTS.mainBgColor,
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 70,
    height: 70,
    right: 20,
    bottom: 200,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 5,
    },
    textShadowRadius:5,
    elevation: 5
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
  updateState: newState => dispatch(updateState(newState))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
