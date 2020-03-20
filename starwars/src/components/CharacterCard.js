import React from 'react';
import styled from 'styled-components';
export default function CharacterCard(props){
    const CardContainer = styled.div`
        color:orange;
        background-color:rgba(0,0,0,0.7);
        width:30%;
        margin-bottom:20px;
        border:20px solid rgba(0,0,0,0.75);
    `;
    return(
        <CardContainer>
            <h1>Name: {props.name}</h1>
            <h3>Height: {props.height}</h3>
            <h3>Birth Year: {props.birth_year}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Mass: {props.mass}</h3>
        </CardContainer>
    );
}