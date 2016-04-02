import React, {
  Alert,
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';


var TimeBlockSet = require('./timeBlockSetSuccessPage.ios')

var aboutAppPage = require('./aboutApp.ios');


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
			  <Text style={styles.mainTitle}>
			    Break Time
			  </Text>
        <Text style={styles.mainTitle} onPress={() => this.props.navigator.push({
      title: 'Success',
      component: TimeBlockSet})}>
          Go to time block set page
			  </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF872E',
  },
  mainTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  buttonsContainer: {
  	marginTop: 300
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
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
  picker: {
    backgroundColor: '#E5E5E5'
  }
});

module.exports = Main;
