import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
        style={styles.card}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    backgroundColor: '#fff',
    padding: 20,
    width: '45%',
    borderRadius: 10,
    marginHorizontal: 7,
    marginVertical: 10,
    height: 100,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
