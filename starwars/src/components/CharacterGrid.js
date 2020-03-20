import React, { useState , useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterGrid(){
    const [person,getPerson] = useState();
    useEffect(() => {        
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {   
            console.log(response.data.results);      
            getPerson(response.data.results);
        })
        .catch(error => {
            console.log("Error!" , error);})
    }, []);

 return(
     <>
        {person && person.map((obj, index) => {
            return <CharacterCard
                        key={index}
                        name={obj.name}
                        height={obj.height}
                        birth_year={obj.birth_year}
                        gender={obj.gender}
                        mass={obj.mass} />
        }) } 
    </>
 );   
}