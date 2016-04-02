import React, {
	AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class StartBreak extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View>
					<Text style={styles.title}>
						Great job staying on task! Now take a f***in' break.
					</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<TouchableHighlight 
						style={styles.button} 
						underlayColor={'red'} 
						onPress={() => this.setState({toggle: !this.state.toggled})}>
						<Text style={styles.buttonText}>
							Start Break
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 15,
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
	},
	title: {
		fontSize: 15
	},
	buttonsContainer: {

	},
	button: {
		backgroundColor: 'green',
    margin: 45,
    borderRadius: 8.150,
    width: 300,
    height: 45,
	},
	buttonText: {
		textAlign: 'center',
		margin: 15
	}
})

module.exports = StartBreak;

// Update Tab Spacing

