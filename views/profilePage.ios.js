import React, {
  ScrollView,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var Swiper = require('react-native-swiper');

class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.wrapper} bounces={true} horizontal={false} autoplay={false}>
        <View style={styles.body}>
          <Text style={styles.title}>
            Profile
          </Text>
          <Image source={require('../imgs/run.jpeg')} style={styles.image}>
          </Image>
          <Text styles={styles.content}>
            Name: Mister Crab
          </Text>
          <Text styles={styles.content}>
            Breaks Taken:
          </Text>
        </View>
      </ScrollView>
      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#F5FCFF',
  },
  body: {
    padding: 50,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 25,
    fontSize: 20
  }, 
  image: {
    height: 100,
    borderRadius: 50,
    width: 100
  },
});

module.exports = ProfilePage;