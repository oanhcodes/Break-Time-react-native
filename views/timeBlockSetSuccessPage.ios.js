import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class TimeBlockSet extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.breakInfo}>
          Your first break will be at:
        </Text>
        <Text style={styles.timeInfo}>
          10:30 am
        </Text>
        <Text style={styles.breakInfo}>
          May the odds be ever in your favor!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  breakInfo: {
    fontSize: 25,
    marginTop: 30,
    marginBottom: 30

  },
  timeInfo: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 8,
    width: 350,
    height: 85,
    backgroundColor: '#24c7a6',
    fontSize: 75,
    textAlign: 'center',
    // color: '#F5FCFF'
  }
});

module.exports = TimeBlockSet;
