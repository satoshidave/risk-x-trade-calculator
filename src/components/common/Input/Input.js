import React, { Component } from 'react'
import styled from 'styled-components';
import { PALE_GREY } from '../../../utils/colors';
import { Row } from '../Grid';
import Text from '../Text';

const InputComponent = styled.input`
  height: 4.7rem;
  background-color: ${ PALE_GREY };
  width: 100%;
  border: none;
  padding: 1rem;
`;

export default class Input extends Component {
  render() {
    const { label, value, onChange } = this.props;
    return (
      <Row direction='column'>
        { label && (
          <Row>
            <Text text={label} />
          </Row>
        ) }
        <Row>
          <InputComponent
            value={value}
            onChange={onChange}
          />
        </Row>
      </Row>
    );
  }
}
