import React, {
  ScrollView,
  AsyncStorage,
  Animated,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Picker,
  Image,
  NavigatorIOS
} from 'react-native';


var moment = require('moment');
var store = require('react-native-simple-store');
var TimePicker = require('./components/timePicker.ios');
var Button = require('./components/button.ios');
var Swiper = require('react-native-swiper');
var TimerPage = require('./timer.ios');
var TimerLogicPage = require('./timerlogic.ios');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var indexContainer = [];
var activityData;

var TimeBlock = React.createClass({

  componentDidMount() {
    store.get('activities').then((data) => {
      this.setState({activities: data})
      activityData = data;
    });

    Animated.timing(
       this.state.fadeAnim,
       {toValue: 1,
        duration: 3000},
     ).start()
  },

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

  getInitialState() {
    return {
      fadeAnim: new Animated.Value(0),

      // TESTING TIMES
      worktime: '5',
      breaktime: '3',

      // NORMAL TIMES
      // worktime: '15',
      // breaktime: '5',
      activities: activityData,
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
    if (this.state.activities !== undefined) {
      var activitiesList = this.state.activities.map(function(activity, i) {
        return(
          <Picker.Item key={i} label={activity} value={activity} />
        )
      })
    } else {
      var activitiesList = []
    }
    return (

    <ScrollView style={styles.wrapper1} bounces={true} horizontal={false}>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={275} horizontal={true} autoplay={true} showsPagination={false}>
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

            <Image source={require('../imgs/music.jpg')} style={styles.backgroundImage} >
              <Text style={styles.whiteText}>
                play music.
              </Text>
            </Image>

            <Image source={require('../imgs/snackbreak.jpg')} style={styles.backgroundImage} >
              <Text style={styles.whiteText}>
                eat snacks.
              </Text>
            </Image>
        </Swiper>
      </View>

      <View style={styles.timeContainer}>
        <Swiper style={styles.wrapper} showsButtons={true} height={300} horizontal={true} index={this.state.index} loop={false}>
        <View style={styles.container}>
          <Text style={styles.description}>
            1. Set Work Time Block
          </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.worktime}
          onValueChange={this.updateWorktime}>
          <Picker.Item label='15 Minutes' value='15' />
          <Picker.Item label='25 Minutes' value='25' />
          <Picker.Item label='30 Minutes' value='30' />
          <Picker.Item label='45 Minutes' value='45' />
          <Picker.Item label='60 Minutes' value='60' />
        </Picker>
        </View>
        <View style={styles.container}>
        <Text style={styles.description}>
          2. Set Break Time Block
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.breaktime}
          onValueChange={this.updateBreaktime}>
          <Picker.Item label='5 Minutes' value='5' />
          <Picker.Item label='10 Minutes' value='10' />
          <Picker.Item label='15 Minutes' value='15' />
          <Picker.Item label='20 Minutes' value='20' />
        </Picker>
        </View>
        <View style={styles.container}>
          <Text style={styles.description}>
            3. Choose a break activity.
          </Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.breakActivity}
            onValueChange={this.updateBreakActivity}>
            {activitiesList}
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#9BE8FF'
            onPress={() => this.GoToTimerPage()}>
            <Text style={styles.buttonText}>
              Start
            </Text>
          </TouchableHighlight>
        </View>

        </Swiper>
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  timeContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  description: {
    textAlign: 'center',
    fontSize: 25
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
  buttonOff: {
    backgroundColor: '#BCC1C5',
    margin:15,
    borderRadius: 8.150,
    width: 300,
    height: 45,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  background: {
    backgroundColor: '#F5FCFF',
  },
  customOptions: {
    marginTop: 30,
  },
  footer: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#BCC1C5',
  },
});

module.exports = TimeBlock;
