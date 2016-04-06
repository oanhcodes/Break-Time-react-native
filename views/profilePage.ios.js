import React, {
  ScrollView,
  AsyncStorage,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var Swiper = require('react-native-swiper');
var store = require('react-native-simple-store');

var totalTimeWorked;
var totalBreakTime;
var activitiesAmount;
var totalCycles;

var ProfilePage = React.createClass ({
  componentDidMount() {
    store.get('totalTimeWorked').then((data) => {
      totalTimeWorked = data;
      // this.setState({})
    });
    store.get('totalBreakTime').then((data) => {
      totalBreakTime = data;
      // this.setState({})
    });
    store.get('activitiesAmount').then((data) => {
      activitiesAmount = data;
      // this.setState({})
    });
    store.get('totalCycles').then((data) => {
      totalCycles = data;
      this.setState({})
    });
  },

  getInitialState() {
    return {
      totalTimeWorked: totalTimeWorked,
      totalBreakTime: totalBreakTime,
      activitiesAmount: activitiesAmount,
      totalCycles: totalCycles
    }
  },

  render() {
    // var activities = console.log(activitiesAmount)
    if (activitiesAmount !== undefined) {
      var activities = activitiesAmount.map(function(activity, i) {
        return (
          <Text key={i} style={styles.activityList}>
            {activity}: 
          </Text>
        )
      })
    }
    return (
      <View style={styles.container}>
      <ScrollView style={styles.wrapper} bounces={true} horizontal={false} autoplay={false}>
        <View style={styles.body}>
          <Text style={styles.title}>
            Stats
          </Text>
          <Text styles={styles.content}>
            Total Time Worked: {totalTimeWorked} minutes.
          </Text>
          <Text styles={styles.content}>
            Total Break Time: {totalBreakTime} minutes.
          </Text>
          <Text styles={styles.content}>
            Number of Times You've Chosen Each Activity: {activities}
          </Text>
          <Text styles={styles.content}>
            Total Complete Cycles: {totalCycles}.
          </Text>
        </View>
      </ScrollView>
      </View>
    );
  
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#F5FCFF',
  },
  body: {
    padding: 50,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 25,
    fontSize: 20
  }, 
  image: {
    height: 100,
    borderRadius: 50,
    width: 100
  },
});

module.exports = ProfilePage;