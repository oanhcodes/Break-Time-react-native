import React, {
    Alert,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    NavigatorIOS,
    Vibration
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var AudioPlayer = require('react-native-audioplayer');
var StatsPage = require('./stats.ios');

var alertBreakMessage = 'Now take a well deserved break.';
var alertWorkMessage = 'Want to start another timeblock?';
var alertMessage = 'Confirm exit'

var onBreak = false;
var cycles = 0;

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      // time: this.props.workTime,
      time: 10,
    };
  },
  GoToMainPage() {
    this.props.navigator.popToTop()
  },
  GoToStatsPage() {
    this.props.navigator.push({
      title: "Stats",
      component: StatsPage,
      navigationBarHidden: true,
      passProps: {
        worktime: this.props.workTime,
        breaktime: this.props.breakTime,
        breakActivity: this.props.breakActivity,
        cycles: cycles
      }
    })
  },
  componentDidMount() {
    this._countdown();
  },
  componentWillUnmount() {
    onBreak = false;
  },
  renderStop() {
    return (
      <View style={styles.stopContainer}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#9BE8FF"
        onPress={() => Alert.alert(
          'Exit',
          alertMessage,
          [
            {text: 'Yes', onPress: () => this.GoToMainPage()},
            {text: 'No', onPress: () => console.log('no')}
          ]
          )}>
        <Text style={styles.buttonText}>
          Stop
        </Text>
      </TouchableHighlight>
      </View>
    ) 
  },
  render(){
    <TouchableHighlight><Text> hello</Text></TouchableHighlight>
    if (onBreak) {
      return (
        <View>
          <View style={[styles.wrapper,styles.buttonStyle]}>
            <Text style={styles.textStyle2}>Your break activity is: {this.props.breakActivity}</Text> 
            <Text style={styles.textStyle}>{Math.floor(this.state.time/60)} minutes </Text>
            <Text style={styles.textStyle}>{this.state.time%60} seconds</Text>
          </View>
          {this.renderStop()}
        </View>
      )
    } else {
      return (
        <View>
          <View style={[styles.wrapper,styles.buttonStyle]}>
            <Text style={styles.textStyle}>{Math.floor(this.state.time/60)} minutes </Text>
            <Text style={styles.textStyle}>{this.state.time%60} seconds</Text>
          </View>
          {this.renderStop()}
        </View>
      )
    }
  },
  _countdown(){
    var timer = function () {
      var time = this.state.time - 1;
      this.setState({time: time});
      if (time > 0) {
        this.setTimeout(timer, 1000);
      } else {
        if (onBreak) {
          // on break going to work time
          this.setState({time: this.props.workTime});
          onBreak = false;
          Vibration.vibrate();
          AudioPlayer.play('crabhorn.mp3');
          Alert.alert(
            'You look refreshed!',
            alertWorkMessage,
            [
              {text: 'Run another timeblock', onPress: () => this._countdown()},
              {text: 'Finished', onPress: () => this.GoToStatsPage()}
            ]
          );
        } else {
          // working, time for a break!
          this.setState({time: this.props.breakTime});
          onBreak = true;
          cycles++;
          Vibration.vibrate();
          AudioPlayer.play('crabhorn.mp3');
          Alert.alert(
            'Great job staying on task!',
            alertBreakMessage,
            [
              {text: 'Take break', onPress: () => this._countdown()}
            ]
          );
        }
      }
    };
    this.setTimeout(timer, 1000);
  }
});

var styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 24,
    paddingBottom: 5
  },
  textStyle: {
    color:'black',
    fontSize: 55
  },
   textStyle2: {
    color:'black',
    fontSize: 18,
  },
  wrapper: {
    padding: 10,
    width: 350,
    backgroundColor: '#e5e5e5',
  },
  buttonStyle: {
    padding:20,
    backgroundColor: 'white',
    opacity: 0.75,
    borderRadius: 8
  },
  button: {
    backgroundColor: '#05B3DD',
    margin: 15,
    borderRadius: 8.150,
    width: 300,
    height: 45
  },
  buttonText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  stopContainer: {
    marginLeft: 10,
  },
});

module.exports = CountDown;
