'use strict';

var AlbumsRow = require('./AlbumsRow');
var AlbumDetailScreen = require('./AlbumDetailScreen');
var React = require('react-native');

var {
  // You'll need to import a ListView here
  View, 
} = React;

var AlbumsListScreen = React.createClass({

  render() {
    return (
      // Replace this view by a ListView
      <View />
    );
  }
});

module.exports = AlbumsListScreen;
