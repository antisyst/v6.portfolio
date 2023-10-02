import React from 'react';
import styled from 'styled-components';

const FooterConfig = styled.footer`
  margin-top: 4vh;
  text-align: center;
  border-top: 2px solid var(--color-component-white);
  background: rgba(0,0,0,0.4);
  padding: 20px;
`
const CreatorContent = styled.h2 `
  font-weight: bold;
  text-align: center;
  margin: 5px 0;
  color: var(--color-component-white);
  font-size: 19px;
  font-family: var(--font-clash);

  span {
    color: var(--color-component-main);
  }
`
const CopyrightTitle = styled.p `
color: var(--color-component-main);
text-align: center;
font-size: 17px;
font-family: var(--font-clash);
`

const Footer = () => {
  return (
    <FooterConfig>
      <CreatorContent>developed & designed by <span>Ramazan Azimli</span></CreatorContent>
      <CopyrightTitle>Copyright 2023 ©</CopyrightTitle>
    </FooterConfig>
  )
}

export default Footer