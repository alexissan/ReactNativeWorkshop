'use strict';

var AlbumsSearchScreen = require('./AlbumsSearchScreen');
var React = require('react-native');

var {
  StyleSheet,
  View // Remove this view and add a NavigatorIOS
} = React;

var Albums = React.createClass({
  render() {
    return (
      /*Add a NavigatorIOS component here*/
      <View />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Albums;
