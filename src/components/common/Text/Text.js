import React from 'react';
import styled, { css } from 'styled-components';
import { WHITE } from '../../../utils/colors';

const Text = styled.span`
  font-size: ${({ size = 16 }) => size / 10}rem;
  color: ${({ color = WHITE }) => color };
`;

export default Text;
