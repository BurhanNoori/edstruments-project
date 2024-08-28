import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 1rem;
`;

const Nav = styled.nav`
    display: flex;
    @media(max-width: 768px) {
        display: ${ props=> props.$isOpen ? 'flex' : 'none'};
        flex-direction: column;

    }
`;

const StyledLink = styled(Link)`
    margin: 0 1rem;
    color: white;
    text-decoration: none;

    &:hover {
    color: #ddd;
    }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

`;


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return ( 
        <Header>
            <Nav $isOpen={isMenuOpen}>
                <StyledLink to="/dashboard">One</StyledLink>
                <StyledLink to="/smartphones">Two</StyledLink>
                <StyledLink to="/contact-us">Three</StyledLink>
            </Nav>
            <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>
        </Header>
    );
}

export default Navbar;