import React, { Component } from 'react';
import { map, times, get, sumBy, size, each } from 'lodash';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Card, Row, Text, Input, Column } from '../../components/common';
import { BLUE_GREEN } from '../../utils/colors';
import { updateCollateral } from '../../actions/addLong';

const SidebarContainer = styled.div`
  width: 30rem;
  margin: 2rem;
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

class Sidebar extends Component {
  state = {
    percentage: 0,
  }

  onChangeRange = (event) => {
    const percentage = get(event, 'target.value', 0);
    this.setState({ percentage });
  }

  setCollateral = (event) => {
    const { onUpdateCollateral } = this.props;
    const collateral = parseInt(get(event, 'target.value', 0));
    onUpdateCollateral(collateral);
  }

  accountBody = () => {
    const { percentage } = this.state;
    const { collateral } = this.props;
    return (
      <>
        <Row direction='column'>
          <Input label='My collateral' value={collateral} onChange={event => this.setCollateral(event)} />
        </Row>
        <Row direction='column' marginVertical={20}>
          <Text text='R%' />
          <Range value={percentage} onChange={this.onChangeRange} />
        </Row>
        <Row>
          <Column flex={2}>
            <Text text='R daily' />
          </Column>
          <Column align='flex-end'>
            <Text bold text={(collateral * (parseInt(percentage) + 1)) / 100} />
          </Column>
        </Row>
      </>
    )
  }

  totalsLong = (type) => {
    const { longs, shorts } = this.props;
    const data = type === 'LONG' ? longs : shorts;
    const sumByPosition = sumBy(data, ({ position }) => parseFloat(position));
    const sumByLoss = sumBy(data, ({ loss }) => parseInt(loss));
    let buyPrice = 0;
    let stopPrice = 0;
    each(data, ({ price, position, loss, stop }) => {
      buyPrice = parseInt(buyPrice + ((parseFloat(position) / sumByPosition) * parseInt(price)));
      stopPrice = parseInt(stopPrice + ((parseInt(loss) / sumByLoss) * parseInt(stop)))
    });
    return (
      <>
        <Row>
          <Column flex={2}>
            <Text text='Buy price' />
          </Column>
          <Column align='flex-end'>
            <Text bold text={buyPrice.toString()} />
          </Column>
        </Row>
        <Row>
          <Column flex={2}>
            <Text text='Position' />
          </Column>
          <Column align='flex-end'>
            <Text bold text={sumByPosition.toString()} />
          </Column>
        </Row>
        <Row>
          <Column flex={2}>
            <Text text='Stop' />
          </Column>
          <Column align='flex-end'>
            <Text bold text={stopPrice.toString()} />
          </Column>
        </Row>
        <Row>
          <Column flex={2}>
            <Text text='Stop Loss' />
          </Column>
          <Column align='flex-end'>
            <Text bold text={sumByLoss.toString()} />
          </Column>
        </Row>
      </>
    )
  }

  render () {
    return (
      <SidebarContainer>
        <Card
          header={<Text text='My account' bold />}
          body={this.accountBody()}
        />
        <Card
          header={<Text text='LONG Totals' bold />}
          body={this.totalsLong('LONG')}
          margin='2rem 0'
        />
        <Card
          header={<Text text='SHORT Totals' bold />}
          body={this.totalsLong('SHORT')}
          margin='2rem 0'
        />
      </SidebarContainer>
    );
  }
}

const mapStateToProps = ({ totals }) => ({
  longs: get(totals, 'longs', []),
  shorts: get(totals, 'shorts', []),
  collateral: get(totals, 'collateral', 0),
});

const mapDispatchToProps = dispatch => ({
  onUpdateCollateral(collateral) {
    dispatch(updateCollateral(collateral));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
