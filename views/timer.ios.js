import React, {
  Alert,
  AppStateIOS,
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

var exitTime;
class Timer extends Component {

  componentDidMount() {
    AppStateIOS.addEventListener('change', this.SaveTime);
  }
  
  // ListenForStatusChange() {
  //   AppStateIOS.addEventListener('change', SaveTime());
  // }

  render(){
    console.log(this.componentDidMount());
    console.log(exitTime);
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
    height: 45,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2
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
