'use strict';

var React = require('react-native');
var FavoritesStore = require('./FavoritesStore');

var {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  Text,
  Image,
} = React;

function yearFromReleaseDate(releaseDate) {
  return (new Date(releaseDate)).getFullYear();
}

function fullSizeUrl(thumbUrl) {
  return thumbUrl.replace('.100x100-75', '');
}

var AlbumDetailScreen = React.createClass({

  render() {

    return (
      <View />
    );
  }
});

var styles = StyleSheet.create({
  bodyContainer: {
    padding: 10
  },

  artwork: {
    flex: 1
  },

  artworkContainer: {
    flex: 1,
    alignItems: 'stretch',
  },

  title: {
    fontSize: 20,
    color: '#FF8000',
    fontWeight: 'bold'
  },

  subtitle: {
    fontSize: 16,
    color: '#656565'
  },

  button: {
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
    height: 36,
  },

  favoriteButton: {
    backgroundColor: '#FF9900',
  },

  showMoreButton: {
    backgroundColor: '#FE2E64',
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
});

module.exports = AlbumDetailScreen;
