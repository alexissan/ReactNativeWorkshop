/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var Albums = require('./Albums');
var Favorites = require('./Favorites');
var React = require('react-native');

var {
  AppRegistry,
  TabBarIOS,
} = React;

var iTunesCatalog = React.createClass({

  getInitialState() {
    return {
      selectedTab: 'albums'
    }
  },

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'albums'}
          icon={{uri: 'albumsIcon'}}
          selectedIcon={{uri: 'albumsIconSelected'}}
          title="Albums"
          onPress={() => {
            this.setState({
              selectedTab: 'albums'
            });
          }}>
          <Albums/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'favorites'}
          icon={{uri: 'favoritesIcon'}}
          selectedIcon={{uri: 'favoritesIconSelected'}}
          title="Favorites"
          onPress={() => {
            this.setState({
              selectedTab: 'favorites'
            });
          }}>
          <Favorites/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('iTunesCatalog', () => iTunesCatalog);
