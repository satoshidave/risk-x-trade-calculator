import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/common';

const SidebarContainer = styled.div`
  width: 300px;
`

export default class Sidebar extends Component {
  render () {
    return (
      <SidebarContainer>
        <Card header='Mi cuenta'>
          Hola
        </Card>
        <Card />
      </SidebarContainer>
    );
  }
}
