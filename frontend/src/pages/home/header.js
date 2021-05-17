import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../../media/Icon.svg";

const Nav = styled.nav`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 20px;
    -webkit-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    -moz-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
    box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
`;

const Logo = styled.img`
    height: 100%;
    width: auto;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
`;

const MenuLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: #7209B7;
    padding: 5px 10px;
    height: 100%;
`;

const LogoLink = styled(Link)`
    height: 100%;
`

const Header = () => {
    return (
        <Nav>
            <LogoLink to="/"><Logo src={Icon}/></LogoLink>
            <Menu>
                <MenuLink to="/start">Explore</MenuLink>
                <MenuLink to="/login">Log in</MenuLink>
                <MenuLink to="/signup">Sign up</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Header;