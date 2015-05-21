'use strict'

var AlbumsListScreen = require('./AlbumsListScreen');
var React = require('react-native');

var {
  View,
} = React;

var iTunesSearchURL = 'https://itunes.apple.com/search?';

function urlForAlbumsQueryWithResultsLimit(query, resultsLimit) {
  var data = {
    entity: 'album',
    term: query,
    limit: resultsLimit
  };

  var queryString = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return iTunesSearchURL + queryString;
};

var AlbumsSearchScreen = React.createClass({

  render() {
    // Configure an "activity indicator" view here

    return (
      // We should layout here a "Search" screen
      <View />
    );
  }
});

// Fill the styles here

module.exports = AlbumsSearchScreen;
