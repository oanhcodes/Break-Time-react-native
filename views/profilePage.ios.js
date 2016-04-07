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
    store.get('totalCycles').then((data) => {
      totalCycles = data;
    });
    store.get('activitiesAmount').then((data) => {
      activitiesAmount = data[0];
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
            <Text style={styles.activityText} key={i}> {activity}: {activitiesAmount[activity]} </Text>
          </View>
        )
      })
    } else {
      var activitiesList = []
    }
   return (
    <View style={styles.profileBackground}>
    <Image source={require('../imgs/desk.jpg')} style={styles.backgroundImage}>
      <ScrollView style={styles.wrapper} bounces={true} horizontal={false} showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <View style={[styles.wrapper,styles.profileContainer]}>  
          <Text style={styles.profileText1}>
            Timeboxing Stats
          </Text>
        <View style={styles.body}>
          <Text style={styles.profileText2}>
            Total Time Worked:
          </Text>
          <Text style={styles.profileText3}>
            {totalTimeWorked} minutes
          </Text>
          <Text style={styles.profileText2}>
            Total Break Time:
          </Text>
           <Text style={styles.profileText3}>
            {totalBreakTime} minutes
          </Text>
          <Text style={styles.profileText2}>
            Total Timebox Cycles:
          </Text>
           <Text style={styles.profileText3}>
            {totalCycles}
          </Text>
           <Text style={styles.profileText2}>
            Total Activities:
          </Text>
          <View style={styles.activityList}>
            {activitiesList}
          </View>
        </View>
        </View>
      </View>
      </ScrollView>
       <TouchableHighlight
        onPress={() => this.popToTop()}
        style={styles.button}
        underlayColor='#9BE8FF'>
        <Text style={styles.buttonText}>
          Main Page
        </Text>
      </TouchableHighlight>
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
    alignItems: 'center',
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
    width: 350,
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
  profileText2: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 10,
  },
  profileText3: {
    fontSize: 25,
    paddingTop: 10,
  },
  activityText: {
    fontSize: 25,
    paddingTop: 10,
  },
  activityList: {
    alignItems: 'center',
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
