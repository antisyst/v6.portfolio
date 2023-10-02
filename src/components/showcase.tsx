import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import content from '../config/content.json';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const ShowcaseConfig = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 87vh;
  color: var(--color-component-white);
  padding: 0 4%;
`

const NameTitleItem = styled.h1 `
  font-size: calc(10px + 11vmin);
  font-family: var(--font-clash);

  span {
    background: var(--color-component-main);
    padding: 0 15px;
  }
`
const FieldTitleItem = styled.h1 `
  font-size: calc(10px + 7.5vmin);
  font-family: var(--font-clash);
  font-weight: bold;
  line-height: 156%;
  margin-bottom: 7vh;

  @media only screen and (max-width: 700px) {
    line-height: 150%;
  }

  span {
    border-bottom: 15px solid var(--color-component-main);
    padding-bottom: 6px;
    filter: drop-shadow(0 0 0.3rem var(--color-component-main));

    @media only screen and (max-width: 700px) {
       border-bottom: 6px solid var(--color-component-main);
       padding-bottom: 2px;
    }
    }
  }
`
const ShowcaseCaptionTitle = styled.div `
  text-align: left;
  width: 34%;
  margin-left: 60%;
  filter: drop-shadow(0 0 0.3rem var(--color-component-main));
  font-family: var(--font-clash);
  z-index: 1;
  font-size: 19px;

  span {
    color: var(--color-component-main);
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
     margin-left: 5%;
  }
`
interface ScrollRevealProps {
  children: React.ReactNode;
}

const Showcase = () => {
  const showcaseData = content[0];

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
    <ShowcaseConfig>
          <motion.div ref={ref}  initial="hidden" animate={controls} variants={{ visible: { opacity: 1, y: 0 },
             hidden: { opacity: 0, y: 100 }, }} transition={{ duration: 0.7 }} >
             <NameTitleItem>{showcaseData.name} <span>{showcaseData.second}</span></NameTitleItem>
           </motion.div>
           <motion.div ref={ref}  initial="hidden" animate={controls} variants={{ visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 }, }} transition={{ duration: 1.1 }}>
            <FieldTitleItem><span>Transforming</span> Vision into Stunning <span>Reality</span>
            </FieldTitleItem>
           </motion.div>
           <motion.div ref={ref}  initial="hidden" animate={controls} variants={{ visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 }, }} transition={{ duration: 1.7 }}>
              <ShowcaseCaptionTitle>
              This version is even more condensed, keeping the key information while maintaining a <span>clean</span> and <span>minimalist</span> approach. Adjust as needed to fit your personal style and preferences.
              </ShowcaseCaptionTitle>
              </motion.div>
    </ShowcaseConfig>
  )
}

export default Showcase