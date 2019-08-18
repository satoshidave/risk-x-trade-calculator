import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux';
import store from './store';
import { get } from 'lodash';
import Sidebar from './layout/Sidebar/Sidebar';
import { Table, Text, Column, Modal, Input, Row, Button } from './components/common';
import { Add } from '@material-ui/icons';
import AddPositionForm from './components/AddPositionForm/AddPositionForm';
import LongPositions from './components/LongPositions/LongPositions';

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
            <LongPositions onClickAdd={this.toggleModal} />
          </BodyContainer>
          <Modal title='Agregar nueva posición LONG' visible={modalOpened} onClose={this.toggleModal}>
            <AddPositionForm onAddPosition={this.toggleModal} />
          </Modal>
        </AppContainer>
      </Provider>
      
    )
  }
}