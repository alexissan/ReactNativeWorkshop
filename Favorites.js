'use strict';

var FavoritesListScreen = require('./FavoritesListScreen');
import React, { Component } from 'react';

import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

var Favorites = React.createClass({
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#FE2E64'
        initialRoute={{
          title: 'Favorites',
          component: FavoritesListScreen
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Favorites;
