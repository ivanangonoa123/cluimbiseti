import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes, faCookie, faFish, faPizzaSlice, faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import Modal from "react-native-modal"; 
import { APP_CONSTANTS } from '../Constants';

class CluPickMenu extends React.Component {
  foodItems = [
    { id: 0, name: 'Cookie', icon: faCookie, color: '#f2e5b3', price: 10 },
    { id: 1, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 2, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 3, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 4, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 5, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 6, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 7, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 8, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 9, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 10, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 11, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 12, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 13, name: 'Fish', icon: faFish, color: '#a6b1c4', price: 20 },
    { id: 14, name: 'Apple', icon: faAppleAlt, color: '#c91a28', price: 10 },
    { id: 15, name: 'Pizza', icon: faPizzaSlice, color: '#ffd666', price: 10 },
  ]

  state = {
    isVisible: false
  }

  pickItem = (item) => {
    this.props.pickItemCallback(item)
    this.toggleModal()
  }

  toggleModal = (event, isVisible) => {
    this.setState({ isVisible: isVisible || !this.state.isVisible })
  }

  render() {
    return (
      <Modal
        isVisible={this.state.isVisible}
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        hideModalContentWhileAnimating={true}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.menuContainer}>
          <TouchableOpacity
            underlayColor={APP_CONSTANTS.mainBgColorDark}
            onPress={this.toggleModal}
          >
            <FontAwesomeIcon
              icon={faTimes}
              size={50}
              color={APP_CONSTANTS.mainBgColorDark}
            />
          </TouchableOpacity>
          <FlatList
            data={this.foodItems}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.pickIconContainer}
                onPress={() => this.pickItem(item)}>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={styles.pickIcon}
                  size={60}
                  color={item.color}
                />
              </TouchableOpacity> )
            }
          >
          </FlatList>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: APP_CONSTANTS.mainBgColor,
    padding: 20,
  },
  pickIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 5,
    padding: 10,
    margin: 10,
    backgroundColor: APP_CONSTANTS.mainBgColorDark,
    borderRadius: 20,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 10,
    },
    textShadowRadius:5,
    elevation: 3
  },
  pickIcon: {

  }
})

export default CluPickMenu
