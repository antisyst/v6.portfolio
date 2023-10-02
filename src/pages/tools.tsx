import React from 'react';
import LottieAnimation from '@/utils/LottieAnimation';
import styled from 'styled-components';

const ToolsRouteMain = styled.main `
  text-align: left;
  padding-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  justify-content: center;
`
const ToolsInfoToken = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    padding-bottom: 8px;
    border-bottom: 8px solid var(--color-component-main);
    font-size: 37px;
  }
`

const Tools = () => {
  return (
    <ToolsRouteMain>
      <ToolsInfoToken>
      <h1>the development process is ongoing</h1>
      </ToolsInfoToken>
    </ToolsRouteMain>
  )
}

export default Tools