/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    '--outerHeight': '8px',
    '--outerPadding': '0px',
    '--innerHeight': '8px',
  },
  'medium': {
    '--outerHeight': '12px',
    '--outerPadding': '0px',
    '--innerHeight': '12px',
  },
  'large': {
    '--outerHeight': '24px',
    '--outerPadding': '4px',
    '--innerHeight': '16px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  value = Math.max(0, value)
  value = Math.min(100, value)
  return <OuterBar style={styles} role="progressbar" aria-valuenow={value} aria-labell={"Progress Bar"}>
    <InnerBar style={styles} value={value} />
  </OuterBar >
};

const OuterBar = styled.div`
  width: 370px;
  height: var(--outerHeight);
  padding: var(--outerPadding);
  background-color: ${COLORS.transparentGray15};
  position: relative;
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const InnerBar = styled.div`
  width: ${p => p.value}%;
  height: var(--innerHeight);
  background-color: ${COLORS.primary};
  border-radius: ${p => p.value > 99 ? '4px' : '4px 0px 0px 4px'};
`

export default ProgressBar;
