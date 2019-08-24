import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import moment from 'moment';
import { get } from 'lodash';
import { Input, Button, Row, Column, Text } from '../common';
import { addPosition } from '../../actions/addLong';
import { ADD_LONG, ADD_SHORT } from '../../utils/types';

class AddPositionForm extends Component {
  state = {
    price: null,
    quantity: null,
    stop: null,
    position: null,
    loss: null,
  }

  calcPosition = () => {
    const { quantity, price, stop } = this.state;
    const position = parseFloat((quantity / price)).toFixed(8);
    this.setState({
      position,
      loss: Math.abs(parseFloat((price - stop) * position).toFixed(2)),
    })
  }

  render() {
    const { price, quantity, stop, position, loss } = this.state;
    const { addNewPosition, onAddPosition, modalType } = this.props;
    return (
      <>
        <Input
          label={`${modalType === 'LONG' ? 'Buy' : 'Sell'} price`}
          value={price}
          onChange={event => this.setState({ price: get(event, 'target.value', 0) }, this.calcPosition)}
        />
        <Input
          label='Quantity'
          value={quantity}
          onChange={event => this.setState({ quantity: get(event, 'target.value', 0) }, this.calcPosition)}
        />
        <Input
          label='Stop'
          value={stop}
          onChange={event => this.setState({ stop: get(event, 'target.value', 0) }, this.calcPosition)}
        />
        <Row marginTop={20}>
          <Column>
            <Text text='Position' />
          </Column>
          <Column align='flex-end'>
            <Text text={position || 0} />
          </Column>
        </Row>
        <Row marginTop={20}>
          <Column>
            <Text text='Stop Loss' />
          </Column>
          <Column align='flex-end'>
            <Text text={loss || 0} />
          </Column>
        </Row>
        <Button margin='0.9rem 0 0 0' onClick={() => {
          addNewPosition(modalType, {
            id: uuid(),
            date: moment().format('DD/MM/YYYY HH:mm'),
            price,
            position,
            stop,
            loss,
          });
          onAddPosition();
        }}>Add Position</Button>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewPosition(modalType, position) {
    const type = modalType === 'LONG' ? ADD_LONG : ADD_SHORT;
    dispatch(addPosition(type, position))
  }
});

export default connect(null, mapDispatchToProps)(AddPositionForm);
