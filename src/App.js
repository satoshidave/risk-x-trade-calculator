import React from 'react'
import styled from 'styled-components'
import Sidebar from './layout/Sidebar/Sidebar';

const Container = styled.div`
`

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export default class App extends React.Component {
  render () {
    return (
      <AppContainer>
        <Sidebar />
        <Container>
          works
        </Container>
      </AppContainer>
    )
  }
}