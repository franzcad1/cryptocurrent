import React from 'react'
import styled from 'styled-components'

const FullBar = styled.div`
  display: flex;
  flex: 1 1 0%;
  width: 55px;
  height: 13px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2172e5;
  margin-top: 2.5px;
`;

export const PartialBar = styled.div`
  height: 100%;
  border-radius: 8px;
  width: ${(props) => props.width}%;
  background-color: #ffffff;
`;
export default function ProgressBar(props) {
  return (
    <FullBar>
    <PartialBar width={props.width}/>
    </FullBar>
  )
}
