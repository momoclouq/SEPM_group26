import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.section`
    width: 100%;
    height: 20rem;
    background-color: #7209B7;
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
`;

const RegisterSubheader = styled.p`
    font-weight: 200;
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 20px;
`;

const RegisterButton = styled(Link)`
    text-decoration: none;
    background-color: #ffffff;
    color: #7209B7;
    font-weight: 200;
    display: block;
    padding: 10px 15px;
    border-radius: 200rem;
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