import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux';
import store from './store';
import { get } from 'lodash';
import Sidebar from './layout/Sidebar/Sidebar';
import { Table, Text, Column, Modal, Input, Row, Button } from './components/common';
import { Add } from '@material-ui/icons';
import AddPositionForm from './components/AddPositionForm/AddPositionForm';

const BodyContainer = styled.div`
  margin: 2rem;
  width: 100%;
`

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export default class App extends React.Component {
  state = {
    modalOpened: false,
  }

  toggleModal = () => this.setState(({ modalOpened }) => ({ modalOpened: !modalOpened }))

  render () {
    const { modalOpened } = this.state;
    return (
      <Provider store={store}>
        <AppContainer>
          <Sidebar />
          <BodyContainer>
            <Table
              leftHeader={<Text text='LONG' bold />}
              rightHeader={
                <Column align='flex-end'>
                  <Add onClick={this.toggleModal} cursor='pointer' fontSize='large' />
                </Column>
              }
              columns={['Fecha', 'Precio', 'Posición', 'Stop', 'Pérdida']}
              body={['11/08/2019', '11.500', '0.1', '12.100', '20']}
            />
          </BodyContainer>
          <Modal title='Agregar nueva posición LONG' visible={modalOpened} onClose={this.toggleModal}>
            <AddPositionForm />
          </Modal>
        </AppContainer>
      </Provider>
      
    )
  }
}