import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import { Sidebar, Body } from './layout';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer>
          <Sidebar />
          <Body />
        </AppContainer>
      </Provider>  
    )
  }
}
