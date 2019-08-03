import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
`

const CardContainer = styled.div`
  ${({ width }) => width && css`
    width: ${ width };
  ` }
  background-color: #1e1e1e;
  border-bottom: 0.1rem solid rgba(255,255,255,.12);
  box-shadow:
    0 0.2rem 0.1rem -0.1rem rgba(0,0,0,.2),
    0 0.1rem 0.1rem 0 rgba(0,0,0,.14),
    0 0.1rem 0.3rem 0 rgba(0,0,0,.12);
  border-radius: 0.4rem;
`

const CardHeader = styled.div`
  background-color: #27272b;
  height: 3.5rem;
  border-radius: 0.4rem 0.4rem 0 0;
  padding: 0.9rem;
`
const CardBody = styled.div`
  padding: 0.9rem;
`

const Card = () => (
  <CardContainer>
    <CardHeader>Header</CardHeader>
    <CardBody>
      Body
    </CardBody>
  </CardContainer>
)

const SidebarContainer = styled.div`
  width: 300px;
  padding: 2rem;
`

const Sidebar = () => (
  <SidebarContainer>
    <Card />
  </SidebarContainer>
)

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