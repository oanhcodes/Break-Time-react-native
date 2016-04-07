import React, {
  Alert,
  AsyncStorage,
  AppRegistry,
  Animated,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View,
  NavigatorIOS,
  ScrollView,
} from 'react-native';

var setTimeBlockPage = require('./timeBlock.ios');
var aboutAppPage = require('./aboutApp.ios');
var settingsPage = require('./settingsPage.ios');
var Swiper = require('react-native-swiper');
var statsPage = require('./profilePage.ios');

var store = require('react-native-simple-store')
// store.delete('activitiesAmount')
// store.delete('totalTimeWorked')
// store.delete('totalBreakTime')
// store.delete('totalCycles')
// store.delete('activities')
class Main extends Component {

  constructor() {
    super();
      this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    // Fade-in animation
    Animated.timing(          
       this.state.fadeAnim,   
       {toValue: 1,
        duration: 900},           
     ).start()

    // Async Storage
    store.get('activities').then((data) => {
      if (data !== null){
        this.setState({activities: data})
      } else {
        this.setState({activities: ["Run", "Sashay Away"]});
        store.save('activities', ["Run", "Sashay Away"])
      }
    });
    store.get('totalTimeWorked').then((data) => {
      if (data === null){
        store.save('totalTimeWorked', 0)
      }
    });
    store.get('totalBreakTime').then((data) => {
      if (data === null){
        store.save('totalBreakTime', 0)
      }
    });
    store.get('activitiesAmount').then((data) => {
      if (data === null || Object.keys(data).length === 0){
        store.save('activitiesAmount', [{}] )
      }
    });
    store.get('totalCycles').then((data) => {
      if (data === null){
        store.save('totalCycles', 0)
      }
    });

  }

  GoToAboutApp() {
    this.props.navigator.push({
      title: 'About',
      component: aboutAppPage
    })
  }

  GoToSetTimeBlock() {
    this.props.navigator.push({
      title: 'Set Time Block',
      component: setTimeBlockPage
    })
  }

	GoToSettings() {
		this.props.navigator.push({
			title: 'Settings',
			component: settingsPage
		})
	}

  GoToStats() {
    this.props.navigator.push({
      title: 'Statistics',
      component: statsPage
    })
  }

  render() {
    return (
      <Animated.View style={[styles.container, {opacity: this.state.fadeAnim}]}>
        <View style={styles.header}>
        <Swiper style={styles.wrapper} height={225} horizontal={true} autoplay={true} showsPagination={false}>
            <Image source={require('../imgs/BreakTime.jpeg')} style={styles.backgroundImage} >
            <Text style={styles.mainTitle}>
              Break Time
            </Text>
            </Image>

            <Image source={require('../imgs/bikeride.jpeg')} style={styles.backgroundImage} >
            <Text style={styles.whiteText}>
              Take better breaks.
            </Text>
            </Image>

            <Image source={require('../imgs/productivity.jpg')} style={styles.backgroundImage} >
            <Text style={styles.whiteText}>
              Increase productivity.
            </Text>
            </Image>
        </Swiper>
        </View>
          <View style={styles.buttonsContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#9BE8FF'}
            onPress={() => this.GoToSetTimeBlock()}>
            <Text style={styles.buttonText}>
              Set Time Block
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor={'#9BE8FF'}
            onPress={() => this.GoToStats()}>
            <Text style={styles.buttonText}>
              Timeboxing Stats
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor={'#9BE8FF'}
            onPress={() => this.GoToSettings()}>
            <Text style={styles.buttonText}>
              Activity Settings
            </Text>
          </TouchableHighlight>
          </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  header: {
    top: 0
  },
  mainTitle: {
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
    fontWeight: 'bold',
  },
  whiteText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  aboutLink: {
    textAlign: 'center',
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
  buttonsContainer: {
    marginBottom: 25,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundImage: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  aboutButtonText: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  logo: {
    height: 85,
    width: 85,
  },
  logoContainer: {
    marginTop: 10,
    alignItems: 'center',
  }
});

module.exports = Main;
