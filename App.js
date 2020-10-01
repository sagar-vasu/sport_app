import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import Navigator from './src/config/navigation/navigation';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showRealApp: false,
      isNavigation: false,
    };
  }
  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            alignSelf: 'center',
            resizeMode: 'stretch',
            marginTop: 30,
            height: 250,
          }}
        />
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.nextBtn}>
        <Text
          style={{color: '#033E9C', textAlign: 'center', fontWeight: 'bold'}}>
          Next Step
        </Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.textDone}>Let's Get Started</Text>
      </View>
    );
  };
  _onDone = () => {
    this.setState({isNavigation: true});
  };
  onslideCahnge = (index, lastIndex) => {
    console.log(index, lastIndex);
  };
  render() {
    if (this.state.isNavigation) {
      return <Navigator />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          dotStyle={{width: 0, height: 0}}
          activeDotStyle={{width: 0, height: 0}}
          onSlideChange={(index, lastIndex) =>
            this.onslideCahnge(index, lastIndex)
          }
          backgroundColor="black"
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'grey',
    fontSize: 20,
    textAlign: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
    width: '80%',
    alignSelf: 'center',
    color: '#033E9C',
  },
  slide: {
    flex: 1,
    backgroundColor: '#033E9C',
  },
  buttonCircle: {
    borderColor: '#033E9C',
    borderWidth: 1,
    padding: '5%',
    borderRadius: 50,
    width: '78%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#033E9C',
    marginRight: '40%',
    // marginTop:-50
  },
  textDone: {
    color: 'white',
  },
  nextBtn: {
    backgroundColor: 'white',
    borderColor: '#033E9C',
    borderWidth: 1,
    padding: '5%',
    paddingLeft: '20%',
    paddingRight: '20%',
    borderRadius: 50,
    marginRight: '22%',
  },
  cardContainer: {
    backgroundColor: '#033E9C',
    marginVertical: 40,
    width: '100%',
    paddingTop: 30,
    height: '70%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 3,
  },
});

const slides = [
  {
    key: 's1',
    text: 'CHANGING LIVES THROUGH SPORTS',
    title: 'WELCOME TO TRAX SPORT',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require('./assets/BlueManlogo.png'),
  },
  {
    key: 's2',
    title: 'OUR MISSION',
    titleStyle: styles.title,
    text:
      'Trax Sports is innovctive sports company that provide sports programs for schools and other organizations in the U.S and aboard.',
    image: require('./assets/IMG_6939.jpg'),
  },
  {
    key: 's3',
    title: 'WHAT WE DO',
    titleStyle: styles.title,
    text:
      'We focus on the fundamental and skills needed to succeed at the next level and utilize techniques to provide enhancement.',
    image: require('./assets/CoachAction.png'),
    backgroundColor: '#22bcb5',
  },
];
