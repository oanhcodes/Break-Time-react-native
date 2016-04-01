import React, {
	AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
}, from 'react-native';

class Breaktime extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					Welcome to Break Time!
				</Text>
				<Text styles={styles.content}>
					Porgy stoneroller minnow white marlin; unicorn fish platy snook ghoul, suckermouth armored catfish, deepwater cardinalfish zebra shark. Sixgill ray labyrinth fish, barramundi tilefish ribbonbearer Reef triggerfish whitefish piranha ghoul, goosefish butterflyfish pike.

					Buffalofish barb nibbler candlefish electric stargazer tompot blenny whalefish sabertooth fish sand tiger Pacific saury. Northern Stargazer river stingray Mexican blind cavefish channel bass luminous hake spookfish anchovy, Sacramento splittail spiny basslet slipmouth burbot threadfin bream rock cod. Soldierfish northern pike pufferfish kahawai temperate perch yellowtail snapper. Old World rivuline loweye catfish bonefish pirate perch; anemonefish electric eel, thorny catfish trout cuskfish. Peacock flounder pupfish slimy mackerel brook trout freshwater hatchetfish, false trevally fire bar danio. Smelt-whiting; bluntnose minnow flying gurnard merluccid hake!
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {

  }
});

