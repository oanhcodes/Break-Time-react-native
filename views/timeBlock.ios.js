import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight, 
  Picker
} from 'react-native';

var TimePicker = require('./components/timePicker.ios')
var Button = require('./components/button.ios')



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    fontSize: 20 
  },
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
  picker: {
    width: 300
  }
  
});

var TimeBlock = React.createClass({

  GoToMainPage(){
    // this.props.route.callback(Picker.selectedValue);
    this.props.navigator.pop({
      // Passes one picker value:
      passProps: {dataToBePassed: console.log(this.state.time)}
    })
  },

  updateTime(time) {
    this.setState({time: time});
  },

  getInitialState() {
    return {
      time: '15'
    };
  },



  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.description}>
          Set Work Time Block
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.time}
          onValueChange={this.updateTime}>
          <Picker.Item label='15 Minutes' value='15' />
          <Picker.Item label='30 Minutes' value='30' />
          <Picker.Item label='45 Minutes' value='45' />
          <Picker.Item label='60 Minutes' value='60' />
        </Picker>
        <Text style={styles.description}>
          Set Break Time Block
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.time}
          onValueChange={this.updateTime}>
          <Picker.Item label='15 Minutes' value='15' />
          <Picker.Item label='30 Minutes' value='30' />
          <Picker.Item label='45 Minutes' value='45' />
          <Picker.Item label='60 Minutes' value='60' />
        </Picker>
        <TouchableHighlight 
          style={styles.button} 
          underlayColor='red' 
          onPress={() => this.GoToMainPage()}>
          <Text
            style={styles.buttonText}>
            Start
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
})


module.exports = TimeBlock;
