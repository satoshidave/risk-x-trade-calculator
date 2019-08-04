import React from 'react';
import styled, { css } from 'styled-components';
import { toRem } from '../../../utils/functions';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  flex: ${({ flex = 1 }) => flex};
  margin: ${({
    margin,
    marginVertical = 0,
    marginHorizontal = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
  }) => margin || css`
    ${toRem(marginTop || marginVertical)}rem 
    ${toRem(marginRight || marginHorizontal)}rem 
    ${toRem(marginBottom || marginVertical)}rem 
    ${toRem(marginLeft || marginHorizontal)}rem
  `};
  ${({ align }) => align && css`
    align-items: ${ align };
  `};
  ${({ justify }) => justify && css`
    justify-content: ${ justify };
  `};
`;

const Row = ({...props}) => <FlexContainer direction='row' {...props} />;

const Column = ({...props}) => <FlexContainer {...props} />;

export {
  Row,
  Column,
}
