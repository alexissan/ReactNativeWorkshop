'use strict';

var AlbumsRow = require('./AlbumsRow');
var AlbumDetailScreen = require('./AlbumDetailScreen');
var React = require('react');

import {
  ListView
} from 'react-native';

var AlbumsListScreen = React.createClass({

  getInitialState() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: dataSource.cloneWithRows(this.props.albums)
    };
  },

  onRowPress(rowID) {
    var album = this.props.albums[rowID];

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

module.exports = AlbumsListScreen;
