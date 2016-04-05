import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NavigatorIOS,
  Image,
} from 'react-native';

var timeworked;
var breakedtime;

class Stats extends Component {
  timeworked = Math.floor((this.props.worktime * this.props.cycles) / 60);
  breakedtime = Math.floor((this.props.breaktime * this.props.cycles) / 60);
  render(){
    return(
    <View style={styles.statsBackground}>
    <Image source={require('../imgs/flowers.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={[styles.wrapper,styles.statsContainer]}>
          <Text style={styles.statText1}>Finished!</Text>
          <Text style={styles.statText}>You had {this.props.cycles} timebox cycles</Text>
          <Text style={styles.statText}>You worked for {this.timeworked} minutes!</Text>
          <Text style={styles.statText}>You breaked for {this.breakedtime} minutes!</Text>
          <Text style={styles.statText}>Your activity was: {this.props.breakActivity}</Text>
        </View>
      </View>
    </Image>
    </View>
    )
  }
}

var styles = StyleSheet.create({
   statsBackground: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    padding: 10,
    marginRight:10,
    width: 350,
    backgroundColor: '#e5e5e5',
    },
  statsContainer: {
    padding:20,
    backgroundColor: 'white',
    opacity: 0.75,
    borderRadius: 8,
    alignItems: 'center',
  },
  statText1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  statText: {
    fontWeight: 'bold',
  }
});

module.exports = Stats;
