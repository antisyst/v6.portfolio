import React, { useState } from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

const FormBackground = styled.div `
    backdrop-filter: blur(20px);
    display: flex;
    background: rgba(0,0,0, 0.8);
    transition: all 0.7s ease-out;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`
const FormInterface = styled.div `
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
const FormConfig = styled.form `
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.7s ease-out;
    padding: 30px;
    align-items: center;
    justify-content: flex-end;
    border: 2px solid var(--color-component-main);
    height: 440px;
    width: 400px;
    filter: drop-shadow(0 0 0.6rem var(--color-component-main));
    border-radius: 30px;
    flex-wrap: nowrap;
    background: var(--color-component-prim);

    @media only screen and (max-width: 800px) {
        width: 92%;
       height: 450px;
    }
`
const CloseButtonItem = styled.button `
    background: var(--color-component-main);
    color: var(--color-component-white);
    filter: drop-shadow(0 0 0.3rem var(--color-component-main));
    font-size: 28px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 50%;
    border: none;
    transition: all 0.3s ease-out;

    &:hover {
         opacity: 0.8;
    }
`
const FormInputItem = styled.input `
    outline: none;
    width: 100%;
    font-size: 17px;
    font-family: var(--font-clash);
    border-radius: 30px;
    color: var(--color-component-white);
    background: none;
    border: 3px solid var(--color-component-main);
    padding: 17px;
    display: flex;
    align-items: flex-start;
    font-weight: bold;
`
const MessageTextArea = styled.textarea `
    resize: none;
    border: 3px solid var(--color-component-main);
    font-family: var(--font-clash);
    display: flex;
    align-items: flex-start;
    border-radius: 30px;
    background: none;
    font-size: 17px;
    color: var(--color-component-white);
    outline: none;
    padding: 20px;
    width: 100%;
    font-weight: bold;
    height: 170px;
`
const MessageSubmitAction = styled.button `
    border: none;
    width: 100%;
    background: var(--color-component-main);
    color: var(--color-component-white);
    font-weight: bold;
    margin-top: 6px;
    border-radius: 30px;
    padding: 20px;
    font-size: 20px;
    font-family: var(--color-clash);
`
interface FormProps {
  isVisible: boolean;
  onClose: () => void;
}


const FormField: React.FC<FormProps> = ({ isVisible, onClose  }) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        onClose();
      };
    

  return (
    <FormBackground style={{ display: isVisible ? 'block' : 'none' }}>
        <FormInterface>
        <FormConfig>
         <CloseButtonItem onClick={handleClick}>
            <CgClose/>
         </CloseButtonItem>
            <FormInputItem type="text" placeholder='Your Name' />
            <MessageTextArea  placeholder='Your Message'/>
            <MessageSubmitAction>Send Message</MessageSubmitAction>
       </FormConfig>
       </FormInterface>
    </FormBackground>
  );
};

export default FormField;