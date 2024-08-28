import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #ddd;
    color: #333;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 1rem;
`;

const Footer = () => {
    return <FooterContainer>This is a footer.</FooterContainer>
}

export default Footer;