import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { CORNFLOWER_BLUE } from '../../../utils/colors';

const ButtonContainer = styled.button`
  background-color: ${ CORNFLOWER_BLUE };
  height: 36px;
  color: white;
  border-radius: 4px;
  border: 0;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  outline: none;
  cursor: pointer;
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`

export default class Button extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <ButtonContainer {...props}>
        { children }
      </ButtonContainer>
    );
  }
}
