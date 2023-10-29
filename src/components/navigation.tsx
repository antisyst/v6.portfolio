import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLogo from '@/assets/logo';
import { motion } from "framer-motion";
import { BiMessageSquareDots } from 'react-icons/bi';


const tabs = [
    { id: 1, label: "Home", router: "/" },
    { id: 2, label: "About", router: "/about" },
    { id: 3, label: "Projects", router: "/projects" },
    { id: 4, label: "Playlist", router: "/playlist" },
  ];




const NavigationConfig = styled.div `
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;
`
const NavLogoItem = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 2200;

    @media only screen and (max-width: 900px) {
      display: none;
    }

    svg {
        margin-top: 4px;
        width: 75px;
        height: 60px;

        @media only screen and (max-width: 1000px) and (min-width: 800px) {
          width: 65px;
          height: 50px;
        }
    }
`
const BetaTitleItem = styled.h2 `
    font-size: 18px;
    color: var(--color-component-black);
    font-family: var(--font-clash);
    padding: 1px 5px;
    user-select: none;
    margin-top: 12px;
    margin-left: 4px;
    filter: drop-shadow(0 0 0.5rem var(--color-component-main));
    border-radius: 8px;
    background: var(--color-component-main);

    @media only screen and (max-width: 800px)  {
      font-size: 16px;
      padding: 1px 4px;
      margin-top: 2px;
      margin-left: 4px;
    }
`
const NavLinksConfig = styled.nav `
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-out;
    position: fixed;
    width: 100%;
    z-index: 2000;
    height: 80px;
    justify-content: center;
    gap: 5px 0;
    padding: 10px;
    flex-wrap: nowrap;

    
    @media only screen and (max-width: 800px) {
      width: 96%;
      padding: 0;
    }

    
`
const NavLinksBackDrop = styled.div `
    backdrop-filter: blur(5px);
    z-index: 2000;
    transition: all 0.3s ease-out;
    margin-right: 20px;

    @media only screen and (max-width: 900px) {
      margin-right: 0;
    }
`
const MessageActionItem = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
const LinkRouterAction = styled(Link) `
    text-transform: uppercase;
    font-size: 21px;
    font-family: var(--font-clash);
    cursor: pointer;
    color: var(--color-component-white);
    font-weight: bold;
    position: relative;
    text-decoration: none;
    background: none;
    padding: 12px 29px;
    transition: all 0.3s ease-out;

    @media only screen and (max-width: 800px) {
      font-size: 18px;
      padding: 5px 7px;
      cursor: none;
    }


    &:hover {
        filter: drop-shadow(0 0 0.5rem var(--color-component-main));
    }

    &:nth-child(4) {
       &::after {
        position: absolute;
        content: "V6F";
        filter: drop-shadow(0 0 0.75rem var(--color-component-main));
        font-size: 14px;
        border-radius: 100px;
        top: 6px;
        padding: 3px;
        background: var(--color-component-main);
        margin-left: 5px;

        @media only screen and (max-width: 800px) {
          display: none;
        }
       }
    }
`
const MotionAnimationSharedItem = styled(motion.div) `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: drop-shadow(0 0 0.5rem var(--color-component-main));
    background: var(--color-component-main); 
    border-radius: 9999px; 
    z-index: -10;
`
const MessageActionButton = styled.a `
    background: var(--color-component-main);
    z-index: 2200;
    border: none;
    display: flex;
    filter: drop-shadow(0 0 0.5rem var(--color-component-main));
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding: 15px;
    color: var(--color-component-white);
    transition: all 0.3s linear;
    border-radius: 50%;

    svg {
        padding-left: 2px;
    }

    &:hover {
        filter: drop-shadow(0 0 0.7rem var(--color-component-main));
    }

    @media only screen and (max-width: 900px) {
      position: fixed;
      right: 20px;
      bottom: 30px;
      font-size: 26px;
    }
`

const Navigation = () => {


    const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolling = window.scrollY > 0;
        setScrolling(isScrolling);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 
  
    const navClassName = scrolling ? 'scrolled' : '';

  return (
    <NavigationConfig>
        <NavLogoItem>
                 <MainLogo/>
            <BetaTitleItem>V6</BetaTitleItem>
        </NavLogoItem>
                    <NavLinksConfig>
                        <NavLinksBackDrop  className={`  ${navClassName}`}>
                            {tabs.map((tab) => (
                          <LinkRouterAction href={tab.router}
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${
                                    activeTab === tab.id ? "" : "scDoeg-c-fdg"
                                } scDoeg-c-fdg`}
                                >
                                {activeTab === tab.id && (
                                    <MotionAnimationSharedItem
                                    layoutId="bubble"
                                    className="div_motion"
                                    transition={{ type: "spring", duration: 1.4 }}
                                    ></MotionAnimationSharedItem>
                                )}
                                {tab.label}
                          </LinkRouterAction>
                        ))}
                    </NavLinksBackDrop>
                    </NavLinksConfig>
        <MessageActionItem>
                    <MessageActionButton href='https://t.me/rmzn_dev' target='_blank'>
                      <BiMessageSquareDots/>
                    </MessageActionButton>
        </MessageActionItem>
    </NavigationConfig>
  )
}

export default Navigation