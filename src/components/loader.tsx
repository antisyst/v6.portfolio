import React from 'react';
import styled from 'styled-components';
import MainLogo from '@/assets/logo';



const LoaderConfig = styled.div `
    display: flex;
    flex-direction: column;
    background: var(--color-component-black);
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0;
    z-index: 1000000;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    animation: slideDownAndDisappear 1s ease-in-out 5s forwards;

    svg {
      filter: drop-shadow(0 0 0.97rem var(--color-component-white));
      width: 110px;
      height:59px
      filter: drop-shadow(0 0 0.97rem var(--color-component-white));
    }
`
const LoaderContent = styled.h3 `
  animation: LoaderContentFrame 1s ease-in-out 1s forwards;
  opacity: 0;
  color: var(--color-component-black);
  filter: none;
`
const LoaderContentSecond = styled.h3 `
  animation: LoaderContentFrameSecond 1s ease-in-out 2s forwards;
  opacity: 0;
  color: var(--color-component-black);
  filter: none;
`
const LoaderContentConfig = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 17px;
    text-transform: uppercase;
    font-family: var(--font-clash);
    font-size: 23px;
    border-top: 3px solid var(--color-component-main);
    gap: 10px 7px;
    padding-top: 10px;
`
const Loader = () => {


  return (
        <LoaderConfig>
            <MainLogo/>
        </LoaderConfig>
  )
}

export default Loader
