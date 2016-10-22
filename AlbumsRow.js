'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image
} from 'react-native';

function yearFromReleaseDate(releaseDate) {
  return (new Date(releaseDate)).getFullYear();
}

var AlbumsRow = React.createClass({
  render() {
    var album = this.props.rowData;
    var year = yearFromReleaseDate(album.releaseDate);

    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="#CCCCCC">
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{uri: album.artworkUrl100}} />
            <View style={styles.textContainer}>
              <Text style={styles.title}
                    numberOfLines={2}>{album.collectionName} ({year})</Text>
              <Text style={styles.subtitle}
                    numberOfLines={1}>{album.artistName}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
});

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },

  textContainer: {
    flex: 1
  },

  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
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

  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
});

module.exports = AlbumsRow;
