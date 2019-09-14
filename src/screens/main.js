import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import CluModal from '../components/CluModal';
import Egg from '../components/Egg';
import MenuTop from '../components/MenuTop';
import Scene from '../components/Scene';
import { openModal } from '../store/actions/CluModalActions';

class MainScreen extends React.Component {
  static navigationOptions = {
      header: null,
  }

  modalText = 'HEY! Es hora de criar tu Cluimbiseti™'

  state = {
    fontLoaded: false,
    modalVisible: false
  }

  constructor() {
    super()
  }

  async componentDidMount() {
    setTimeout(() => {
      this.props.openModal(this.modalText)
    }, 1000)

    this.setState({ fontLoaded: true })
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scene}>
          <Scene />
        </View>
        <MenuTop />
        <CluModal />
        <View style={styles.egg}>
          <Egg />
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
});

const mapDispatchToProps = dispatch => ({
  openModal: text => dispatch(openModal(text))
})

export default connect(null, mapDispatchToProps)(MainScreen);
