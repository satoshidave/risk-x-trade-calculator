import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Input, Button } from '../common';
import { addLong } from '../../actions/addLong';

class AddPositionForm extends Component {
  state = {
    price: null,
    position: null,
    stop: null,
  }

  render() {
    const { price, position, stop } = this.state;
    const { addLongPosition, totals } = this.props;
    console.log(totals)
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
        <Button margin='0.9rem 0 0 0' onClick={() => addLongPosition({ price, position, stop })}>Agregar posición</Button>
      </>
    )
  }
}

const mapStateToProps = ({ totals }) => ({
  totals,
});

const mapDispatchToProps = dispatch => ({
  addLongPosition(position) {
    dispatch(addLong(position))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPositionForm);
