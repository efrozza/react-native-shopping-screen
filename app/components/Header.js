import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { bold } from 'ansi-colors';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('../images/img1.png')} style={styles.logo} />
        <Text style={styles.title}>Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
    width: Dimensions.get('window').width,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    color: '#c1c1c1',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
