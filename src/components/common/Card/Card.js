import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { DARK_GREY_1, DARK_GREY_2 } from '../../../utils/colors';
import { Row, Column } from '../Grid';

const CardContainer = styled.div`
  ${({ width }) => width && css`
    width: ${ width };
  ` }
  background-color: ${ DARK_GREY_2 };
  border-bottom: 0.1rem solid rgba(255,255,255,.12);
  box-shadow:
    0 0.2rem 0.1rem -0.1rem rgba(0,0,0,.2),
    0 0.1rem 0.1rem 0 rgba(0,0,0,.14),
    0 0.1rem 0.3rem 0 rgba(0,0,0,.12);
  border-radius: 0.4rem;
  margin: 2rem;
`

const CardHeaderContainer = styled.div`
  background-color: ${ DARK_GREY_1 };
  height: 4rem;
  border-radius: 0.4rem 0.4rem 0 0;
  padding: 0.9rem;
`
const CardBody = styled.div`
  padding: 0.9rem;
`

const CardHeader = ({ leftHeader, rightHeader, header }) => (
  <CardHeaderContainer>
    {
      ((leftHeader || rightHeader) || header ) && (
        <Row>
          { (leftHeader || header) && <Column>{ leftHeader || header }</Column> }
          { rightHeader && <Column>{ rightHeader }</Column> }
        </Row>
      )
    }
  </CardHeaderContainer>
)

export default class Card extends Component {
  render () {
    const {
      leftHeader,
      rightHeader,
      header,
      body,
    } = this.props;
    return (
      <CardContainer>
        <CardHeader
          leftHeader={leftHeader}
          rightHeader={rightHeader}
          header={header}
        />
        <CardBody>
          { body }
        </CardBody>
      </CardContainer>
    )
  }
}
