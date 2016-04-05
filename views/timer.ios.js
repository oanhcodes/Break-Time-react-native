import React, {
  Alert,
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  NavigatorIOS,
  View,
  Image,
} from 'react-native';


var CountDown = require('./timerlogic.ios');
var TimeBlock = require('./timeBlock.ios');
var alertMessage = 'Confirm exit'
class Timer extends Component {

  GoToMainPage() {
    this.props.navigator.popToTop()
  }

  render(){
    return(
      <View style={styles.timerBackground}>
      <Image source={require('../imgs/coffeebreak.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <CountDown
            // text={"Remaining Time"}
            breakActivity={this.props.breakActivity}
            breakTime={this.props.breaktime}
            workTime={this.props.worktime}
            navigator = {this.props.navigator}/>
        </View>
      </Image>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#9BE8FF"
          onPress={() => Alert.alert(
            'Exit',
            alertMessage,
            [
              {text: 'Yes', onPress: () => this.GoToMainPage()},
              {text: 'No', onPress: () => console.log('no')}
            ]
            )}>
          <Text style={styles.buttonText}>
            Stop
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}



var styles = StyleSheet.create({
  timerBackground: {
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
  button: {
    backgroundColor: '#05B3DD',
    margin: 15,
    borderRadius: 8.150,
    width: 300,
    height: 45
  },
  buttonText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
});


module.exports = Timer;
