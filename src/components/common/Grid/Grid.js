import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  flex: ${({ flex = 1 }) => flex};
`;

const Row = ({...props}) => <FlexContainer direction='row' {...props} />;

const Column = ({...props}) => <FlexContainer {...props} />;

export {
  Row,
  Column,
}
