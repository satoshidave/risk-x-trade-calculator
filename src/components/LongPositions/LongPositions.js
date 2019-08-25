import React, { Component } from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { Table, Text, Column } from '../common';
import { Add } from '@material-ui/icons';

const columns = [
  { name: 'date', value: 'Fecha' },
  { name: 'price', value: 'Precio' },
  { name: 'position', value: 'Posición' },
  { name: 'stop', value: 'Stop' },
  { name: 'loss', value: 'Pérdida' },
]

class LongPositions extends Component {
  render() {
    const { longs, onClickAdd } = this.props;
    return (
      <Table
        leftHeader={<Text text='LONG' bold />}
        rightHeader={
          <Column align='flex-end'>
            <Add onClick={onClickAdd} cursor='pointer' fontSize='large' />
          </Column>
        }
        columns={columns}
        body={longs}
      />
    );
  }
}

const mapStateToProps = ({ totals }) => ({
  longs: get(totals, 'longs', []),
})

export default connect(mapStateToProps)(LongPositions);
