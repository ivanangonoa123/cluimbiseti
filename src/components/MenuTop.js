import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCookieBite, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { incrementCracks, setHatched } from 'cluimbiseti/src/store/actions/EggActions';

class MenuTop extends React.Component {
  render() {
    return(
      <View style={styles.topMenu}>
        <View style={styles.barWrapper}>
          <FontAwesomeIcon
            icon={faCookieBite}
            style={styles.icon}
            size={32}
            color={'#e88a43'}
          />
          <Progress.Bar
            style={styles.bar}
            borderWidth={2}
            borderColor={'rgb(83, 137, 24)'}
            progress={0.3}
            color={'#74c122'}
            width={200}
            height={20}
          />
        </View>
        <View style={styles.barWrapper}>
          <FontAwesomeIcon
            icon={faPlusSquare}
            style={styles.icon}
            size={32}
            color={'#d11b1b'}
          />
          <Progress.Bar
            style={styles.bar}
            borderWidth={2}
            borderColor={'rgb(147, 19, 19)'}
            progress={0.8}
            color={'#d11b1b'}
            width={200}
            height={20}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topMenu: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    paddingTop: 30,
    alignItems: 'center',
  },
  barWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  icon: {
    marginRight: 10
  }
})

const mapStateToProps = (state) => {
const { cracks, hatched } = state.egg
  return { cracks, hatched }
}

const mapDispatchToProps = dispatch => ({
  crack: () => dispatch(incrementCracks()),
  hatch: hatched => dispatch(setHatched(hatched))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuTop);
