import React, {
  AppRegistry,
  AsyncStorage,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View,
  NavigatorIOS,
  TextInput
} from 'react-native';

var store = require('react-native-simple-store');

var Settings = React.createClass ({
	componentDidMount() {
		store.get('activities').then((data) => {
			this.setState({activities: data})
		})
	},

	getInitialState() {
		return {
			activities: [],
			text: "Enter an activity"
		};
	},

	saveData(value) {
		if (this.state.activities === null) {
			this.setState({activities: [value]})
		} else {
			this.state.activities.push(value);
			this.setState({activities: this.state.activities});
		}
		store.save('activities', this.state.activities)
	},

	render(){
		var that = this;
		var activities = that.state.activities.map(function(activity){
			return(
				<Text style={styles.saved}>{activity}</Text>
			)
		});
		console.log(activities);
		return(
			<View style={styles.container}>
				<Text style={styles.title}>
					Edit Your Activities
				</Text>
				<View style={styles.activityListWrapper}>
					{activities}
				</View>
				<Text style={styles.addActivityTitle}>
					Add a new activity to your activities list:
				</Text>
				<View style={styles.textInputWrapper}>
					<TextInput 
						style={styles.textInput} 
						onChangeText={(text) => this.setState({text})} 
						placeholder={this.state.text}/>
				</View>
				<TouchableHighlight 
            style={styles.button} 
            underlayColor={'#9BE8FF'} 
            onPress={() => this.saveData(this.state.text)}>
			      <Text style={styles.buttonText}>
			        Add Activity
			      </Text>
			    </TouchableHighlight>
			</View>
		)
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F2F2F2'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 30
	},
	activityListWrapper: {
		alignSelf: 'stretch',
		height: 200,
		backgroundColor: 'red'
	},
	addActivityTitle: {

	},
	textInputWrapper: {
		backgroundColor: '#2E6BFF',
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginBottom: 10
	},
	textInput: {
		backgroundColor: 'white',
		height: 50,
		width: 335,
		marginLeft: 30,
		paddingLeft: 10
	},
	button: {
		backgroundColor: '#05B3DD',
    margin: 15,
    borderRadius: 8.150,
    width: 300,
    height: 50,
    justifyContent: 'center'
  },
  buttonText: {
  	textAlign: 'center'
  }
})

module.exports = Settings;