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
    // this.setState({})
    store.get('totalTimeWorked').then((data) => {
      // this.setState({totalTimeWorked: data})
      totalTimeWorked = data;
      console.log(data)
    });
    store.get('totalBreakTime').then((data) => {
      // this.setState({})
      totalBreakTime = data;
    });
    store.get('activitiesAmount').then((data) => {
      // this.setState({})
      activitiesAmount = data;
    });store.get('totalCycles').then((data) => {
      // this.setState({})
      totalCycles = data;
    });
    this.setState({})
  },

  // getInitialState() {
  //   return {
  //     totalTimeWorked: totalTimeWorked,
  //     totalBreakTime: totalBreakTime,
  //     activitiesAmount: activitiesAmount,
  //     totalCycles: totalCycles
  //   }
  // },

  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.wrapper} bounces={true} horizontal={false} autoplay={false}>
        <View style={styles.body}>
          <Text style={styles.title}>
            Profile
          </Text>
          <Image source={require('../imgs/run.jpeg')} style={styles.image}>
          </Image>
          <Text styles={styles.content}>
            Name: Mister Crab
          </Text>
          <Text styles={styles.content}>
            Breaks Taken: 
          </Text>
          <Text>
            Total Time Worked: {totalTimeWorked} minutes.
          </Text>
          <Text>
            Total Break Time: {totalBreakTime} minutes.
          </Text>
          <Text>
            Amount of Times You've Chosen Each Activity, Regardless of Which Activity You May Have Previously Been Considering: {activitiesAmount}
          </Text>
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