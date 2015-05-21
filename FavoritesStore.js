'use strict'

// We are using events emitter from nodejs:
// https://nodejs.org/api/events.html
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var React = require('react-native');

var {
  AsyncStorage
} = React;

// You will use it soon
var STORAGE_KEY = 'iTunesCatalog:Favorites';

var _favorites = {};

var FavoritesStore = assign({}, EventEmitter.prototype, {

  getAll() {
    return [];
  },

  isFavorite(album) {

  },

  toggleFavorite(album) {

  },
});

module.exports = FavoritesStore;
