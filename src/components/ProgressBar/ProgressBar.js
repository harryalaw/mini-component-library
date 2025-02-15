/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    'small': {
        height: 8,
        padding: 0,
        radius: 4,
    },
    'medium': {
        height: 12,
        padding: 0,
        radius: 4,
    },
    'large': {
        height: 16,
        padding: 4,
        radius: 8,
    }
}

const ProgressBar = ({ value, size }) => {
    const styles = SIZES[size]
    value = Math.max(0, value)
    value = Math.min(100, value)

    return (
        <Wrapper
            style={{
                '--padding': styles.padding + 'px',
                '--radius': styles.radius + 'px'
            }}
            role="progressbar"
            aria-valuenow={value}
            aria-labell={"Progress Bar"}
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <BarWrapper>
                <Bar style={{
                    '--width': value + '%',
                    '--height': styles.height + 'px'
                }}
                />
            </BarWrapper>
        </Wrapper>
    )
};

const BarWrapper = styled.div`
  /* Trim off corners when progress bar is near full  */
  overflow: hidden;
  border-radius: 4px;
`

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

export default ProgressBar;
