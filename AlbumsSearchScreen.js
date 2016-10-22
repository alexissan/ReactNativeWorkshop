'use strict'

var AlbumsListScreen = require('./AlbumsListScreen')
import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native'

var iTunesSearchURL = 'https://itunes.apple.com/search?'

function urlForAlbumsQueryWithResultsLimit (query, resultsLimit) {
  var data = {
    entity: 'album',
    term: query,
    limit: resultsLimit
  }

  var queryString = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&')

  return iTunesSearchURL + queryString
};

var AlbumsSearchScreen = React.createClass({

  getInitialState () {
    return {
      isLoading: false,
      errorMessage: '',
      searchString: ''
    }
  },

  onSearchTextChanged (event) {
    this.setState({searchString: event.nativeEvent.text})
  },

  _executeQuery (query) {
    console.log(query)

    this.setState({ isLoading: true, errorMessage: '' })

    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.results))
      .catch(error => this.setState({
        isLoading: false,
        errorMessage: 'Something bad happened: \n' + error
      }))
  },

  _handleResponse (results) {
    this.setState({ isLoading: false })

    if (results.length > 0) {
      this.props.navigator.push({
        title: this.state.searchString,
        component: AlbumsListScreen,
        passProps: {albums: results}
      })
    } else {
      this.setState({ errorMessage: "Can't find albums for your search input." })
    }
  },

  searchAlbums () {
    var query = urlForAlbumsQueryWithResultsLimit(this.state.searchString, 200)
    this._executeQuery(query)
  },

  onSearchTextSubmitEditing (event) {
    this.searchAlbums()
  },

  render () {
    var spinner = this.state.isLoading ?
      <ActivityIndicator size='large' /> :
      <View />

    return (
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.container}>
          <Image source={require('./Assets/itunes_logo.png')} style={styles.image} />
          <Text style={styles.description}>
            Search by artist, album or genre:
          </Text>
          <TextInput
            style={styles.searchInput}
            onChange={this.onSearchTextChanged}
            onSubmitEditing={this.onSearchTextSubmitEditing}
            clearButtonMode={'while-editing'}
            placeholder='Search album'
            returnKeyType='search' />
          {spinner}
          <Text style={styles.description}>{this.state.errorMessage}</Text>
        </View>
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center'
  },

  description: {
    marginBottom: 20,
    fontSize: 18,
    color: '#656565'
  },

  searchInput: {
    height: 36,
    padding: 4,
    marginBottom: 30,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#FF8000',
    borderRadius: 8
  },

  image: {
    width: 100,
    height: 100
  }
})

module.exports = AlbumsSearchScreen
