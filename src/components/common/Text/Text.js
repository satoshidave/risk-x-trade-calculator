import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { WHITE } from '../../../utils/colors';

const TextWrapper = styled.span`
  font-size: ${({ size = 16 }) => size / 10}rem;
  color: ${({ color = WHITE }) => color };
  ${({ bold }) => bold && css`
    font-weight: bold;
  `}
`;

export default class Text extends Component {
  render () {
    const { text, children, ...props } = this.props
    return (
      <TextWrapper {...props}>
        { text || children }
      </TextWrapper>
    );
  }
}
