import Exponent from 'exponent';
import React from 'react';
import { View, Platform, StatusBar,
         StyleSheet } from 'react-native';
import { NavigationContext, NavigationProvider,
         StackNavigation } from '@exponent/ex-navigation';
import Router from './navigation/Router';
import cacheAssetsAsync from './utils/cacheAssetsAsync';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { appIsReady: false };
  }

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/logo.png')
        ],
        fonts: [
          { billabong: require('./assets/fonts/Billabong-Regular.ttf') }
        ]
      });
    } catch (e) {
      console.warn('There was an error caching assets (see: main.js), perhaps due to a network timeout, so we skipped caching. Reload the app to try again.');
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      const navigationContext = new NavigationContext({
        router: Router
      });
      const initialRoute = Router.getRoute('rootNavigation');

      return (
        <View style={styles.container}>
          <NavigationProvider context={navigationContext}>
            <StackNavigation
              id="root"
              initialRoute={initialRoute}
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        </View>
      );
    }

    return <Exponent.Components.AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
});

Exponent.registerRootComponent(AppContainer);
