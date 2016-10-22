'use strict'

// We are using events emitter from nodejs:
// https://nodejs.org/api/events.html
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var React = require('react');

import {
  AsyncStorage
} from 'react-native';

var STORAGE_KEY = 'iTunesCatalog:Favorites';

var _favorites = {};

var FavoritesStore = assign({}, EventEmitter.prototype, {

  CHANGE_EVENT: 'change',

  loadPersistedFavorites() {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => {
        if (value !== null) {
          _favorites = JSON.parse(value);

          this.emit(this.CHANGE_EVENT);
        }
      })
      .done();
  },

  getAll() {
    return Object.keys(_favorites).map(key => _favorites[key]);
  },

  isFavorite(album) {
    return _favorites[album.collectionId] !== undefined;
  },

  toggleFavorite(album) {
    if (this.isFavorite(album)) {
      this.unfavorite(album);
    } else {
      this.favorite(album);
    }
  },

  favorite(album) {
    _favorites[album.collectionId] = album;

    this.saveChanges();
  },

  unfavorite(album) {
    delete _favorites[album.collectionId];

    this.saveChanges();
  },

  saveChanges() {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(_favorites)).done();

    this.emit(this.CHANGE_EVENT);
  }
});

module.exports = FavoritesStore;
