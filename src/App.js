import React from 'react'
import styled from 'styled-components'
import Sidebar from './layout/Sidebar/Sidebar';
import { Table, Text, Column } from './components/common';
import { Add } from '@material-ui/icons';

const BodyContainer = styled.div`
  margin: 2rem;
  width: 100%;
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
        <BodyContainer>
          <Table
            leftHeader={<Text text='LONG' bold />}
            rightHeader={
              <Column align='flex-end'>
                <Add cursor='pointer' fontSize='large' />
              </Column>
            }
            columns={['Fecha', 'Precio', 'Posición', 'Stop', 'Pérdida']}
            body={['11/08/2019', '11.500', '0.1', '12.100', '20']}
          />
        </BodyContainer>
      </AppContainer>
    )
  }
}