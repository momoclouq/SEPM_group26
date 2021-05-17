import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.section`
    width: 100%;
    height: 20rem;
    background: #000428;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #004e92, #000428); 
    background: linear-gradient(to right, #004e92, #000428); 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RegisterHeader = styled.h1`
    text-transform: uppercase;
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
`;

const RegisterSubheader = styled.p`
    font-weight: 300;
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
`;

const RegisterButton = styled(Link)`
    text-decoration: none;
    background-color: #ffffff;
    color: #7209B7;
    font-weight: 400;
    display: block;
    padding: 10px 15px;
    border-radius: 200rem;
    transition: box-shadow 0.25s ease;
    &:hover {
        box-shadow: 0px 0px 4px #fff
    }
`;

const RegisterPanel = () => {
    return (
        <Wrapper> 
            <RegisterHeader>Simple steps to get started with Trainee</RegisterHeader>
            <RegisterSubheader>graphical instructions to begin model training</RegisterSubheader>
            <RegisterButton to="/signup">Start now</RegisterButton>
        </Wrapper>
    )
}

export default RegisterPanel;