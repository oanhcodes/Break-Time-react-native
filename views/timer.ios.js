import React, {
  Alert,
  AppStateIOS,
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  NavigatorIOS,
  View
} from 'react-native';


var CountDown = require('./timerlogic.ios');
var TimeBlock = require('./timeBlock.ios');

var exitTime;
class Timer extends Component {

  componentDidMount() {
    AppStateIOS.addEventListener('change', this.SaveTime);
  }
  
  // ListenForStatusChange() {
  //   AppStateIOS.addEventListener('change', SaveTime());
  // }

  render(){
    console.log(this.componentDidMount());
    console.log(exitTime);
    return(
      <View style={styles.container}>
        <CountDown
          text={"Remaining Time"}
          breakActivity={this.props.breakActivity}
          breakTime={this.props.breaktime}
          workTime={this.props.worktime}
          navigator = {this.props.navigator}
        />
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
  }
});

module.exports = Timer;
