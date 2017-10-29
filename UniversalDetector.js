
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.settingsBar}>
          <Icon.Button
            name='cog'
            color='grey'
            backgroundColor='rgba(0,0,0,0)'
            size={25}
          />
        </View>

        <View style={styles.detectorTextWrapper}>
          <Text style={styles.detectorText}>
            Universal Detector!
          </Text>
        </View>

        <View style={styles.sliderWrapper}>
          <Slider />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  detectorText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  detectorTextWrapper: {
    flex: 7,
    justifyContent: 'center',
  },
  settingsBar: {
    flex: 1,
    alignSelf: 'flex-end',
    margin: 5,
  },
  sliderWrapper: {
    flex: 1,
  },
});
