import React from "react";
import Card from "./Card";
import styled from "styled-components";

const DashboardUl = styled.ul`

    display: flex;
    flex-wrap: wrap;
    list-style-type: none;

    @media(max-width: 400px) {
        flex-direction: column;
    }
`;


const Dashboard = ({smartPhones}) => {
    
    return <div>
        <h1>Dashboard</h1>
        <DashboardUl>
            {smartPhones.map((smartPhone) => (
                <li key={smartPhone.id}>
                    <Card image={smartPhone.image} name={smartPhone.name} brand={smartPhone.brand} />
                </li>
            ))}
        </DashboardUl>
    </div>
}

export default Dashboard;