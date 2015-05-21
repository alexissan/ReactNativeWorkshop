'use strict';

var AlbumsSearchScreen = require('./AlbumsSearchScreen');
var React = require('react-native');

var {
  StyleSheet,
  NavigatorIOS
} = React;

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
