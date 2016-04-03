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
    // console.log(this.state.time)
    this.props.navigator.pop({
      passProps: {
        dataToBePassed: {
          worktime: console.log(this.state.worktime),
          breaktime: console.log(this.state.breaktime)
        }
      }
    })
  },

  getInitialState() {
    return {
      worktime: '15',
      breaktime: '15'
    };
  },

  updateWorktime(time) {
    this.setState({
      worktime: time
    });
  },

  updateBreaktime(time) {
    this.setState({
      breaktime: time
    });
  },

  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.description}>
          Set Work Time Block
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.worktime}
          onValueChange={this.updateWorktime}>
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
          selectedValue={this.state.breaktime}
          onValueChange={this.updateBreaktime}>
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
