import './App.css';

const PetsItem = (props) =>  {

    const removePets = (idToRemove) => {
        const updateArray = props.pets.filter((pet) => {
            return pet.id !== idToRemove;
        });
        props.setPets(updateArray);
    };

    return(
        <>
            <ul>
                {props.pets.map((pet, index) => (
                    <li key={index}>
                        <h1>Name: {pet.name}</h1>
                            <h2>Id: {pet.id}</h2>
                            <img src={pet.url} style={{width:600, height: 600}} alt={'Photo of ' + pet.name}></img>
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

