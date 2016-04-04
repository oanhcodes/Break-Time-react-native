import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var timeworked;
var breakedtime;

class Stats extends Component {
  timeworked = Math.floor((this.props.worktime * this.props.cycles) / 60);
  breakedtime = Math.floor((this.props.breaktime * this.props.cycles) / 60);
  render(){
    return(
      <View style={styles.container}>
        <Text>Finished!</Text>
        <Text>You had {this.props.cycles} timebox cycles</Text>
        <Text>You worked for {this.timeworked} minutes!</Text>
        <Text>You breaked for {this.breakedtime} minutes!</Text>
        <Text>Your activity was: {this.props.breakActivity}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

module.exports = Stats;
