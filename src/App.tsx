import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableLatestRenderer} from 'react-native-maps';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Assets} from 'react-native-ui-lib';
import {StackNavigation} from '@/navigation/stackNavigation';

Assets.loadAssetsGroup('icons', {
  SEARCH_ICON: require('./assets/images/searchIcon.png'),
  AVATAR: require('./assets/images/avatar.jpeg'),
  TENPO_EATS: require('./assets/images/tenpoEatsIcon.png'),
  PHONE_HAND: require('./assets/images/phoneHand.png'),
  LOCATION_ICON: require('./assets/images/locationIcon.png'),
  MARKET: require('./assets/images/market.png'),
});

enableLatestRenderer();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
