/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */



// var TimeBlock = require('./views/timeBlock.ios')

var Main = require('./views/main.ios');
var Timer = require('./views/timer.ios')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class BreakTime extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Main',
          component: Timer
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('BreakTime', () => BreakTime);
