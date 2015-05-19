'use strict';

var FavoritesListScreen = require('./FavoritesListScreen');
var React = require('react-native');

var {
  StyleSheet,
  NavigatorIOS
} = React;

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
