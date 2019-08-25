import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { Sidebar, Body } from './layout';
import { PersistGate } from 'redux-persist/integration/react';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer>
            <Sidebar />
            <Body />
          </AppContainer>
        </PersistGate>
      </Provider>  
    )
  }
}
