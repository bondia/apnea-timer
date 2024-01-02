import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import Router from './app/Router';
import configureAppStore from './app/redux/configureAppStore';
import defaultTheme from './app/themes/defaultTheme';

const store = configureAppStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
export type AppDispatch = typeof store.dispatch;
