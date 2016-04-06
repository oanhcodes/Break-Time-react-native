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
    });
    store.get('totalBreakTime').then((data) => {
      totalBreakTime = data;
    });
    store.get('activitiesAmount').then((data) => {
      activitiesAmount = data[0];
    });
    store.get('totalCycles').then((data) => {
      totalCycles = data;
      this.setState({});
    });
  },

  render() {
    if (activitiesAmount !== undefined) {
      var activitiesNames = Object.keys(activitiesAmount)
      var activitiesList = activitiesNames.map(function(activity, i) {
        return(
          <View key={i}>
            <Text key={i}> {activity}:{activitiesAmount[activity]} </Text>
          </View>
        )
      })
    } else {
      var activitiesList = []
    }
    return (
      <View style={styles.container}>
      <ScrollView style={styles.wrapper} bounces={true} horizontal={false} autoplay={false}>
        <View style={styles.body}>
          <Text style={styles.title}>
            Profile
          </Text>
          

          <Text>
            Total Time Worked: {totalTimeWorked} minutes.
          </Text>
          <Text>
            Total Break Time: {totalBreakTime} minutes.
          </Text>
          <Text>
            Amount of Times You have Chosen Each Activity:
          </Text>
          <View>
            {activitiesList}
          </View>
          <Text>
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
