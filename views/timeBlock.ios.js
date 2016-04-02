import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var TimePicker= require('./components/timePicker.ios')
var Button= require('./components/button.ios')


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    fontSize: 20 
  }
});

var TimeBlock = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Set Work Time Block
        </Text>
        <TimePicker/>
        <Text style={styles.description}>
          Set Break Time Block
        </Text>
        <TimePicker/>
       <Button>START</Button>
      </View>
    );
  }
})


module.exports = TimeBlock;
