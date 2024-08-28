import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 20vw;
    display: flex;
    background-color: lightgray;
    margin: 1rem;
    box-sizing: border-box;
    border-radius: 5px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    
    @media (max-width: 400px) {
        width: 80%;
    } 
`;

const ImgContainer = styled.div`
    width: 30%;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const CardImage = styled.img`
    width: 50px; 
    height: 50px; 
    border-radius: 50%;
    object-fit: cover;
`;

const ContentContainer = styled.div`
    width: 70%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const BrandContainer = styled.div`
    width: 100%;
    white-space: nowrap;     
    overflow: hidden; 
    text-overflow: ellipsis;
`;


const NameContainer = styled.div`
    width: 100%;
    white-space: nowrap;     
    overflow: hidden; 
    text-overflow: ellipsis;
`;



const Card = ({ image, name, brand })=> {
    return <StyledCard>
        <ImgContainer>

           {image && <CardImage src={image} alt={name}/>}
        </ImgContainer>
        <ContentContainer>
            <NameContainer>{name}</NameContainer>
            <BrandContainer>{brand}</BrandContainer>
        </ContentContainer>
        
    </StyledCard>
        
}

export default Card;