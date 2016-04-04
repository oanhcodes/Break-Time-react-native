import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class Stats extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>Finished!</Text>

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
