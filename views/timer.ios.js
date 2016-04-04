import React, {
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

class Timer extends Component {

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
});


module.exports = Timer;
