import React, {
  Alert,
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



var Settings = React.createClass ({

	getInitialState() {
		return {
			text: "Enter an activity"
		};
	},

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>
					Edit Your Activities
				</Text>
				<View style={styles.activityListWrapper}>

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
		// width: 400,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	textInput: {
		// flex: 1,
		backgroundColor: 'white',
		height: 50,
		width: 300,
		marginLeft: 30
	},

})

module.exports = Settings;