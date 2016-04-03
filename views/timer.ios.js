import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';


var CountDown = require('./timerlogic.ios');


class Timer extends Component {
  render(){
    return (
      <View style={styles.container}>
        <CountDown
          onPress={this.sendAgain} //default null
          text={"Remaining Time"} //default ''
          time={5} //default 60
          buttonStyle={{padding:20}}
          textStyle={{color:'black'}} //default black
          disabledTextStyle={{color:'gray'}} //default gray
        />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
  },
});

// reactMixin(Timer.prototype, TimerMixin);

module.exports = Timer;
