import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { APP_CONSTANTS } from '../Constants';
import { closeModal } from '../store/actions/CluModalActions';
import Sound from 'react-native-sound';

class CluModal extends React.Component {

  componentDidMount() {
    // @TODO extract to sound player
    this.closeSound = new Sound('close_pop.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      }
    })
  }

  closeModal = () => {
    this.props.closeModal()
    this.closeSound.play()
  }

  render() {
    return(
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.open}
        onRequestClose={this.closeModal}
      >
        <View style={styles.modalOuter}>
          <TouchableOpacity
            style={styles.touchableOverlay}
            onPressOut={this.closeModal}
          >
            <TouchableWithoutFeedback>
              <View style={styles.modalInner}>
                <Text style={styles.modalText}>
                  {this.props.text}
                </Text>
                <View style={styles.modalClose}>
                  <TouchableOpacity
                    underlayColor={APP_CONSTANTS.mainBgColorDark}
                    onPress={this.closeModal}
                  >
                  <FontAwesomeIcon
                    icon={faTimes}
                    size={50}
                    color={APP_CONSTANTS.mainBgColorDark}
                  />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalOuter: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  touchableOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalInner: {
    backgroundColor: APP_CONSTANTS.mainBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    width: '80%',
    minHeight: 300,
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.50,
    shadowRadius: 10,
    elevation: 5,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 30,
    textShadowColor: APP_CONSTANTS.mainBgColorDark,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
    color: 'white'
  },
  modalClose: {
    position: 'absolute',
    top: 0,
    right: 0
  }
})

const mapStateToProps = state => {
const { open, text } = state.cluModal
  return { open, text }
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(CluModal);
