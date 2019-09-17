import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes, faCookie, faFish, faPizzaSlice, faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import Modal from "react-native-modal";

class CluPickMenu extends React.Component {
  state = {
    isVisible = false
  }

  toggleModal = isVisible => {
    this.isVisible = isVisible || !this.isVisible
  }

  render() {
    return (
      <Modal isVisible={this.state.isVisible}>
        <View style={menuContainer}>
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
          <ScrollView>
            <View>
              <FontAwesomeIcon
                icon={faCookie}
                style={styles.icon}
                size={32}
                color={'#4cb7ff'}
              />
            </View>
            <View>
              <FontAwesomeIcon
                icon={faFish}
                style={styles.icon}
                size={32}
                color={'#4cb7ff'}
              />
            </View>
            <View>
              <FontAwesomeIcon
                icon={faPizzaSlice}
                style={styles.icon}
                size={32}
                color={'#4cb7ff'}
              />
            </View>
            <View>
              <FontAwesomeIcon
                icon={faAppleAlt}
                style={styles.icon}
                size={32}
                color={'#4cb7ff'}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1
  },
  icon: {

  }
})

export default CluPickMenu
