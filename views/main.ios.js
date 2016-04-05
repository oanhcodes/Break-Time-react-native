import React, {
  Alert,
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View,
  NavigatorIOS,
  ScrollView,
} from 'react-native';


var TimeBlockSet = require('./timeBlockSetSuccessPage.ios');
var setTimeBlockPage = require('./timeBlock.ios');
var aboutAppPage = require('./aboutApp.ios');
var setTimeBlockPage = require('./timeBlock.ios');
var profilePage = require('./profilePage.ios');
var Swiper = require('react-native-swiper');


class Main extends Component {

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

  GoToProfile() {
    this.props.navigator.push({
      title: 'Profile',
      component: profilePage
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Swiper style={styles.wrapper} height={225} horizontal={true} autoplay={false}>
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

            <Image source={require('../imgs/focus.jpeg')} style={styles.backgroundImage} >
            <Text style={styles.whiteText}>
              Increase your productivity.
            </Text>
            </Image>
        </Swiper>
        </View>
          <View style={styles.buttonsContainer}>
            <TouchableHighlight
              style={styles.aboutButton}
              underlayColor={'transparent'}
              onPress={() =>
              this.GoToAboutApp()}>
              <Text style={styles.aboutButtonText} >
                Learn More
              </Text>
            </TouchableHighlight>
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
            onPress={() => this.GoToProfile()}>
            <Text style={styles.buttonText}>
              View Profile
            </Text>
          </TouchableHighlight>
        </View>
      </View>
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
    marginTop: 5,
  },
  mainTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    fontWeight: 'bold',
  },
  whiteText: {
    paddingLeft: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    margin: 15
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
  },
  buttonsContainer: {
    position: 'relative',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundImage: {
    // width: 300,
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  aboutButtonText: {
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

module.exports = Main;
