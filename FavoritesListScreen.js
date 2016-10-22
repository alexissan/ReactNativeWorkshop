'use strict';

var AlbumsRow = require('./AlbumsRow');
var AlbumDetailScreen = require('./AlbumDetailScreen');
var FavoritesStore = require('./FavoritesStore');
var React = require('react');

import {
  ListView
} from 'react-native';

var FavoritesListScreen = React.createClass({

  getInitialState() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: dataSource.cloneWithRows(FavoritesStore.getAll())
    };
  },

  componentDidMount() {
    FavoritesStore.on(FavoritesStore.CHANGE_EVENT, this.onFavoritesChange);

    FavoritesStore.loadPersistedFavorites();
  },

  componentWillUnmount() {
    FavoritesStore.removeListener(FavoritesStore.CHANGE_EVENT, this.onFavoritesChange);
  },

  onFavoritesChange() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(FavoritesStore.getAll())
    });
  },

  onRowPress(rowID) {
    var album = FavoritesStore.getAll()[rowID];

    this.props.navigator.push({
      title: album.collectionName,
      component: AlbumDetailScreen,
      passProps: {album: album}
    });
  },

  renderRow(rowData, sectionID, rowID) {
    return (
      <AlbumsRow
        onPress={() => this.onRowPress(rowID)}
        rowData={rowData} />
    );
  },

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
    );
  }
});

module.exports = FavoritesListScreen;
