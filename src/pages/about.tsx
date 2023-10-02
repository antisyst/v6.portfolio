import React from 'react';
import styled from 'styled-components';
import ScrollReveal from '@/utils/ScrollReveal';
import content from '../config/content.json';
import SkillsElement from '@/components/skills';


const AboutRouteMain = styled.main `
  text-align: left;
  margin-top: 3vh;
`
const RouterActionTitle = styled.h1 `
  font-family: var(--font-clash);
  color: var(--color-component-white);
  border-bottom: 10px solid var(--color-component-main);
  padding-bottom: 6px;
  text-transform: uppercase;
  width: 20%;
  font-size: calc(10px + 5vmin);
  text-align: left;
  margin-bottom: 4vh;

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
`
const AboutRouteContent = styled.p `
  text-align: left;
  margin: 1vh 0;
  padding-right: 4%;
  font-size: calc(10px + 1.6vmin);
  color: var(--color-component-white);
  font-family: var(--font-clash);
`

const About = () => {

  const aboutData = content[1];

 

  return (
    <AboutRouteMain>
      <ScrollReveal>
      <RouterActionTitle>About Me</RouterActionTitle>
      </ScrollReveal>
      <ScrollReveal>
        <AboutRouteContent>{aboutData.content}</AboutRouteContent>
        <AboutRouteContent>{aboutData.second}</AboutRouteContent>
      </ScrollReveal>
      <SkillsElement/>
    </AboutRouteMain>
  )
}

export default About;