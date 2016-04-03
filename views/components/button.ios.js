import React, {
  TouchableHighlight, 
  Text, 
  StyleSheet,
  NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
  button: {
     backgroundColor: 'green',
      margin: 15,
      borderRadius: 8.150,
      width: 300,
      height: 45 
    },
      buttonText: {
        textAlign: 'center',
        margin: 15
    },
  });

var MainPage = require('../main.ios')

var Button = React.createClass({
  

  render(){
    return(
      <TouchableHighlight 
        style={styles.button} 
        underlayColor='red' 
        // not sure what should happen here when the button is pressed.
        onPress={() => this.GoToMainPage()}>
        <Text
        style={styles.buttonText}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
});

module.exports = Button;

 