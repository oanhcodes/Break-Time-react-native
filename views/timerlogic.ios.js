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
    done = false,
    first = true;

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      time: this.props.workTime,
      workExpiry: moment(),
      breakExpiry: moment()
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

  setNewBlockCycle() {
    workExpiry = moment().add(this.state.workMin, 'minutes');
    breakExpiry = moment().add(this.state.workMin, 'minutes').add(this.state.breakMin, 'minutes');
    console.log(workExpiry);
    console.log(breakExpiry);
    this.checkTimer(workExpiry, breakExpiry);
  },

  checkTimer(workExpireTime, breakExpireTime) {
      // how to we test seconds? imports number as minutes. where?
      // do alerts happen while out of application?

    switch (onBreak) {
      case true:
        if (moment().format() == breakExpireTime.format()) {
          onBreak = false;
          // done = true;
          first = false;
          Vibration.vibrate();
          AudioPlayer.play('crabhorn.mp3');
          Alert.alert(
            'You look so refreshed!',
            alertWorkMessage,
            [
              {text: 'Run another timeblock', onPress: () => this.forceUpdate()},
              {text: 'Finished', onPress: () => this.GoToStatsPage()}
            ]
          );
        } else {
          this.forceUpdate();
        }
        break;
      case false:
        if (moment().format() == workExpireTime.format()) {
          cycles++;
          onBreak = true;
          // done = true;
          Vibration.vibrate();
          AudioPlayer.play('crabhorn.mp3');
          Alert.alert(
            'Great job staying on task!',
            alertBreakMessage,
            [
              {text: 'Take Break', onPress: () => this.forceUpdate()}
            ]
          );
        } else {
          this.forceUpdate();
        }
        break;
    }
  },

  componentDidMount() {
    var workMin = this.props.workTime,
        breakMin = this.props.breakTime,
        workExpiry = moment().add(workMin, 'minutes'),
        breakExpiry = moment().add(workMin, 'minutes').add(breakMin, 'minutes'),
        toggleTimer;
       
    console.log(workExpiry);
    console.log(breakExpiry);

    this.setState({
      workMin: workMin,
      breakMin: breakMin,
      workExpiry: workExpiry,
      breakExpiry: breakExpiry
    })

    this._update = function() {
      if (first) {
        this.checkTimer(workExpiry, breakExpiry);
      } else {
        this.setNewBlockCycle();
      }
      
      // if (done) {
      //   clearInterval(toggleTimer);
      //   done = false;
      //   this.setNewBlockCycle();
      //   setInterval(this._update, 1000);
      // }
      // this.forceUpdate();
    }.bind(this);

    toggleTimer = setInterval(this._update, 1000);
    // this._countdown();
  },
  componentWillUnmount() {
    clearInterval(this._update);
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
