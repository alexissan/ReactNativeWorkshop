/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
} from 'react-native';

var Albums = require('./Albums');
var Favorites = require('./Favorites');

class ReactNativeWorkshop extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'albums'
    }
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'albums'}
          icon={require('./Assets/albumsIcon.png')}
          selectedIcon={require('./Assets/albumsIcon.png')}
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
          icon={require('./Assets/favoritesIcon.png')}
          selectedIcon={require('./Assets/favoritesIconSelected.png')}
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
};

AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
