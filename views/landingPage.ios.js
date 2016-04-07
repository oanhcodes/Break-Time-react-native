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
  		<TouchableWithoutFeedback onPress={() => this.GoToMain()}>
  			<View style={styles.container}>
      		<Image source={require('../imgs/clock.png')} style={styles.landing}>
      		</Image>
      		<Text style={styles.text}>
      			Break Time
      		</Text>
      	</View>
    	</TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#05B3DD',
		alignItems: 'center'

	},
  landing: {
  	width: 150,
  	height: 150,
    flex: 1,
    marginTop: 200,
    resizeMode: 'contain',
    backgroundColor: '#05B3DD',
  },
  text: {
  	marginBottom: 250,
  	fontSize: 60,
  	fontWeight: 'bold',
  	backgroundColor: 'transparent',
  	// fontFamily: 'courier',
  	color: 'white'
  }
})

module.exports = LandingPage;