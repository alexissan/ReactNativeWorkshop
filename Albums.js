'use strict';

var AlbumsSearchScreen = require('./AlbumsSearchScreen');
import React, { Component } from 'react';

import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

var Albums = React.createClass({
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#FE2E64'
        initialRoute={{
          title: 'Albums',
          component: AlbumsSearchScreen
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Albums;
