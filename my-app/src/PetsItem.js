import './App.css';
import React, { useState } from 'react';

const data = require('./data/pets.json');

function PetsItem () {

    const [pets, setPets] = useState(data)

    const removePets = (idToRemove) => {
        const updateArray = pets.filter((pet) => {
            return pet.id !== idToRemove;
        });
        setPets(updateArray);
    };

    return(
        <>
            <ul>
                {pets.map((pet, index) => (
                    <li key={index}>
                        <h1>Name: {pet.name}</h1>
                            <h2>Id: {pet.id}</h2>
                            <img src={pet.url} style={{width:500, height: 500}} alt={'Photo of ' + pet.name}></img>
                            <button onClick={() => removePets(pet.id)}>Remove cat</button>
                    </li>
                ))}
            </ul>
        </>
    )}  
    
export default PetsItem;

// import React, {Fragment} from "react";
// import './App.css';

// function PetsItem (props) {
//     const pet = props.pet;
//      console.log(pet.id)
//         return(
//             <>
//                   <h1>Name: {pet.name}</h1>
//                   <h2>Id: {pet.id}</h2>
//                   <img src={pet.url} style={{width:500, height: 500}} alt={'Photo of ' + pet.name}></img>
//             </>
//     )}  
    
//     export default PetsItem;

