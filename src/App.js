/* @flow */

import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './scenes/Home';

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#FF1B1B',
    accent: '#FF1B1B',
  },
};

export default class App extends React.Component<{}> {
  render() {
    return (
      <PaperProvider theme={theme}>
        <React.Fragment>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <Home />
        </React.Fragment>
      </PaperProvider>
    );
  }
}