import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCookieBite, faPlusSquare, faBed } from '@fortawesome/free-solid-svg-icons';
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
            borderColor={'rgba(83, 137, 24, 0.5)'}
            progress={this.props.cluimbiseti.hunger * 0.01}
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
            borderColor={'rgba(147, 19, 19, 0.5)'}
            progress={this.props.cluimbiseti.health * 0.01}
            color={'#d11b1b'}
            width={200}
            height={20}
          />
        </View>
        <View style={styles.barWrapper}>
          <FontAwesomeIcon
            icon={faBed}
            style={styles.icon}
            size={32}
            color={'#4cb7ff'}
          />
          <Progress.Bar
            style={styles.bar}
            borderWidth={2}
            borderColor={'rgba(48, 117, 163, 0.5)'}
            progress={this.props.cluimbiseti.sleep * 0.01}
            color={'#4cb7ff'}
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
  const { cluimbiseti } = state
  return { cluimbiseti }
}

const mapDispatchToProps = dispatch => ({
  crack: () => dispatch(incrementCracks()),
  hatch: hatched => dispatch(setHatched(hatched))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuTop);
