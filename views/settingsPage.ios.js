import React, {
  AppRegistry,
  AsyncStorage,
  Component,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Image,
  View,
  ListView,
  NavigatorIOS,
  TextInput,
  ScrollView,
} from 'react-native';

var store = require('react-native-simple-store');
var Swipeout = require('react-native-swipeout');

var Settings = React.createClass ({

	componentDidMount() {
    store.get('activities').then((data) => {
      this.setState({activities: data})
    })
  },

	getInitialState() {
		return {
			activities: [],
			text: "Enter an activity here",
		};
	},

  popToTop() {
    this.props.navigator.popToTop();
  },

	saveData(value) {
    if (value !== "Enter an activity here") {
	  	this.state.activities.push(value);
	 	  this.setState({activities: this.state.activities});
	 	  store.save('activities', this.state.activities);
      this.refs['textInput'].setNativeProps({text: ''});
      this.setState({text: "Enter an activity here"});
    }
	},

	deleteData(index) {
		this.state.activities.splice(index, 1);
		store.save('activities', this.state.activities);
		this.setState({activities: this.state.activities});
	},

	render(){
		var that = this;
		var activities = this.state.activities.map(function(activity, i){
      {var swipeoutBtns = [
      {
        backgroundColor: 'red',
        underlayColor: 'white',
        text: 'Delete',
        onPress: ()=>that.deleteData(i),
      }
    ]};
		return(
			<View key={i} style={styles.liContainer} >
        <Swipeout right={swipeoutBtns} height={50} autoClose={true}>
          <View style={styles.li}>
				   <Text style={styles.liText}>{activity}</Text>
          </View>
        </Swipeout>
			</View>
		)
		});
		return(
			<View style={styles.container}>
         
  				<Text style={styles.title}>
  					Customize Your Breaks
  				</Text>
          <View style={styles.flowRight}>
            <TextInput
              ref={'textInput'}
              style={styles.searchInput}
              onChangeText={(text) => this.setState({text})} 
              placeholder={this.state.text}/>
            <TouchableHighlight style={styles.addButton} 
              underlayColor={'#9BE8FF'} 
              onPress={() => this.saveData(this.state.text)}>
              <Text style={styles.buttonText2}>+</Text>
            </TouchableHighlight>
          </View>
          <ScrollView style={styles.wrapper} bounces={true} horizontal={false}>
    				<View style={styles.activityListWrapper}>
    					{activities}
  				  </View>
          </ScrollView>
          <TouchableHighlight 
            style={styles.button2} 
            underlayColor={'#9BE8FF'} 
            onPress={() => this.popToTop()}>
            <Text style={styles.buttonText2}>
              Main Page
            </Text>
          </TouchableHighlight>
			</View>
		  )
  	}
  });

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: 'red',
	},
	title: {
    marginTop: 100,
		fontWeight: 'bold',
		fontSize: 30,
    textAlign: 'center',
    color: 'white',
	},
  wrapper: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    marginTop: -10,
  },
   flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 45,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
    textAlign:'center',
    backgroundColor: 'white'
  },
	// textInputWrapper: {
 //    flex: 1,
	// 	backgroundColor: '#05B3DD',
	// 	height: 100,
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// 	alignSelf: 'stretch',
 //    flexDirection: 'row',
 //    paddingRight: 30
	// },
  addButton: {
    backgroundColor: 'gray',
    borderRadius: 8.150,
    width: 45,
    height: 45,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2
  },
  button2: {
    backgroundColor: '#05B3DD',
    // margin: 15,
    borderRadius: 8.150,
    width: 300,
    height: 45,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2,
    alignSelf: 'center',
    margin: 45
  },
  buttonText2: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  delete: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: -50,
    marginBottom: 10,
    alignSelf:'stretch',
  },
  activityListWrapper: {
    opacity: .75,
    marginTop: -50,
    backgroundColor: 'gray',
  }
})

module.exports = Settings;