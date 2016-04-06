import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

var Main = require('./main.ios');

class LandingPage extends Component {

	GoToMain() {
		this.props.navigator.resetTo({
      title: 'Main',
      component: Main,
    })
	}

  render() {
  	console.log("Hi unicorns")
    return (
    	<View style={styles.container}>      
    		<TouchableWithoutFeedback onPress={() => this.GoToMain()}>
        	<Image source={require('../imgs/clock.png')} style={styles.landing}>
        		<Text style={styles.text}>
        			Break Time
        		</Text>
        	</Image>
      	</TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

	},
  landing: {
  	width: null,
  	height: null,
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: '#9BE8FF',
    // justifyContent: 'center',
		alignItems: 'center'
  },
  text: {
  	marginTop: 90,
  	fontSize: 45,
  	backgroundColor: 'transparent',
  	fontFamily: 'courier'
  }
})

module.exports = LandingPage;