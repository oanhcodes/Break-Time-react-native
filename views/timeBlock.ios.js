import React, {
  ScrollView,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight, 
  Picker,
  Image,
} from 'react-native';

var TimePicker = require('./components/timePicker.ios')
var Button = require('./components/button.ios')
var Swiper = require('react-native-swiper');

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

    <ScrollView style={styles.wrapper} bounces={true} horizontal={false}>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={225} horizontal={true} autoplay={false}>
            <Image source={require('../imgs/run.jpeg')} style={styles.backgroundImage} >
            <Text style={styles.whiteText}>
              run.
            </Text>
            </Image>

            <Image source={require('../imgs/yoga.jpg')} style={styles.backgroundImage} >
            <Text style={styles.whiteText}>
              do yoga.
            </Text>
            </Image>

            <Image source={require('../imgs/weights.jpg')} style={styles.backgroundImage} >
            <Text style={styles.whiteText}>
              lift weights.
            </Text>
            </Image>
        </Swiper>
      </View>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={300} horizontal={true}>
        <View style={styles.container}>
          <Text style={styles.description}>
            Set Work Time Block
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
        </View>
        <View style={styles.container}>
        <Text style={styles.description}>
          Set Break Time Block
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
        </View>
        <View style={styles.container}>
        <Text style={styles.description}>
          Choose a break activity.
        </Text>
        <Picker
          style={styles.picker}>
          <Picker.Item label='run' value='run' />
          <Picker.Item label='walk' value='walk' />
          <Picker.Item label='bike' value='bike' />
          <Picker.Item label='yoga' value='yoga' />
          <Picker.Item label='weights' value='liftWeights' />
          <Picker.Item label='push ups' value='pushUps' />
          <Picker.Item label='sashay away' value='sashayAway' />
        </Picker>
        </View>
        </Swiper>

      </View>
      <View style={styles.container}>
        <TouchableHighlight 
          style={styles.button} 
          underlayColor='#9BE8FF' 
          onPress={() => this.GoToMainPage()}>
          <Text
            style={styles.buttonText}>
            Start
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>

    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    textAlign: 'center',
    fontSize: 20 
  },
  button: {
     backgroundColor: '#05B3DD',
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
  },
  backgroundImage: {
    // width: 300,
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
   whiteText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});


module.exports = TimeBlock;
