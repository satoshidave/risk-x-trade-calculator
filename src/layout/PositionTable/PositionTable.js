import React, { Component } from 'react';
import { map, get } from 'lodash';
import { connect } from 'react-redux';
import { Table, Column, Text, Row } from '../../components/common';
import { Add, Create, Clear } from '@material-ui/icons';
import { LIPSTICK_RED } from '../../utils/colors';
import { addPosition } from '../../actions/addLong';
import { REMOVE_LONG, REMOVE_SHORT } from '../../utils/types';

const columns = [
  { name: 'date', value: 'Date' },
  { name: 'price', value: 'Price' },
  { name: 'position', value: 'Position' },
  { name: 'stop', value: 'Stop' },
  { name: 'loss', value: 'Loss' },
  { name: 'actions', value: 'Actions' },
]

class PositionTable extends Component {
  positionActions = (id) => {
    const { removeSelectedPosition, title } = this.props;
    return (
      <>
        <Create cursor='pointer' fontSize='large' />
        <Clear
          cursor='pointer'
          fontSize='large'
          htmlColor={LIPSTICK_RED}
          onClick={() => removeSelectedPosition(title, id)}
        />
      </>
    )
  }

  render() {
    const { data, title, onClickAdd, ...props } = this.props;
    const body = map(data, item => {
      return { ...item, actions: this.positionActions(get(item, 'id', null)) }
    })
    return (
      <Table
        {...props}
        leftHeader={<Text text={title} bold />}
        rightHeader={
          <Column align='flex-end'>
            <Add onClick={onClickAdd} cursor='pointer' fontSize='large' />
          </Column>
        }
        columns={columns}
        body={body}
        onEmptyComponent={
          <Row margin='20px' justify='center'>
            <Text text={`Actualmente no tienes posiciones ${title} abiertas`} color={LIPSTICK_RED} />
          </Row>
        }
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeSelectedPosition(positionType, id) {
    const type = positionType === 'LONG' ? REMOVE_LONG : REMOVE_SHORT;
    dispatch(addPosition(type, id));
  }
})

export default connect(null, mapDispatchToProps)(PositionTable);
