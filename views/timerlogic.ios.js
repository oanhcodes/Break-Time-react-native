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

var alertBreakMessage = 'BREAK TIME !';
var alertWorkMessage = 'get to work!!!!';
var onBreak = false;

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      time: this.props.workTime,
    };
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
          <Text style={styles.text}>{this.props.text}: </Text>
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
        if (this.onBreak === true) {
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
            ]
          );
        } else {
          // working, time for a break!
          this.setState({time: this.props.breakTime});
          onBreak = true;
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
    color:'white',
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
    backgroundColor: '#05B3DD',
    borderRadius: 8
  }
});

module.exports = CountDown;
