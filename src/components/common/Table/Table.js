import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { map } from 'lodash';
import { DARK_GREY_2, DARK_GREY_1, BLUE_GREEN } from '../../../utils/colors';
import { Row, Column } from '../Grid';
import Text from '../Text';

const TableContainer = styled.div`
  background-color: ${ DARK_GREY_2 };
  border-bottom: 0.1rem solid rgba(255,255,255,.12);
  box-shadow:
    0 0.2rem 0.1rem -0.1rem rgba(0,0,0,.2),
    0 0.1rem 0.1rem 0 rgba(0,0,0,.14),
    0 0.1rem 0.3rem 0 rgba(0,0,0,.12);
  border-radius: 0.4rem;
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const TableHeaderContainer = styled.div`
  background-color: ${ DARK_GREY_1 };
  height: 4rem;
  border-radius: 0.4rem 0.4rem 0 0;
  padding: 0.9rem;
`

const TableHeader = ({ leftHeader, rightHeader, header }) => (
  <TableHeaderContainer>
    {
      ((leftHeader || rightHeader) || header ) && (
        <Row>
          { (leftHeader || header) && <Column>{ leftHeader || header }</Column> }
          { rightHeader && <Column>{ rightHeader }</Column> }
        </Row>
      )
    }
  </TableHeaderContainer>
)

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TR = styled.tr`
  text-align: right;
  padding: 0.9rem;
`
const TD = styled.td`
  text-align: right;
  padding: 0.9rem;
  border-top: 0.1rem solid ${ BLUE_GREEN };
`

export default class Table extends Component {
  render() {
    const {
      leftHeader,
      rightHeader,
      header,
      columns,
      body,
      onEmptyComponent,
      ...props
    } = this.props;
    const dataExists = typeof body === 'object' && body.length > 0;
    console.log(body)
    return (
      <TableContainer {...props}>
        <TableHeader
          leftHeader={leftHeader}
          rightHeader={rightHeader}
          header={header}
        />
        <TableWrapper>
          <thead>
            <TR>
              { map(columns, ({ value }, index) => (
                <TD key={`thead-${index}`}>
                  <Text color={BLUE_GREEN} text={value} bold />
                </TD>
              )) }
            </TR>
          </thead>
          <tbody>
            {
              dataExists && map(body, (item, index) => (
                <TR key={index}>
                  { map(columns, ({ name }, index) => <TD key={index}>{ item[name] }</TD>) }
                </TR>
              ))
            }
          </tbody>
        </TableWrapper>
        { !dataExists && onEmptyComponent }
      </TableContainer>
    )
  }
}