import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.section`
    width: 100%;
    height: 30rem;
    background-image: linear-gradient(to right bottom, #3A0CA3, #7209B7);
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeroHeader = styled.h1`
    text-transform: uppercase;
    color: #ffffff;
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-align: center;
`;

const HeroSubheader = styled.p`
    font-weight: 200;
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
`;

const HeroButton = styled(Link)`
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

const HeroPanel = () => {
    return (
        <Wrapper> 
            <HeroHeader>Cloud-based ML training</HeroHeader>
            <HeroSubheader>Fast, cheap and friendly</HeroSubheader>
            <HeroButton to="/signup">Register now</HeroButton>
        </Wrapper>
    )
}

export default HeroPanel;