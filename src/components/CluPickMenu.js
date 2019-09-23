import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { APP_CONSTANTS } from '../constants';

class CluPickMenu extends React.Component {
  foodItems = [
    { id: 0, name: 'Cookie', icon: 'cookie', color: '#f2e5b3', price: 10, energy: 4 },
    { id: 1, name: 'Fish', icon: 'fish', color: '#a6b1c4', price: 20, energy: 25 },
    { id: 14, name: 'Apple', icon: 'apple-alt', color: '#c91a28', price: 10, energy: 6 },
    { id: 15, name: 'Pizza', icon: 'pizza-slice', color: '#ffd666', price: 10, energy: 15 },
  ]

  state = {
    isVisible: false
  }

  pickItem = (item) => {
    this.props.pickItemCallback(item)
    this.toggleModal()
  }

  toggleModal = (isVisible) => {
    this.setState({ isVisible: isVisible || !this.state.isVisible })
  }

  render() {
    return (
      <Modal
        visible={this.state.isVisible}>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            underlayColor={APP_CONSTANTS.mainBgColorDark}
            onPress={() => this.toggleModal(false)}
          >
            <FontAwesomeIcon
              icon={'times'}
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
