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

var moment = require('moment'),
    TimerMixin = require('react-timer-mixin'),
    AudioPlayer = require('react-native-audioplayer'),
    StatsPage = require('./stats.ios');

var alertBreakMessage = 'Now take a well deserved break.',
    alertWorkMessage = 'Want to start another timeblock?',
    alertMessage = 'Confirm exit';

var onBreak = false,
    cycles = 0,
    timeOn;

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      cycles: 0,
      time: this.props.workTime,
      workExpiry: moment(),
      breakExpiry: moment()
    };
  },
  GoToMainPage() {
    this.stopTimer()
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
        cycles: this.state.cycles,
      }
    })
  },

  setNewBlockCycle() {

    var workMin = 5,
        breakMin = 3;

    this.setState({
      workMin: workMin,
      breakMin: breakMin,
        // CHANGE ME BACK TO MINUTES
      workExpiry: moment().add(workMin, 'seconds')
    })
    this.startTimer()

    console.log('wexp2:' + this.state.workExpiry.format())
    console.log('bexp2:' + this.state.breakExpiry.format())
    this.checkTimer();
  },

  // Check when moved away from timer page within application
  // check about alerts out of application

  checkTimer() {
      // how to we test seconds? imports number as minutes. where?
      // do alerts happen while out of application?
    console.log('wexp1:' + this.state.workExpiry.format())
    console.log('bexp1:' + this.state.breakExpiry.format())
    switch (onBreak) {
      case true:
        if (moment().format() == this.state.breakExpiry.format()) {
          onBreak = false;
          this.stopTimer()
          Vibration.vibrate();
          AudioPlayer.play('crabhorn.mp3');
          Alert.alert(
            'You look so refreshed!',
            alertWorkMessage,
            [
              {text: 'Run another timeblock', onPress: () => this.setNewBlockCycle()},
              {text: 'Finished', onPress: () => this.GoToStatsPage()}
            ]
          );
        } else {
          this.forceUpdate();
        }
        break;
      case false:
        if (moment().format() == this.state.workExpiry.format()) {
          this.state.cycles++;
          onBreak = true;
          Vibration.vibrate();
          AudioPlayer.play('crabhorn.mp3');
          this.stopTimer()
          Alert.alert(
            'Great job staying on task!',
            alertBreakMessage,
            [
              {text: 'Take Break', onPress: () => this.setBreak()}
            ]
          );
        } else {
          this.forceUpdate();
        }
        break;
    }
  },
  setBreak(){
    this.setState({
      // CHANGE ME BACK TO MINUTES
      breakExpiry: moment().add(this.state.breakMin, 'seconds')
    }),
    this.startTimer(),
    this.checkTimer()
  },
  componentDidMount() {
    var workMin = 1,
        breakMin = 1;

    this.setState({
      workMin: workMin,
      breakMin: breakMin,
      // CHANGE ME BACK TO MINUTES
      workExpiry: moment().add(workMin, 'seconds')
    })

    this.startTimer();

  },
  _update(){
    this.checkTimer();
  },

  startTimer(){
    timeOn = setInterval(this._update, 1000);
  },
  stopTimer(){
    clearInterval(timeOn);
  },
  componentWillUnmount() {
    this.stopTimer();
    onBreak = false;
  },
  getTimeLeft: function(expiry) {
    var milliseconds = expiry.diff(moment())
    return moment.duration(milliseconds);
  },
  getTimeToWorkExpiry: function() {
    return this.getTimeLeft(this.state.workExpiry);
  },
  getTimeToBreakExpiry: function() {
    return this.getTimeLeft(this.state.breakExpiry);
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

    console.log(Math.floor(this.getTimeToBreakExpiry().asSeconds() % 60));

    if (onBreak) {
      return (
        <View>
          <View style={[styles.wrapper,styles.buttonStyle]}>
            <Text style={styles.textStyle2}>Your break activity is: {this.props.breakActivity}</Text>
            <Text style={styles.textStyle}>{Math.floor(this.getTimeToBreakExpiry().asMinutes())} minutes </Text>
            <Text style={styles.textStyle}>{Math.floor(this.getTimeToBreakExpiry().asSeconds() % 60)} seconds</Text>
          </View>
          {this.renderStop()}
        </View>
      )
    } else {
      return (
        <View>
          <View style={[styles.wrapper,styles.buttonStyle]}>
            <Text style={styles.textStyle}>{Math.floor(this.getTimeToWorkExpiry().asMinutes())} minutes </Text>
            <Text style={styles.textStyle}>{Math.floor(this.getTimeToWorkExpiry().asSeconds() % 60)} seconds</Text>
          </View>
          {this.renderStop()}
        </View>
      )
    }
  },
  // _countdown(){
  //   var timer = function () {
  //     var time = this.state.time - 1;
  //     this.setState({time: time});
  //     if (time > 0) {
  //       this.setTimeout(timer, 1000);
  //     } else {
  //       if (onBreak) {
  //         // on break going to work time
  //         this.setState({time: this.props.workTime});
  //         onBreak = false;
  //         Vibration.vibrate();
  //         AudioPlayer.play('crabhorn.mp3');
  //         Alert.alert(
  //           'You look refreshed!',
  //           alertWorkMessage,
  //           [
  //             {text: 'Run another timeblock', onPress: () => this._countdown()},
  //             {text: 'Finished', onPress: () => this.GoToStatsPage()}
  //           ]
  //         );
  //       } else {
  //         // working, time for a break!
  //         this.setState({time: this.props.breakTime});
  //         onBreak = true;
  //         cycles++;
  //         Vibration.vibrate();
  //         AudioPlayer.play('crabhorn.mp3');
  //         Alert.alert(
  //           'Great job staying on task!',
  //           alertBreakMessage,
  //           [
  //             {text: 'Take break', onPress: () => this._countdown()}
  //           ]
  //         );
  //       }
  //     }
  //   };
  //   this.setTimeout(timer, 1000);
  // }
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
    height: 45,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2
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
