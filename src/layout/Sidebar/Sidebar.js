import React, { Component } from 'react';
import { map, times, get } from 'lodash'
import styled from 'styled-components';
import { Card, Row, Text, Input, Column } from '../../components/common';
import { BLUE_GREEN } from '../../utils/colors';

const SidebarContainer = styled.div`
  width: 30rem;
`

const RangeComponent = styled.input.attrs({ type: 'range', min: '0', max: '4' })`
  width: 100%;
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}
:focus {
  outline: none;
}
::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.2rem;
  cursor: pointer;
  animate: 0.2s;
  background: ${ BLUE_GREEN };
  border-radius: 0.13rem;
}
::-webkit-slider-thumb {
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
  background: ${ BLUE_GREEN };
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
}
:focus::-webkit-slider-runnable-track {
  background: ${ BLUE_GREEN };
}
::-moz-range-track {
  width: 100%;
  height: 0.2rem;
  cursor: pointer;
  animate: 0.2s;
  background: ${ BLUE_GREEN };
  border-radius: 0.13rem;
}
::-moz-range-thumb {
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
  background: ${ BLUE_GREEN };
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
}
::-ms-track {
  width: 100%;
  height: 0.2rem;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
::-ms-fill-lower {
  background: #${ BLUE_GREEN };
  border-radius: 0.26rem;
}
::-ms-fill-upper {
  background: ${ BLUE_GREEN };
  border-radius: 0.26rem;
}
::-ms-thumb {
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: ${ BLUE_GREEN };
  cursor: pointer;
}
:focus::-ms-fill-lower {
  background: ${ BLUE_GREEN };
}
:focus::-ms-fill-upper {
  background: ${ BLUE_GREEN };
}
`

class Range extends Component {
  render () {
    const { value, onChange } = this.props;
    return (
      <>
        <RangeComponent value={value} onChange={event => onChange(event)} />
        <Row>
          { map(times(5), (option) => (
            <Column key={option} align='center'>{ `${option + 1}%` }</Column>
          )) }
        </Row>
      </>
    )
  }
}

export default class Sidebar extends Component {
  state = {
    collateral: 0,
    percentage: 0,
  }

  onChangeRange = (event) => {
    const percentage = get(event, 'target.value', 0);
    this.setState({ percentage });
  }

  setCollateral = (event) => {
    const collateral = parseInt(get(event, 'target.value', 0));
    this.setState({ collateral });
  }

  accountBody = () => (
    <>
      <Row direction='column'>
        <Text text='Mi colateral' />
        <Input onChange={event => this.setCollateral(event)} />
      </Row>
      <Row direction='column' marginVertical={20}>
        <Text text='% de R' />
        <Range value={this.state.percentage} onChange={this.onChangeRange} />
      </Row>
      <Row>
        <Column>
          <Text text='R por trade' />
        </Column>
        <Column align='flex-end'>
          <Text bold text={(this.state.collateral * (parseInt(this.state.percentage) + 1)) / 100} />
        </Column>
      </Row>
    </>
  )

  render () {
    return (
      <SidebarContainer>
        <Card
          header={<Text text='Mi cuenta' bold />}
          body={this.accountBody()}
        />
        <Card />
      </SidebarContainer>
    );
  }
}
