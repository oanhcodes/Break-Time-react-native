import React, {
  ScrollView,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight, 
  Picker,
  Image,
  NavigatorIOS
} from 'react-native';

var TimePicker = require('./components/timePicker.ios');
var Button = require('./components/button.ios');
var Swiper = require('react-native-swiper');
var TimerPage = require('./timer.ios');
var TimerLogicPage = require('./timerlogic.ios');

var indexContainer = [];

var TimeBlock = React.createClass({

  GoToTimerPage() {
    this.props.navigator.push({
      title: "Timer",
      component: TimerPage,
      passProps: {
        worktime: parseInt(this.state.worktime),
        breaktime: parseInt(this.state.breaktime),
        breakActivity: this.state.breakActivity
      }
    })
  },

  GoToTimerLogicPage() {
    this.props.navigator.push({
      title: "Timer Logic",
      component: TimerLogicPage,
      passProps: {
      breakActivity: this.state.breakActivity
      }
    })
  },

  getInitialState() {
    return {
      worktime: '60',
      breaktime: '60',
      breakActivity: 'run',
      index: 0
    };
  },

  updateWorktime(time) {
    this.setState({
      worktime: time,
      index: 0
    });
  },

  updateBreaktime(time) {
    this.setState({
      breaktime: time,
      index: 1
    });
  },

  updateBreakActivity(activity) {
    this.setState({
      breakActivity: activity,
      index: 2
    })
  },

  render() {
    return (

    <ScrollView style={styles.wrapper} bounces={true} horizontal={false}>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={225} horizontal={true} autoplay={false} >
            <Image source={require('../imgs/run.jpeg')} style={styles.backgroundImage} >
              <Text style={styles.whiteText}>
                run.
              </Text>
            </Image>

            <Image source={require('../imgs/yoga.jpg')} style={styles.backgroundImage} >
              <Text style={styles.whiteText}>
                do yoga.
              </Text>
            </Image>

            <Image source={require('../imgs/weights.jpg')} style={styles.backgroundImage} >
              <Text style={styles.whiteText}>
                lift weights.
              </Text>
            </Image>
        </Swiper>
      </View>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} buttonWrapperStyle={styles.buttonWrapper} height={300} horizontal={true} index={this.state.index} loop={false} showsButtons={true}>
          <View style={styles.container}>
            <Text style={styles.description}>
              Set Work Time Block
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.worktime}
              onValueChange={this.updateWorktime}>
              <Picker.Item label='15 Minutes' value='900' />
              <Picker.Item label='30 Minutes' value='1800' />
              <Picker.Item label='45 Minutes' value='2700' />
              <Picker.Item label='60 Minutes' value='3600' />
            </Picker>
          </View>
          <View style={styles.container}>
            <Text style={styles.description}>
              Set Break Time Block
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.breaktime}
              onValueChange={this.updateBreaktime}>
              <Picker.Item label='5 Minutes' value='300' />
              <Picker.Item label='10 Minutes' value='600' />
              <Picker.Item label='15 Minutes' value='900' />
              <Picker.Item label='20 Minutes' value='1200' />
            </Picker>
          </View>
          <View style={styles.container}>
          <Text style={styles.description}>
              Choose a break activity.
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.breakActivity}
              onValueChange={this.updateBreakActivity}>
              <Picker.Item label='run' value='run' />
              <Picker.Item label='walk' value='walk' />
              <Picker.Item label='bike' value='bike' />
              <Picker.Item label='yoga' value='yoga' />
              <Picker.Item label='weights' value='liftWeights' />
              <Picker.Item label='push ups' value='pushUps' />
              <Picker.Item label='sashay away' value='sashayAway' />
            </Picker>
          </View>
        </Swiper>
      </View>
      <View style={styles.container}>
        <Text style={styles.swipeText}>
          Swipe left for more options
        </Text>
        <TouchableHighlight 
          style={styles.button} 
          underlayColor='#9BE8FF' 
          onPress={() => this.GoToTimerPage()}>
          <Text style={styles.buttonText}>
            Start
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>

    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    textAlign: 'center',
    fontSize: 20 
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
    margin: 15
  },
  picker: {
    width: 300
  },
  backgroundImage: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  whiteText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  swipeText: {
    fontWeight: 'bold',
    color: '#FF9235'
  },
  buttonWrapper: {
    backgroundColor: 'transparent'
  }
});


module.exports = TimeBlock;
