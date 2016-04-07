import React, {
  ScrollView,
  AsyncStorage,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
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
    store.get('totalCycles').then((data) => {
      totalCycles = data;
      this.setState({});
    });
  },

  popToTop() {
    this.props.navigator.popToTop();
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
    <Image source={require('../imgs/desk.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={[styles.wrapper,styles.profileContainer]}>  
          <Text style={styles.profileText1}>
            Timeboxing Stats
          </Text>
        <View style={styles.body}>
          <Text style={styles.profileText}>
            Total Time Worked:
          </Text>
          <Text style={styles.profileText}>
            {totalTimeWorked} minutes
          </Text>
          <Text style={styles.profileText}>
            Total Break Time:
          </Text>
           <Text style={styles.profileText}>
            {totalBreakTime} minutes
          </Text>
          <Text style={styles.profileText}>
            Total Timebox Cycles:
          </Text>
           <Text style={styles.profileText}>
            {totalCycles}
          </Text>
        </View>
        </View>
      <TouchableHighlight
        onPress={() => this.popToTop()}
        style={styles.button}
        underlayColor='#9BE8FF'>
        <Text style={styles.buttonText}>
          Main Page
        </Text>
      </TouchableHighlight>
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
    padding:30,
    backgroundColor: 'white',
    opacity: 0.85,
    borderRadius: 8,
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
  },
  profileText1: {
  fontSize: 32,
  fontWeight: 'bold',
  marginBottom: 15,
  textAlign: 'center',
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 25,
    fontSize: 20
  },
  button: {
    backgroundColor: '#05B3DD',
    // margin: 15,
    borderRadius: 8.150,
    width: 300,
    height: 45,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2,
    alignSelf: 'center',
    margin: 45
  },
  buttonText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

module.exports = ProfilePage;
