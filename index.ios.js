import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

// var Main = require('./views/main.ios');
var LandingPage = require('./views/landingPage.ios')
// var Timer = require('./views/timer.ios')
// var Stats = require('./views/stats.ios')
// var Settings = require('./views/settingsPage.ios')

class BreakTime extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Main',
          navigationBarHidden: true,
          component: LandingPage
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
