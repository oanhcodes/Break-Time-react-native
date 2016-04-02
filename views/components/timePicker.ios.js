import React, {
  Picker
} from 'react-native';

var TimePicker = React.createClass({
  getInitialState() {
    return {
      time: '15'
    };
  },

  getStyles() {
    return {
      width: 300
    }
  },

  updateTime(time) {
    this.setState({time: time});
  },

  render() {
    return (
      <Picker
        style={this.getStyles()}
        selectedValue={this.state.time}
        onValueChange={this.updateTime}>
        <Picker.Item label='15 Minutes' value='15' />
        <Picker.Item label='30 Minutes' value='30' />
        <Picker.Item label='45 Minutes' value='45' />
        <Picker.Item label='60 Minutes' value='60' />
      </Picker>
    );
  }
});

module.exports = TimePicker;