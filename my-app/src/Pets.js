import './App.css';
import PetsItem from './PetsItem';
import React, { useState } from 'react';

const data = require('./data/pets.json');

function Pets() {

    const [pets, setPets] = useState(data)

    return (
        <>
            <div>
                <h1>Oh! Hello Pets</h1>
                <PetsItem pets={pets} setPets={setPets}/>
            </div>
        </>
    ) 
}

export default Pets;

// import React, { useState } from 'react';
// import './App.css';
// import PetsItem from './PetsItem';

// const data = require('./data/pets.json');

// function Pets() {
   
//     const [pets, setPets] = useState(data)

//     const removePets = (idToRemove) => {
//         const updateArray = pets.filter((pet) => {
//             return pet.id !== idToRemove;
//         });
//         setPets(updateArray);
//     };

//     return (
//         <>
//             <div>
//                 <h1>Oh! Hello Pets</h1>
//                 <ul>
//                     {pets.map((pet, index) => (
//                         <li key={index}>
//                             <PetsItem pet={pet} />
//                             <button onClick={() => removePets(pet.id)}>Remove cat</button>
//                         </li>
                        
//                     ))};
//                 </ul>
//             </div>
//         </>
//     ) 
// }

//export default Pets;

