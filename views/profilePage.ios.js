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
    // store.get('activitiesAmount').then((data) => {
    //   activitiesAmount = data;
    // });
    // store.get('totalCycles').then((data) => {
    //   totalCycles = data;
    //   this.setState({});
    // });
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
    <View style={styles.profileBackground}>
    <Image source={require('../imgs/flowers.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={[styles.wrapper,styles.profileContainer]}>  
          <Text style={styles.profileText1}>
            Profile
          </Text>
        <View style={styles.body}>
          <Text style={styles.profileText}>
            Total Time Worked: {totalTimeWorked} minutes
          </Text>
          <Text style={styles.profileText}>
            Total Break Time: {totalBreakTime} minutes
          </Text>
        </View>
        </View>
      </View>
    </Image>
    </View>
    );

  }
})

const styles = StyleSheet.create({
  profileBackground: {
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    padding: 10,
    marginRight:10,
    width: 350,
    backgroundColor: '#e5e5e5',
    },
  profileContainer: {
    padding:20,
    backgroundColor: 'white',
    opacity: 0.75,
    borderRadius: 8,
    alignItems: 'center',
  },
  profileText1: {
  fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 15,
  textAlign: 'center',
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 7,
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 25,
    fontSize: 20
  },
});

module.exports = ProfilePage;
