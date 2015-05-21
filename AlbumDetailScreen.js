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
  LinkingIOS
} = React;

function yearFromReleaseDate(releaseDate) {
  return (new Date(releaseDate)).getFullYear();
}

function fullSizeUrl(thumbUrl) {
  return thumbUrl.replace('.100x100-75', '');
}

var AlbumDetailScreen = React.createClass({

  getInitialState() {
    return {};
  },

  componentDidMount() {
    // way of calculating relative size:
    // https://github.com/facebook/react-native/issues/953
    setTimeout(this.measureArtworkContainer);
  },

  measureArtworkContainer() {
    this.refs.artworkContainer.measure((ox, oy, width, height) => {
      this.setState({artworkContainerHeight: width});
    });
  },

  onShowMoreButtonPressed() {
    LinkingIOS.openURL(this.props.album.collectionViewUrl);
  },

  onFavoriteButtonPressed() {

  },

  render() {
    var album = this.props.album;
    var year = yearFromReleaseDate(album.releaseDate);
    var favoriteButtonText = 'Favorite';
    var artworkContainerHeight = this.state.artworkContainerHeight;

    return (
      <ScrollView alwaysBounceVertical={false}>
        <View style={{
                flex: 1,
                alignItems: 'stretch',
                height: artworkContainerHeight}}
              ref="artworkContainer">
          <Image style={styles.artwork} source={{uri: fullSizeUrl(album.artworkUrl100)}} />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}
                numberOfLines={2}>{album.collectionName} ({year})</Text>
          <Text style={styles.subtitle}
                numberOfLines={1}>{album.artistName}</Text>
          <TouchableHighlight
            style={[styles.button, styles.favoriteButton]}
            underlayColor='#AA6600'
            onPress={this.onFavoriteButtonPressed} >
            <Text style={styles.buttonText}>{favoriteButtonText}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.showMoreButton]}
            underlayColor='#FF0040'
            onPress={this.onShowMoreButtonPressed} >
            <Text style={styles.buttonText}>Show on iTunes</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
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
