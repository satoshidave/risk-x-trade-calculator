import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { get } from 'lodash';
import PositionTable from '../PositionTable';
import { Modal } from '../../components/common';
import AddPositionForm from '../../components/AddPositionForm/AddPositionForm';

const BodyContainer = styled.div`
  margin: 2rem;
  width: 100%;
`

class Body extends Component {
  state = {
    modalOpened: false,
    modalType: null,
  }

  toggleModal = type => this.setState(({ modalOpened }) => ({ modalOpened: !modalOpened, modalType: type || null }))

  render() {
    const { modalOpened, modalType } = this.state;
    const { longs, shorts } = this.props;
    return (
      <>
        <BodyContainer>
          <PositionTable title='LONG' data={longs} onClickAdd={() => this.toggleModal('LONG')} />
          <PositionTable margin='2rem 0 0 0' title='SHORT' data={shorts} onClickAdd={() => this.toggleModal('SHORT')} />
        </BodyContainer>
        <Modal title={`Add new ${modalType} position`} visible={modalOpened} onClose={this.toggleModal}>
          <AddPositionForm onAddPosition={this.toggleModal} modalType={modalType} />
        </Modal>
      </>
    )
  }
}

const mapStateToProps = ({ totals }) => ({
  longs: get(totals, 'longs', []),
  shorts: get(totals, 'shorts', [])
})

export default connect(mapStateToProps)(Body);
