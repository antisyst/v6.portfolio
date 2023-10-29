import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PiBatteryVerticalHigh } from 'react-icons/pi';
import { GetServerSideProps } from 'next';

const EnergyActionConfig = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: var(--color-component-black);
    height: 100vh;
    padding: 0 5%;
    left: 0;
    z-index: 200033;
    position: fixed;
    width: 100%;
`
const EnergySaverContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0 8px;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px 0;
  }

  svg {
   filter: drop-shadow(0 0 0.97rem var(--color-component-main));
   font-size: 240px; 
   transition: all 0.3s ease-out;
   color: var(--color-component-main);

   @media only screen and (max-width: 700px) {
    transform: rotate(90deg);
    font-size: 200px;
   }
  }
`
const EnergyInfoContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    color: var(--color-component-main);
    border-bottom: 5px solid var(--color-component-main);
    filter: drop-shadow(0 0 0.5rem var(--color-component-main));
    margin-bottom: 12px;

    @media only screen and (max-width: 700px) {
      font-size: 27px;
    }
  }
  h2 {
    font-family: var(--font-clash);
    font-size: 22px;
    text-transform: uppercase;

    @media only screen and (max-width: 700px) {
      font-size: 20px;
    }

    span {
      color: var(--color-component-main);
      font-size: 24px;
      filter: drop-shadow(0 0 0.5rem var(--color-component-main));
    }
  }
`


const EnergySavingWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let visibilityTimeout: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(true);
        document.title = 'Energy Saving Mode';
      } else {
        visibilityTimeout = setTimeout(() => {
          setIsVisible(false);
          document.title = 'Ramazan Azimli | Frontend UI Developer';
        }, 1300);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(visibilityTimeout);

      document.title = 'Your Page Title';
    };
  }, []);


  return (
    <EnergyActionConfig style={{ visibility: isVisible ? 'visible' : 'hidden', opacity: isVisible ? '1' : '0', position: 'fixed', transition: 'all 0.3s ease-out'}}>
      <EnergySaverContainer>
        <div>
            <PiBatteryVerticalHigh/>
        </div>
        <EnergyInfoContent>
          <h1>ENERGY SAVING MODE</h1>
          <h2><span>V5.</span> Power Saving Mode is enabled. Some features</h2>
          <h2>may be limited for energy efficiency.</h2>
        </EnergyInfoContent>
      </EnergySaverContainer>
    </EnergyActionConfig>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {

  return {
      props: {},
  };
};

export default EnergySavingWidget;