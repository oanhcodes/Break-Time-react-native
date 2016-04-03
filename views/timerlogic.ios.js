/**
 * Created by guguyanhua on 12/11/15.
 */
import React, {
    Alert,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var AudioPlayer = require('react-native-audioplayer');

var alertBreakMessage = 'BREAK TIME !';
var alertWorkMessage = 'get to work!!!!';
var workTime = 5;
var breakTime = 2;
var countTime = workTime;
var onBreak = false;

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      time: this.props.time ? this.props.time : 60,
      disabled: true
    };
  },
  componentDidMount(){
    this._countdown();
  },
  render(){
    var style = [styles.text];
    var component;
    if (this.state.disabled) {
      style.push({color: 'gray'});
      style.push(this.props.disabledTextStyle);
      component =
          <View
              style={[styles.wrapper,this.props.buttonStyle]}
              >
            <TouchableWithoutFeedback
                >
              <Text style={[style]}>{this.props.text}({this.state.time})</Text>
            </TouchableWithoutFeedback>
          </View>
    } else {
      component =
          <TouchableHighlight
              style={[styles.wrapper,this.props.buttonStyle]}
              onPress={this._onPress}
              >
            <Text style={[style,this.props.textStyle]}>{this.props.text}({this.state.time})</Text>
          </TouchableHighlight>
    }
    return (
        component
    )
  },
  _onPress(){
    if (this.state.disabled) {
      //nothing
    } else {
      this.setState({disabled: true});
      this._countdown();
      if(this.props.onPress){
          this.props.onPress();
      }
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
          this.setState({disabled: false});
          this.setState({time: workTime});
          onBreak = false;
          Alert.alert(
            'worktitle',
            alertWorkMessage,
            [
              {text: 'back to work', onPress: () => this._countdown()}
            ]
          );
        } else {
          // working, time for a break!
          // kit kats
          // meow
          this.setState({disabled: false});
          this.setState({time: breakTime});
          onBreak = true;
          Alert.alert(
            'breaktitle',            
            alertBreakMessage,
            [
              {text: 'Take break', onPress: () => this._countdown()},
              {text: 'uh, ..crabhorn?', onPress: () => AudioPlayer.play('crabhorn.mp3')}
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
    color: 'black'
  },
  wrapper: {
    padding: 10,
    marginRight:10,
    backgroundColor: '#e5e5e5',
  }
});

module.exports = CountDown;
