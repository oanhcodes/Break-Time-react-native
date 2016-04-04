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

var alertBreakMessage = 'BREAK TIME !';
var alertWorkMessage = 'get to work!!!!';
var onBreak = false;
var cycles = 0;

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      time: this.props.workTime,
    };
  },
  GoToStatsPage() {
    this.props.navigator.push({
      title: "Stats",
      component: StatsPage,
      passProps: {
        worktime: this.props.workTime,
        breaktime: this.props.breakTime,
        breakActivity: this.props.breakActivity,
        cycles: cycles
      }
    })
  },
  componentDidMount(){
    this._countdown();
  },
  render(){
    if (onBreak) {
      return (
        <View>
          <Text style={styles.text}>{this.props.text}: </Text>
          <View style={[styles.wrapper,styles.buttonStyle]}>
            <Text style={styles.textStyle}>{this.props.breakActivity}</Text>
            <Text style={styles.textStyle}>{Math.floor(this.state.time/60)} minutes </Text>
            <Text style={styles.textStyle}>{this.state.time%60} seconds</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={styles.text}>{this.props.text}</Text>
          <View style={[styles.wrapper,styles.buttonStyle]}>
            <Text style={styles.textStyle}>{Math.floor(this.state.time/60)} minutes </Text>
            <Text style={styles.textStyle}>{this.state.time%60} seconds</Text>
          </View>
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
            'worktitle',
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
            'breaktitle',
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
  wrapper: {
    padding: 10,
    marginRight:10,
    width: 350,
    backgroundColor: '#e5e5e5',
  },
  buttonStyle: {
    padding:20,
    opacity: .75,
    backgroundColor: 'white',
    borderRadius: 8
  },
  timerBackground: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});

module.exports = CountDown;
