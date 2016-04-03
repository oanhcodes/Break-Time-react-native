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
          text={"Remaining Time"}
          breakTime={5}
          workTime={300}
        />
      </View>
    );
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


module.exports = Timer;
