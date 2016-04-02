import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View,
  NavigatorIOS,
} from 'react-native';

var aboutAppPage = require('./aboutApp.ios');
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
				<Swiper style={styles.wrapper} height={200} horizontal={false} autoplay={false}>
					
						<Image source={require('../imgs/BreakTime.jpeg')} style={styles.backgroundImage} >
		  			<Text style={styles.mainTitle}>
		    			Break Time
		  			</Text>
		  			</Image>
		  		
		  		<View style={styles.slide2}>
		  			<Text style={styles.mainTitle}>
		    			About Tim's Missing Kid Photo
		  			</Text>
		  		</View>
		  	</Swiper>
			  <View style={styles.buttonsContainer}>
			    <TouchableHighlight style={styles.button} underlayColor={'red'} onPress={() => this.setState({modal: true})}>
			      <Text style={styles.buttonText}>
			        Set Time Block
			      </Text>
			    </TouchableHighlight>
			    <TouchableHighlight 
			    	style={styles.button} 
			    	underlayColor={'red'} 
			    	onPress={() => this.setState({toggle: !this.state.toggled})}>
			      <Text style={styles.buttonText}>
			        View Profile
			      </Text>
			    </TouchableHighlight>
			  </View>
			
			  <TouchableHighlight
			  	style={styles.aboutButton}
			    underlayColor={'red'}
			    onPress={() =>
			   	this.GoToAboutApp()}>
			    <Text>
			    	About
			    </Text>
			  </TouchableHighlight>
			</View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FF872E',
  },
  mainTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  buttonsContainer: {
  	marginTop: 200
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    margin: 15
  },
  aboutButton: {
  	position: 'absolute',
  	bottom: 30,
  	right: 30
  },
  button: {
    backgroundColor: 'green',
    margin: 15,
    borderRadius: 8.150,
    width: 300,
    height: 45,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wrapper: {
  	// flex: 1,
  	// justifyContent: 'center',
  },
  backgroundImage: {
  	// width: 300,
  	width: null,
  	height: null,
  	flex: 1,
  	resizeMode: 'cover',
  	justifyContent: 'center'
  },
  slide1: {
  	alignItems: 'center',
  	flex: 1,
  	justifyContent: 'center',
  },
  slide2: {
  	flex: 1,
  	justifyContent: 'center',
  	backgroundColor: '#29D9C2',
  }
});

module.exports = Main;