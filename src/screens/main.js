import React from 'react';
import { Alert, StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import CluModal from '../components/CluModal';
import CluPickMenu from '../components/CluPickMenu';
import Egg from '../components/Egg';
import MenuTop from '../components/MenuTop';
import Scene from '../components/Scene';
import { openModal } from '../store/actions/CluModalActions';
import Cluimbiseti from '../components/Cluimbiseti';
import { persistor } from '../store/configureStore'

class MainScreen extends React.Component {
  static navigationOptions = {
      header: null,
  }

  modalText = 'HEY! Es hora de criar tu Cluimbiseti™'

  state = {
  }

  constructor() {
    super()
    cluPickMenuElement = React.createRef()
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
        <CluPickMenu ref={cluPickMenuElement}/>
        {
          this.props.hatched &&
          <MenuTop />
        }
        {
          this.props.hatched ?
          <View style={styles.cluimbiseti}>
            <Cluimbiseti />
          </View> :
          <View style={styles.egg}>
            <Egg />
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
    width: 50,
    height: 30,
    top: 0,
    left: 0
  }
});

const mapStateToProps = (state) => {
  const { hatched } = state.egg
  const { cluimbiseti } = state
  return { hatched, cluimbiseti }
}

const mapDispatchToProps = dispatch => ({
  openModal: text => dispatch(openModal(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
