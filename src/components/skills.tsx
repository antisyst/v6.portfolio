import React, { useEffect } from 'react';
import { SiReact, SiNextdotjs, SiRedux, SiVitest, SiJquery, SiTailwindcss, SiAxios, SiJavascript, SiGit, SiBootstrap, SiJest, SiWebpack, SiBabel, SiHtml5, SiCss3, SiMui, SiStyledcomponents } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { DiSass, DiNpm } from 'react-icons/di';
import { TbBrandFramerMotion } from 'react-icons/tb';
import styled from 'styled-components';
import Skill from '@/utils/SkillsConfig';
import ScrollReveal from '@/utils/ScrollReveal';
import skillsData from '@/config/skills.json';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const SkillsConfigContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 4vh;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`
const SkillsConfigItem = styled.div `
    width: 280px;
    height: 90px;
    display: flex;
    justify-content: flex-start;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    backdrop-filter: blur(10px);
    padding-left: 30px;
    border-radius: 16px;
    background:  rgb(0, 0, 0, 0.2);

    svg {
        font-size: 50px;
        filter: drop-shadow(0 0 0.9rem var(--color-component-main));
        width: 50px;
        vertical-align: middle;
        color: var(--color-component-main);
        transition: all 0.3s ease-out;
    }

    h2 {
      font-family: var(--font-clash);
      margin-left: 15px;
      font-size: 27px;
    }
`

const SkillsElement = () => {

    const skills: Skill[] = skillsData.skills;

    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);


  return (
    <SkillsConfigContainer>
                  {skills.map((skill, index) => (
                    <ScrollReveal>
                        <SkillsConfigItem key={index}>
                             {iconComponents[skill.icon] && React.createElement(iconComponents[skill.icon])} 
                            <h2>{skill.name}</h2>
                        </SkillsConfigItem>
                    </ScrollReveal>
                    ))}
    </SkillsConfigContainer>
  )
}

const iconComponents: Record<string, React.ComponentType<any>> = {
    SiHtml5,
    SiCss3,
    FaVuejs,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiRedux,
    DiSass,
    SiVitest,
    SiStyledcomponents,
    DiNpm,
    SiWebpack,
    SiJquery,
    SiTailwindcss,
    SiMui,
    SiBootstrap,
    SiAxios,
    SiGit,
    SiBabel,
    SiJest,
    TbBrandFramerMotion,
  };

export default SkillsElement;