import React, {
  ScrollView,
	AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Swiper = require('react-native-swiper');

class AboutApp extends Component {
	render() {
		return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper} horizontal={false} autoplay={false}>
				<View style={styles.body}>
          <Text style={styles.title}>
            Welcome to Break Time!
          </Text>

					<Text styles={styles.content}>
						Porgy stoneroller minnow white marlin; unicorn fish platy snook ghoul, suckermouth armored catfish, deepwater cardinalfish zebra shark. Sixgill ray labyrinth fish, barramundi tilefish ribbonbearer Reef triggerfish whitefish piranha ghoul, goosefish butterflyfish pike.

						Buffalofish barb nibbler candlefish electric stargazer tompot blenny whalefish sabertooth fish sand tiger Pacific saury. Northern Stargazer river stingray Mexican blind cavefish channel bass luminous hake spookfish anchovy, Sacramento splittail spiny basslet slipmouth burbot threadfin bream rock cod. Soldierfish northern pike pufferfish kahawai temperate perch yellowtail snapper. Old World rivuline loweye catfish bonefish pirate perch; anemonefish electric eel, thorny catfish trout cuskfish. Peacock flounder pupfish slimy mackerel brook trout freshwater hatchetfish, false trevally fire bar danio. Smelt-whiting; bluntnose minnow flying gurnard merluccid hake!

            Porgy stoneroller minnow white marlin; unicorn fish platy snook ghoul, suckermouth armored catfish, deepwater cardinalfish zebra shark. Sixgill ray labyrinth fish, barramundi tilefish ribbonbearer Reef triggerfish whitefish piranha ghoul, goosefish butterflyfish pike.

					</Text>
				</View>
        <View style={styles.team}>
          <Text styles={styles.content}>
          Meet our Team
          </Text>
        </View>
      </Swiper>
			</View>
		);
  
	}
}

const styles = StyleSheet.create({
  wrapper: {
  },
  container: {
  	flex: 1,
  	justifyContent: 'center',
  	padding: 0,
  	backgroundColor: 'white',
  },
  body: {
    padding: 50,
  },
  title: {
    textAlign: 'center',
  	marginTop: 80,
    marginBottom: 25,
  	fontSize: 21
  }, 
  team: {
    flex: 1,
    marginTop: 50,
    padding: 50,
    backgroundColor: '#FF872E',
  },
});

module.exports = AboutApp;