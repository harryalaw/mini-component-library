import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--width': '24px' }}>
          <Icon id={'chevron-down'} size={24} strokeWidth={2} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
  width: var(--width);
  height: var(--width);
  pointer-events: none;
`

const NativeSelect = styled.select`
  width: 100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  opacity:0;
  appearace: none;
`

const PresentationalBit = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  ${NativeSelect}:hover + & {
    color: ${COLORS.black}
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`



export default Select;
