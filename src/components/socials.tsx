import React from 'react';
import styled from 'styled-components';
import { FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const SocialElementsConfig = styled.div `
    position: fixed;
    right: -5px;
    top: 20%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 3px solid var(--color-component-main);
    background: rgba(18,18,18, 0.6);
    padding: 20px;

    @media only screen and (max-width: 700px) {
        display: none;
    }
`
const SocialElementsContainer = styled.div `
    display: flex;
    padding-top: 7px;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px 0;
    justify-content: center;

    a {
        transition: all 0.3s ease-out;
        color: var(--color-component-white);
        text-decoration: none;
        font-size: 32px;

        &:hover {
          filter: drop-shadow(0 0 0.7rem var(--color-component-main));
          color: var(--color-component-main);
        }
    }
`

const Socials = () => {
  return (
    <SocialElementsConfig>
        <SocialElementsContainer>
            <a href="https://www.instagram.com/rmznzz/" target='_blank'><FiInstagram/></a>
            <a href="https://www.linkedin.com/in/ramazan-azimli-135475245/" target='_blank'><FiLinkedin/></a>
            <a href="https://github.com/antisyst" target='_blank'><FiGithub/></a>
        </SocialElementsContainer>
    </SocialElementsConfig>
  )
}

export default Socials