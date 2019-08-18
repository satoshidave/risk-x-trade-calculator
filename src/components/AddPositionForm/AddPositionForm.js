import React, { Component } from 'react';
import { get } from 'lodash';
import { Input, Button } from '../common';

export default class AddPositionForm extends Component {
  state = {
    price: null,
    position: null,
    stop: null,
  }

  render() {
    const { price, position, stop } = this.state;
    return (
      <>
        <Input
          label='Precio'
          value={price}
          onChange={event => this.setState({ price: get(event, 'target.value', 0) })}
        />
        <Input
          label='Posición'
          value={position}
          onChange={event => this.setState({ position: get(event, 'target.value', 0) })}
        />
        <Input
          label='Stop'
          value={stop}
          onChange={event => this.setState({ stop: get(event, 'target.value', 0) })}
        />
        <Button margin='0.9rem 0 0 0'>Agregar posición</Button>
      </>
    )
  }
}
