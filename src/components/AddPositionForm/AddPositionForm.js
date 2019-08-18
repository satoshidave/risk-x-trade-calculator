import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Input, Button, Row, Column, Text } from '../common';
import { addLong } from '../../actions/addLong';

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
      loss: parseFloat((price - stop) * position).toFixed(2)
    })
  }

  render() {
    const { price, quantity, stop, position, loss } = this.state;
    const { addLongPosition, onAddPosition } = this.props;
    return (
      <>
        <Input
          label='Precio de compra'
          value={price}
          onChange={event => this.setState({ price: get(event, 'target.value', 0) }, this.calcPosition)}
        />
        <Input
          label='Cantidad'
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
            <Text text='Posición' />
          </Column>
          <Column align='flex-end'>
            <Text text={position || 0} />
          </Column>
        </Row>
        <Row marginTop={20}>
          <Column>
            <Text text='Pérdida en Stop' />
          </Column>
          <Column align='flex-end'>
            <Text text={loss || 0} />
          </Column>
        </Row>
        <Button margin='0.9rem 0 0 0' onClick={() => {
          addLongPosition({ price, position, stop, loss });
          onAddPosition();
        }}>Agregar posición</Button>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addLongPosition(position) {
    dispatch(addLong(position))
  },
});

export default connect(null, mapDispatchToProps)(AddPositionForm);
