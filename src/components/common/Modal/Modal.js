import React, { Component } from 'react';
import styled from 'styled-components';
import { Clear } from '@material-ui/icons';
import { DARK_GREY_2, DARK_GREY_1, BLUE_GREEN } from '../../../utils/colors';
import Text from '../Text';

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20rem;
`

const ModalLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const ModalContainer = styled.div`
  background-color: ${ DARK_GREY_2 };
  padding: 0.9rem;
  border-bottom: 0.1rem solid rgba(255,255,255,.12);
  box-shadow:
    0 0.2rem 0.1rem -0.1rem rgba(0,0,0,.2),
    0 0.1rem 0.1rem 0 rgba(0,0,0,.14),
    0 0.1rem 0.3rem 0 rgba(0,0,0,.12);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
`

const ModalHeader = styled.div`
  background-color: ${ DARK_GREY_1 };
  border-bottom: 0.1rem solid ${ BLUE_GREEN };
  margin: -0.9rem -0.9rem 0 -0.9rem;
  padding: 0.9rem;
  border-radius: 0.4rem 0.4rem 0 0;
  display: flex;
`

const ModalBody = styled.div`
  margin-top: 0.9rem;
`

export default class Modal extends Component {
  render() {
    const { children, title, onClose, visible } = this.props;
    if (!visible) return null;
    return (
      <ModalWrapper>
        <ModalLayer>
          <ModalContainer>
            { title && (
              <ModalHeader>
                <Text text={title} bold style={{ marginRight: 10 }} />
                <Clear cursor='pointer' fontSize='large' onClick={onClose} />
              </ModalHeader>
            ) }
            <ModalBody>
              { children }
            </ModalBody>
          </ModalContainer>
        </ModalLayer>
      </ModalWrapper>
    )
  }
}