import React from "react";
import styled from "styled-components";


const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    overflow: auto;
`;

const Thead = styled.thead`
    border: 1px solid black;
    font-weight: bold;
`;

const Tbody = styled.tbody`

`;

const Th = styled.th`
    border: 1px solid black;
    font-weight: bold;
`;


const Tr = styled.tr`

`;

const Td = styled.td`
    border: 1px solid black;
    padding: 8px;
    text-align: center;
    width: auto;
`;

const SmartphoneImage = styled.img`
    height: 50%;
    width: 50%;
`;




const Smartphones = ({ smartPhones }) => {
    
    return (
        <>
            <h1>Smartphones</h1>
            <Table>
                <Thead className="smartphones-table-header">
                    <Tr>
                        <Th>Image</Th>
                        <Th>Name</Th>
                        <Th>Brand</Th>
                        <Th>Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {smartPhones.map(smartPhone => (
                        <Tr key={Math.random()} style={{ border: "1px solid black" }}>
                            <Td><SmartphoneImage src={smartPhone.image} alt={smartPhone.name}/></Td>
                            <Td className>{smartPhone.name}</Td>
                            <Td className>{smartPhone.brand}</Td>
                            <Td className>{smartPhone.description}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>  
        
    );
}

export default Smartphones;